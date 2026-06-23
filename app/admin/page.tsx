import { readCmsStore } from "@/lib/cms";
import { CmsAdmin } from "./ui";

export const dynamic = "force-dynamic";
export const metadata = {
  robots: {
    index: false,
    follow: false
  }
};

export default async function AdminPage() {
  const isProtected = Boolean(process.env.CMS_ADMIN_PASSWORD);
  const store = isProtected ? { pages: [] } : await readCmsStore();

  return <CmsAdmin initialStore={store} isProtected={isProtected} />;
}
