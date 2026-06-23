"use client";

import { useMemo, useState } from "react";
import type { CmsPage, CmsSection, CmsStore } from "@/lib/cms";
import { aboutContent } from "@/data/about-content";
import { blogContent } from "@/data/blog-content";
import { contactContent } from "@/data/contact-content";
import { expertiseContent } from "@/data/expertise-content";
import { homeContent } from "@/data/home-content";

const fixedFallbacks: Record<string, unknown> = {
  home: homeContent,
  about: aboutContent,
  expertise: expertiseContent,
  blog: blogContent,
  contact: contactContent
};

type CmsStoreResponse = CmsStore & {
  storage?: string;
  error?: string;
};

function createSection(type: CmsSection["type"]): CmsSection {
  return {
    id: `section-${Date.now()}`,
    type,
    title: type === "cards" ? "New Cards" : "New Section",
    text: "Update this content.",
    items:
      type === "cards"
        ? [{ title: "Card title", text: "Card text", image: "", alt: "" }]
        : []
  };
}

export function CmsAdmin({
  initialStore,
  isProtected
}: {
  initialStore: CmsStore;
  isProtected: boolean;
}) {
  const [store, setStore] = useState(initialStore);
  const [selectedId, setSelectedId] = useState(initialStore.pages[0]?.id || "");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [storage, setStorage] = useState("");

  const selectedPage = useMemo(
    () => store.pages.find((page) => page.id === selectedId) || store.pages[0],
    [selectedId, store.pages]
  );

  const updatePage = (patch: Partial<CmsPage>) => {
    setStore((current) => ({
      pages: current.pages.map((page) =>
        page.id === selectedPage.id ? { ...page, ...patch } : page
      )
    }));
  };

  const cmsHeaders = (json = false) => ({
    ...(json ? { "Content-Type": "application/json" } : {}),
    ...(password ? { "x-cms-password": password } : {})
  });

  const requestJson = async <T,>(url: string, init?: RequestInit): Promise<T> => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(url, {
        ...init,
        signal: controller.signal
      });
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.error || `Request failed with status ${response.status}.`);
      }

      return data as T;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("CMS request timed out. Please check production storage settings.");
      }

      throw error;
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const refresh = async () => {
    try {
      const data = await requestJson<CmsStoreResponse>("/api/cms/pages", {
        cache: "no-store",
        headers: cmsHeaders()
      });

      setStore({ pages: data.pages });
      setStorage(data.storage || "");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Wrong password or CMS unavailable.");
    }
  };

  const savePage = async () => {
    setStatus("Saving...");

    try {
      await requestJson<{ page: CmsPage }>("/api/cms/pages", {
        method: "POST",
        headers: cmsHeaders(true),
        body: JSON.stringify({ action: "update", ...selectedPage })
      });

      setStatus("Saved.");
      await refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not save page.");
      return;
    }
  };

  const createPage = async () => {
    setStatus("Creating page...");
    const title = "New Page";

    try {
      const data = await requestJson<{ page: CmsPage }>("/api/cms/pages", {
        method: "POST",
        headers: cmsHeaders(true),
        body: JSON.stringify({ action: "create", title, slug: `new-page-${Date.now()}` })
      });

      await refresh();
      setSelectedId(data.page.id);
      setStatus("Page created.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not create page.");
      return;
    }
  };

  const deletePage = async () => {
    if (!confirm("Delete this page? Fixed pages will be disabled and hidden.")) {
      return;
    }

    setStatus("Deleting...");

    try {
      await requestJson<{ ok: true }>(`/api/cms/pages/${selectedPage.id}`, {
        method: "DELETE",
        headers: cmsHeaders()
      });

      await refresh();
      setSelectedId("home");
      setStatus("Deleted.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not delete page.");
      return;
    }
  };

  return (
    <main className="min-h-screen bg-warm pt-[96px] text-charcoal">
      <div className="site-container grid grid-cols-[280px_minmax(0,1fr)] gap-8 pb-16 max-md:grid-cols-1">
        {isProtected && store.pages.length === 0 ? (
          <section className="col-span-full mx-auto mt-16 w-full max-w-[520px] border border-teal/20 bg-white p-6">
            <h1 className="font-display text-[2rem] uppercase text-teal">CMS Login</h1>
            <label className="mt-6 grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                Password
              </span>
              <input
                className="border border-teal/20 bg-white px-3 py-3"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button className="btn mt-4 border-teal text-teal" type="button" onClick={refresh}>
              Unlock
            </button>
            {status && <p className="mt-4 text-sm font-bold text-teal">{status}</p>}
            {storage && (
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-teal/60">
                Storage: {storage}
              </p>
            )}
          </section>
        ) : (
          <>
        <aside className="border-r border-teal/20 pr-6 max-md:border-r-0 max-md:pr-0">
          <div className="flex items-center justify-between gap-4">
            <h1 className="font-display text-[1.35rem] uppercase text-teal">CMS</h1>
            <button className="btn border-teal text-teal" type="button" onClick={createPage}>
              Add
            </button>
          </div>
          <div className="mt-5 grid gap-2">
            {store.pages.map((page) => (
              <button
                className={`border px-3 py-3 text-left text-sm uppercase tracking-[0.08em] ${
                  selectedPage.id === page.id
                    ? "border-teal bg-teal text-warm"
                    : "border-teal/20 text-teal"
                }`}
                key={page.id}
                type="button"
                onClick={() => setSelectedId(page.id)}
              >
                <span className="block font-bold">{page.title}</span>
                <span className="mt-1 block text-xs opacity-70">
                  {page.path} {page.enabled && !page.deleted ? "" : "Disabled"}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {selectedPage && (
          <section className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-[0.18em] text-teal/70">
                  {selectedPage.type === "fixed" ? "Designed page" : "Custom page"}
                </p>
                <h2 className="display mt-2 text-[2.5rem] text-teal max-md:text-[2rem]">
                  {selectedPage.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="btn border-teal text-teal" type="button" onClick={savePage}>
                  Save
                </button>
                <button className="btn border-teal text-teal" type="button" onClick={deletePage}>
                  Delete
                </button>
              </div>
            </div>

            {status && <p className="mt-4 text-sm font-bold text-teal">{status}</p>}

            <div className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Title</span>
                <input
                  className="border border-teal/20 bg-white px-3 py-3"
                  value={selectedPage.title}
                  onChange={(event) => updatePage({ title: event.target.value })}
                />
              </label>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Slug</span>
                  <input
                    className="border border-teal/20 bg-white px-3 py-3 disabled:opacity-50"
                    disabled={selectedPage.type === "fixed"}
                    value={selectedPage.slug}
                    onChange={(event) => updatePage({ slug: event.target.value })}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Nav label</span>
                  <input
                    className="border border-teal/20 bg-white px-3 py-3"
                    value={selectedPage.navLabel}
                    onChange={(event) => updatePage({ navLabel: event.target.value })}
                  />
                </label>
              </div>

              <div className="flex flex-wrap gap-5">
                <label className="inline-flex items-center gap-2">
                  <input
                    checked={selectedPage.enabled}
                    type="checkbox"
                    onChange={(event) => updatePage({ enabled: event.target.checked })}
                  />
                  Enabled
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    checked={selectedPage.showInNav}
                    type="checkbox"
                    onChange={(event) => updatePage({ showInNav: event.target.checked })}
                  />
                  Show in navigation
                </label>
              </div>

              {selectedPage.type === "fixed" ? (
                <VisualContentEditor
                  value={selectedPage.contentOverride ?? fixedFallbacks[selectedPage.id] ?? {}}
                  onChange={(contentOverride) => updatePage({ contentOverride })}
                />
              ) : (
                <CustomPageEditor page={selectedPage} updatePage={updatePage} />
              )}
            </div>
          </section>
        )}
          </>
        )}
      </div>
    </main>
  );
}

function CustomPageEditor({
  page,
  updatePage
}: {
  page: CmsPage;
  updatePage: (patch: Partial<CmsPage>) => void;
}) {
  const updateSection = (id: string, patch: Partial<CmsSection>) => {
    updatePage({
      sections: page.sections.map((section) =>
        section.id === id ? { ...section, ...patch } : section
      )
    });
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-2">
        {(["hero", "text", "mediaText", "cards", "cta"] as const).map((type) => (
          <button
            className="btn border-teal text-teal"
            key={type}
            type="button"
            onClick={() => updatePage({ sections: [...page.sections, createSection(type)] })}
          >
            {type}
          </button>
        ))}
      </div>

      {page.sections.map((section, index) => (
        <article className="border border-teal/20 bg-white p-4" key={section.id}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-[1.2rem] uppercase text-teal">
              {index + 1}. {section.type}
            </h3>
            <button
              className="text-sm font-bold uppercase tracking-[0.12em] text-teal"
              type="button"
              onClick={() =>
                updatePage({ sections: page.sections.filter((item) => item.id !== section.id) })
              }
            >
              Remove
            </button>
          </div>
          <div className="mt-4 grid gap-4">
            {(["eyebrow", "title", "text", "image", "video", "alt"] as const).map((key) => (
              <label className="grid gap-2" key={key}>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  {key}
                </span>
                <textarea
                  className="min-h-[44px] border border-teal/20 p-3"
                  value={(section[key] as string) || ""}
                  onChange={(event) => updateSection(section.id, { [key]: event.target.value })}
                />
              </label>
            ))}
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                Items
              </span>
              <ObjectListEditor
                addLabel="Add item"
                fields={["title", "text", "image", "video", "alt", "href"]}
                value={section.items || []}
                onChange={(items) => updateSection(section.id, { items })}
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                Links
              </span>
              <ObjectListEditor
                addLabel="Add link"
                fields={["label", "href"]}
                value={section.links || []}
                onChange={(links) => updateSection(section.id, { links })}
              />
            </label>
          </div>
        </article>
      ))}
    </div>
  );
}

type EditableValue =
  | string
  | number
  | boolean
  | null
  | EditableValue[]
  | { [key: string]: EditableValue };

function labelFromKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function isPlainObject(value: EditableValue): value is { [key: string]: EditableValue } {
  return Boolean(value) && !Array.isArray(value) && typeof value === "object";
}

function createEmptyArrayItem(items: EditableValue[]) {
  const firstObject = items.find(isPlainObject);

  if (!firstObject) {
    return "";
  }

  return Object.fromEntries(Object.keys(firstObject).map((key) => [key, ""]));
}

function updateNestedValue(
  value: EditableValue,
  path: Array<string | number>,
  nextValue: EditableValue
): EditableValue {
  if (path.length === 0) {
    return nextValue;
  }

  const [key, ...rest] = path;

  if (Array.isArray(value)) {
    return value.map((item, index) =>
      index === key ? updateNestedValue(item, rest, nextValue) : item
    );
  }

  if (isPlainObject(value) && typeof key === "string") {
    return {
      ...value,
      [key]: updateNestedValue(value[key], rest, nextValue)
    };
  }

  return value;
}

function removeNestedArrayItem(
  value: EditableValue,
  path: Array<string | number>,
  removeIndex: number
): EditableValue {
  const arrayValue = getNestedValue(value, path);

  if (!Array.isArray(arrayValue)) {
    return value;
  }

  return updateNestedValue(
    value,
    path,
    arrayValue.filter((_, index) => index !== removeIndex)
  );
}

function getNestedValue(value: EditableValue, path: Array<string | number>): EditableValue {
  return path.reduce<EditableValue>((current, key) => {
    if (Array.isArray(current) && typeof key === "number") {
      return current[key];
    }

    if (isPlainObject(current) && typeof key === "string") {
      return current[key];
    }

    return "";
  }, value);
}

function inputTypeForKey(key: string) {
  const lowerKey = key.toLowerCase();

  if (
    lowerKey.includes("href") ||
    lowerKey.includes("url") ||
    lowerKey.includes("image") ||
    lowerKey.includes("video")
  ) {
    return "url";
  }

  if (lowerKey.includes("email")) {
    return "email";
  }

  if (lowerKey.includes("phone")) {
    return "tel";
  }

  return "text";
}

function prefersTextarea(key: string, value: string) {
  const lowerKey = key.toLowerCase();
  return (
    value.length > 72 ||
    lowerKey.includes("text") ||
    lowerKey.includes("description") ||
    lowerKey.includes("bio") ||
    lowerKey.includes("quote") ||
    lowerKey.includes("address")
  );
}

function VisualContentEditor({
  value,
  onChange
}: {
  value: unknown;
  onChange: (value: EditableValue) => void;
}) {
  const editableValue = value as EditableValue;

  return (
    <div className="grid gap-4">
      <div className="border border-teal/20 bg-white p-4">
        <h3 className="font-display text-[1.2rem] uppercase text-teal">Page content</h3>
        <p className="mt-2 max-w-[680px] text-sm text-charcoal/75">
          Edit text, images, videos, links, lists, and repeated content below. Use full URLs for
          images and videos.
        </p>
      </div>
      <EditableField
        name="content"
        path={[]}
        rootValue={editableValue}
        value={editableValue}
        onChange={onChange}
        root
      />
    </div>
  );
}

function EditableField({
  name,
  path,
  rootValue,
  value,
  onChange,
  root = false
}: {
  name: string;
  path: Array<string | number>;
  rootValue: EditableValue;
  value: EditableValue;
  onChange: (value: EditableValue) => void;
  root?: boolean;
}) {
  if (Array.isArray(value)) {
    return (
      <section className={root ? "grid gap-4" : "grid gap-3 border border-teal/10 bg-white p-4"}>
        {!root && (
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-display text-[1rem] uppercase text-teal">{labelFromKey(name)}</h4>
            <button
              className="text-sm font-bold uppercase tracking-[0.12em] text-teal"
              type="button"
              onClick={() => onChange(updateNestedValue(rootValue, path, [...value, createEmptyArrayItem(value)]))}
            >
              Add
            </button>
          </div>
        )}
        {value.map((item, index) => (
          <div className="grid gap-3 border border-teal/10 bg-warm/60 p-3" key={index}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal/70">
                {labelFromKey(name)} {index + 1}
              </span>
              <button
                className="text-xs font-bold uppercase tracking-[0.12em] text-teal"
                type="button"
                onClick={() => onChange(removeNestedArrayItem(rootValue, path, index))}
              >
                Remove
              </button>
            </div>
            <EditableField
              name={`${name} ${index + 1}`}
              path={[...path, index]}
              rootValue={rootValue}
              value={item}
              onChange={onChange}
            />
          </div>
        ))}
        {root && (
          <button
            className="btn border-teal text-teal"
            type="button"
            onClick={() => onChange([...value, createEmptyArrayItem(value)])}
          >
            Add
          </button>
        )}
      </section>
    );
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value);

    if (root) {
      return (
        <div className="grid gap-5">
          {entries.map(([key, childValue]) => (
            <EditableField
              key={key}
              name={key}
              path={[key]}
              rootValue={rootValue}
              value={childValue}
              onChange={onChange}
            />
          ))}
        </div>
      );
    }

    return (
      <details className="border border-teal/20 bg-white p-4" open>
        <summary className="cursor-pointer font-display text-[1.1rem] uppercase text-teal">
          {labelFromKey(name)}
        </summary>
        <div className="mt-4 grid gap-4">
          {entries.map(([key, childValue]) => (
            <EditableField
              key={key}
              name={key}
              path={[...path, key]}
              rootValue={rootValue}
              value={childValue}
              onChange={onChange}
            />
          ))}
        </div>
      </details>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="inline-flex items-center gap-2">
        <input
          checked={value}
          type="checkbox"
          onChange={(event) =>
            onChange(updateNestedValue(rootValue, path, event.target.checked))
          }
        />
        {labelFromKey(name)}
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <label className="grid gap-2">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
          {labelFromKey(name)}
        </span>
        <input
          className="border border-teal/20 bg-white px-3 py-3"
          type="number"
          value={value}
          onChange={(event) =>
            onChange(updateNestedValue(rootValue, path, Number(event.target.value)))
          }
        />
      </label>
    );
  }

  const stringValue = value === null ? "" : String(value);

  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
        {labelFromKey(name)}
      </span>
      {prefersTextarea(name, stringValue) ? (
        <textarea
          className="min-h-[92px] border border-teal/20 bg-white p-3"
          value={stringValue}
          onChange={(event) =>
            onChange(updateNestedValue(rootValue, path, event.target.value))
          }
        />
      ) : (
        <input
          className="border border-teal/20 bg-white px-3 py-3"
          type={inputTypeForKey(name)}
          value={stringValue}
          onChange={(event) =>
            onChange(updateNestedValue(rootValue, path, event.target.value))
          }
        />
      )}
    </label>
  );
}

function ObjectListEditor<T extends Record<string, string>>({
  value,
  fields,
  addLabel,
  onChange
}: {
  value: T[];
  fields: string[];
  addLabel: string;
  onChange: (value: T[]) => void;
}) {
  const createItem = () =>
    Object.fromEntries(fields.map((field) => [field, ""])) as T;

  return (
    <div className="grid gap-3">
      {value.map((item, index) => (
        <div className="grid gap-3 border border-teal/10 bg-warm/60 p-3" key={index}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal/70">
              {index + 1}
            </span>
            <button
              className="text-xs font-bold uppercase tracking-[0.12em] text-teal"
              type="button"
              onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}
            >
              Remove
            </button>
          </div>
          {fields.map((field) => (
            <label className="grid gap-2" key={field}>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                {labelFromKey(field)}
              </span>
              {prefersTextarea(field, item[field] || "") ? (
                <textarea
                  className="min-h-[80px] border border-teal/20 bg-white p-3"
                  value={item[field] || ""}
                  onChange={(event) =>
                    onChange(
                      value.map((row, itemIndex) =>
                        itemIndex === index ? { ...row, [field]: event.target.value } : row
                      )
                    )
                  }
                />
              ) : (
                <input
                  className="border border-teal/20 bg-white px-3 py-3"
                  type={inputTypeForKey(field)}
                  value={item[field] || ""}
                  onChange={(event) =>
                    onChange(
                      value.map((row, itemIndex) =>
                        itemIndex === index ? { ...row, [field]: event.target.value } : row
                      )
                    )
                  }
                />
              )}
            </label>
          ))}
        </div>
      ))}
      <button
        className="btn w-fit border-teal text-teal"
        type="button"
        onClick={() => onChange([...value, createItem()])}
      >
        {addLabel}
      </button>
    </div>
  );
}
