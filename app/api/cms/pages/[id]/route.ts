import { NextResponse } from "next/server";
import { readCmsStore, writeCmsStore } from "@/lib/cms";

function unauthorized(request: Request) {
  const password = process.env.CMS_ADMIN_PASSWORD;

  if (!password) {
    return false;
  }

  return request.headers.get("x-cms-password") !== password;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (unauthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { id } = await params;
    const store = await readCmsStore();
    const page = store.pages.find((item) => item.id === id);

    if (!page) {
      return NextResponse.json({ error: "Page not found." }, { status: 404 });
    }

    const nextPages =
      page.type === "fixed"
        ? store.pages.map((item) =>
            item.id === id
              ? { ...item, deleted: true, enabled: false, showInNav: false, updatedAt: new Date().toISOString() }
              : item
          )
        : store.pages.filter((item) => item.id !== id);

    await writeCmsStore({ pages: nextPages });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not delete CMS page." },
      { status: 500 }
    );
  }
}
