"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { SOCIAL_LINKS } from "./data";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_CONFIG } from "@/lib/contact-config";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch(CONTACT_CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_CONFIG.accessKey,
          name,
          email,
          message,
          from_name: "Portfolio Contact",
          subject: `New message from ${name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: `Thanks ${name}, I'll get back to you soon.`,
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast({
          title: "Sending failed",
          description: data.message || "Something went wrong. Try emailing directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Could not reach the server. Try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> cat contact.md
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            Get in touch
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Form */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="pixel-card p-5 sm:p-6">
              <div className="space-y-4">
                <div>
                  <label className="font-pixel text-px text-px-dim block mb-2">
                    name:
                  </label>
                  <input
                    type="text"
                    className="pixel-input"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="font-pixel text-px text-px-dim block mb-2">
                    email:
                  </label>
                  <input
                    type="email"
                    className="pixel-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="font-pixel text-px text-px-dim block mb-2">
                    message:
                  </label>
                  <textarea
                    className="pixel-input"
                    placeholder="What's on your mind?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="pixel-btn w-full justify-center"
                  disabled={sending}
                >
                  {sending ? "█ sending..." : "> Send Message"}
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="pixel-card p-5 sm:p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <p className="font-terminal text-lg text-px-white">
                  Feel free to reach out for collaborations, research discussions,
                  or just to say hello.
                </p>
                <p className="font-terminal text-base text-px-gray">
                  I&apos;m always interested in connecting with fellow researchers,
                  developers, and anyone passionate about AI safety.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="font-terminal text-lg text-px-green flex items-center gap-2 hover:underline"
                >
                  <span>📧</span> {SOCIAL_LINKS.email}
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-terminal text-lg text-px-white flex items-center gap-2 hover:underline"
                >
                  <span>🔗</span> GitHub
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-terminal text-lg text-px-white flex items-center gap-2 hover:underline"
                >
                  <span>🐦</span> @ashioyajotham_
                </a>
                <a
                  href={SOCIAL_LINKS.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-terminal text-lg text-px-white flex items-center gap-2 hover:underline"
                >
                  <span>🎓</span> Google Scholar
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-terminal text-lg text-px-white flex items-center gap-2 hover:underline"
                >
                  <span>💼</span> LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}