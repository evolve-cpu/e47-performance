"use client";

import { useState, FormEvent } from "react";
import { contactContent } from "@/data/contact-content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-[2px] border border-teal/20 bg-teal/5 p-10 text-center">
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

      <button type="submit" className="btn bg-teal text-warm hover:opacity-80">
        {contactContent.form.submitLabel}
      </button>
    </form>
  );
}
