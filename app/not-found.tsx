import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-warm px-6 text-center text-teal">
      <p className="eyebrow text-teal">404</p>
      <h1 className="display text-[clamp(3rem,8vw,5rem)]">Page not found.</h1>
      <p className="max-w-[480px] text-[1.1rem] text-charcoal">
        The link may be outdated or the page may have moved.
      </p>
      <Link className="btn bg-teal text-warm" href="/">
        Back home
      </Link>
    </section>
  );
}
