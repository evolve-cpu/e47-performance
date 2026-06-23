import { NextResponse } from "next/server";
import { createCustomPage, normalizeCmsPage, readCmsStore, writeCmsStore, type CmsPage } from "@/lib/cms";

function unauthorized(request: Request) {
  const password = process.env.CMS_ADMIN_PASSWORD;

  if (!password) {
    return false;
  }

  return request.headers.get("x-cms-password") !== password;
}

function pageConflict(pages: CmsPage[], page: CmsPage) {
  return pages.some(
    (item) => item.id !== page.id && !item.deleted && item.path === page.path
  );
}

export async function GET(request: Request) {
  if (unauthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const store = await readCmsStore();
  return NextResponse.json(store);
}

export async function POST(request: Request) {
  if (unauthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const payload = (await request.json()) as Partial<CmsPage> & { action?: "create" | "update" };
  const store = await readCmsStore();

  if (payload.action === "create") {
    const page = createCustomPage(payload);

    if (pageConflict(store.pages, page)) {
      return NextResponse.json({ error: "A page already uses this URL." }, { status: 409 });
    }

    const nextStore = { pages: [...store.pages, page] };
    await writeCmsStore(nextStore);
    return NextResponse.json({ page });
  }

  if (!payload.id) {
    return NextResponse.json({ error: "Missing page id." }, { status: 400 });
  }

  const currentPage = store.pages.find((page) => page.id === payload.id);

  if (!currentPage) {
    return NextResponse.json({ error: "Page not found." }, { status: 404 });
  }

  let nextPage: CmsPage = {
    ...currentPage,
    ...payload,
    type: currentPage.type,
    id: currentPage.id,
    updatedAt: new Date().toISOString()
  };

  if (currentPage.type === "fixed") {
    nextPage.slug = currentPage.slug;
    nextPage.path = currentPage.path;
  } else {
    nextPage = normalizeCmsPage(nextPage);
  }

  if (pageConflict(store.pages, nextPage)) {
    return NextResponse.json({ error: "A page already uses this URL." }, { status: 409 });
  }

  const nextStore = {
    pages: store.pages.map((page) => (page.id === nextPage.id ? nextPage : page))
  };

  await writeCmsStore(nextStore);
  return NextResponse.json({ page: nextPage });
}
