import { promises as fs } from "fs";
import path from "path";

export type CmsPageType = "fixed" | "custom";

export type CmsActionLink = {
  label: string;
  href: string;
};

export type CmsSectionItem = {
  title?: string;
  text?: string;
  image?: string;
  video?: string;
  alt?: string;
  href?: string;
};

export type CmsSection = {
  id: string;
  type: "hero" | "text" | "mediaText" | "cards" | "cta";
  eyebrow?: string;
  title?: string;
  text?: string;
  image?: string;
  video?: string;
  alt?: string;
  links?: CmsActionLink[];
  items?: CmsSectionItem[];
};

export type CmsSeo = {
  rawTitle?: string;
  description?: string;
  keywords?: string[];
};

export type CmsPage = {
  id: string;
  type: CmsPageType;
  title: string;
  slug: string;
  path: string;
  navLabel: string;
  showInNav: boolean;
  enabled: boolean;
  deleted: boolean;
  seo?: CmsSeo;
  contentOverride?: unknown | null;
  sections: CmsSection[];
  updatedAt: string;
};

export type CmsStore = {
  pages: CmsPage[];
};

const cmsStorePath = path.join(process.cwd(), "data", "cms-store.json");
const fixedPages: Array<Pick<CmsPage, "id" | "type" | "title" | "slug" | "path" | "navLabel" | "showInNav">> = [
  { id: "home", type: "fixed", title: "Home", slug: "", path: "/", navLabel: "Home", showInNav: false },
  { id: "expertise", type: "fixed", title: "Expertise", slug: "expertise", path: "/expertise", navLabel: "Expertise", showInNav: true },
  { id: "blog", type: "fixed", title: "Blog", slug: "blog", path: "/blog", navLabel: "Blogs", showInNav: true },
  { id: "about", type: "fixed", title: "About", slug: "about", path: "/about", navLabel: "About", showInNav: true },
  { id: "contact", type: "fixed", title: "Contact", slug: "contact", path: "/contact", navLabel: "Contact Us", showInNav: true }
];

function createFixedPage(page: (typeof fixedPages)[number]): CmsPage {
  return {
    ...page,
    enabled: true,
    deleted: false,
    contentOverride: null,
    sections: [],
    updatedAt: new Date().toISOString()
  };
}

export function normalizeSlug(slug: string) {
  return slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeCmsPage(page: CmsPage): CmsPage {
  return normalizePage(page);
}

function normalizePage(page: CmsPage): CmsPage {
  const slug = page.type === "fixed" && page.id === "home" ? "" : normalizeSlug(page.slug || page.title);
  return {
    ...page,
    slug,
    path: slug ? `/${slug}` : "/",
    navLabel: page.navLabel || page.title,
    enabled: page.enabled !== false,
    deleted: page.deleted === true,
    sections: Array.isArray(page.sections) ? page.sections : [],
    updatedAt: page.updatedAt || new Date().toISOString()
  };
}

export async function readCmsStore(): Promise<CmsStore> {
  let store: CmsStore = { pages: fixedPages.map(createFixedPage) };

  try {
    const raw = await fs.readFile(cmsStorePath, "utf8");
    store = JSON.parse(raw) as CmsStore;
  } catch {
    await writeCmsStore(store);
  }

  const existing = new Map(store.pages.map((page) => [page.id, normalizePage(page)]));
  for (const fixedPage of fixedPages) {
    if (!existing.has(fixedPage.id)) {
      existing.set(fixedPage.id, createFixedPage(fixedPage));
    }
  }

  return { pages: Array.from(existing.values()) };
}

export async function writeCmsStore(store: CmsStore) {
  await fs.mkdir(path.dirname(cmsStorePath), { recursive: true });
  await fs.writeFile(cmsStorePath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
}

export async function getCmsPage(id: string) {
  const store = await readCmsStore();
  return store.pages.find((page) => page.id === id);
}

export async function getCmsPageBySlug(slug: string) {
  const normalizedSlug = normalizeSlug(slug);
  const store = await readCmsStore();
  return store.pages.find((page) => page.slug === normalizedSlug && !page.deleted && page.enabled);
}

export async function getCmsContent<T>(id: string, fallback: T): Promise<T> {
  const page = await getCmsPage(id);

  if (!page || page.deleted || !page.enabled) {
    return fallback;
  }

  return page.contentOverride ? (page.contentOverride as T) : fallback;
}

export async function isCmsPageVisible(id: string) {
  const page = await getCmsPage(id);
  return Boolean(page && page.enabled && !page.deleted);
}

export async function getCmsNavigation() {
  const store = await readCmsStore();
  return store.pages
    .filter((page) => page.enabled && !page.deleted && page.showInNav)
    .map((page) => ({ label: page.navLabel || page.title, href: page.path }));
}

export function createCustomPage(input: Partial<CmsPage>): CmsPage {
  const slug = normalizeSlug(input.slug || input.title || "new-page");

  return {
    id: input.id || `page-${Date.now()}`,
    type: "custom",
    title: input.title || "New Page",
    slug,
    path: `/${slug}`,
    navLabel: input.navLabel || input.title || "New Page",
    showInNav: input.showInNav ?? true,
    enabled: input.enabled ?? true,
    deleted: input.deleted ?? false,
    seo: input.seo || {},
    contentOverride: null,
    sections: input.sections || [
      {
        id: `section-${Date.now()}`,
        type: "hero",
        title: input.title || "New Page",
        text: "Add your page intro here.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=85",
        alt: ""
      }
    ],
    updatedAt: new Date().toISOString()
  };
}
