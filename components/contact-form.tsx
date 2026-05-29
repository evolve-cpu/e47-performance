"use client";

import { useState, FormEvent } from "react";
import { contactContent } from "@/data/contact-content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: "E47 Performance Website",
          subject: `New contact from ${data.name}`,
          ...data
        })
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 border border-teal/20 bg-teal/5 p-10 text-center rounded-xs">
        <p className="m-0 text-[1.18rem] font-bold text-teal">
          Message received. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      {[
        { id: "name", label: contactContent.form.fields.name, type: "text", required: true },
        { id: "email", label: contactContent.form.fields.email, type: "email", required: true },
        { id: "phone", label: contactContent.form.fields.phone, type: "tel", required: false },
      ].map(({ id, label, type, required }) => (
        <div key={id}>
          <label htmlFor={id} className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-teal">
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            className="w-full border border-teal/25 bg-transparent px-4 py-3 text-[0.98rem] text-charcoal outline-none transition-colors focus:border-teal"
          />
        </div>
      ))}

      <div>
        <label htmlFor="service" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-teal">
          {contactContent.form.fields.service}
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-teal/25 bg-warm px-4 py-3 text-[0.98rem] text-charcoal outline-none transition-colors focus:border-teal"
        >
          <option value="">Select a service…</option>
          {contactContent.form.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-teal">
          {contactContent.form.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none border border-teal/25 bg-transparent px-4 py-3 text-[0.98rem] text-charcoal outline-none transition-colors focus:border-teal"
        />
      </div>

      {status === "error" && (
        <p className="text-[0.88rem] text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn bg-teal text-warm hover:opacity-80 disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : contactContent.form.submitLabel}
      </button>
    </form>
  );
}
