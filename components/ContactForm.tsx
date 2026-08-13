"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  FileText,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isDisabled = status === "loading" || status === "success";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function renderButtonContent() {
    switch (status) {
      case "loading":
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-4 h-4" aria-hidden="true" />
            <span>Message Sent!</span>
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            <span>Failed to Send</span>
          </>
        );
      default:
        return (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>Send Message</span>
          </>
        );
    }
  }

  function buttonClasses() {
    const base =
      "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";
    if (status === "loading" || status === "success") {
      return `${base} bg-blue-600/60 text-white cursor-not-allowed opacity-70`;
    }
    if (status === "error") {
      return `${base} bg-red-600 hover:bg-red-500 text-white focus:ring-red-500`;
    }
    return `${base} bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500`;
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
      <form
        onSubmit={handleSubmit}
        noValidate={false}
        aria-label="Contact form"
        className="space-y-4 bg-black/20 p-5 rounded-lg"
      >
        {/* Error banner */}
        {status === "error" && (
          <div
            id="form-error-message"
            role="alert"
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>
              Something went wrong. Please check your details and try again.
            </span>
          </div>
        )}

        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-widest"
          >
            Name
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User
                className="w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={isDisabled}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-describedby={status === "error" ? "form-error-message" : undefined}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            />
          </div>
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-widest"
          >
            Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail
                className="w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isDisabled}
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-describedby={status === "error" ? "form-error-message" : undefined}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            />
          </div>
        </div>

        {/* Subject field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-widest"
          >
            Subject
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FileText
                className="w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              disabled={isDisabled}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              aria-describedby={status === "error" ? "form-error-message" : undefined}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-widest"
          >
            Message
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-0 flex items-start pl-3">
              <MessageSquare
                className="w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
            </div>
            <textarea
              id="message"
              name="message"
              required
              disabled={isDisabled}
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your project..."
              aria-describedby={status === "error" ? "form-error-message" : undefined}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 resize-none"
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isDisabled}
          className={buttonClasses()}
          aria-live="polite"
        >
          {renderButtonContent()}
        </button>
      </form>
    </div>
  );
}
