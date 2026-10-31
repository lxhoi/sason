"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/logo";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-forest/10 bg-sage/20 px-8 py-16 text-center">
        <BrandMark className="mx-auto h-14 w-14" />
        <h2 className="mt-6 font-serif text-3xl italic">Message received</h2>
        <p className="mt-4 leading-8 text-forest/75">
          Thank you, {name.split(" ")[0] || "guest"}. We will write to {email}{" "}
          within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 border-b border-forest/20 bg-transparent outline-none"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 border-b border-forest/20 bg-transparent outline-none"
      />
      <textarea
        required
        rows={5}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-b border-forest/20 bg-transparent py-3 outline-none"
      />
      <Button type="submit" variant="forest" className="w-fit">
        Send
      </Button>
    </form>
  );
}
