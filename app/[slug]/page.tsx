import { notFound } from "next/navigation";
import { CmsPageRenderer } from "@/components/cms-page-renderer";
import { getCmsPageBySlug } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getCmsPageBySlug(slug);

  if (!page || page.type !== "custom") {
    return {};
  }

  return createMetadata({
    rawTitle: page.seo?.rawTitle || page.title,
    path: page.path,
    description: page.seo?.description || page.sections[0]?.text || "",
    keywords: page.seo?.keywords || []
  });
}

export default async function CmsDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getCmsPageBySlug(slug);

  if (!page || page.type !== "custom") {
    notFound();
  }

  return <CmsPageRenderer page={page} />;
}
