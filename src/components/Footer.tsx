"use client";
import Link from "next/link";
import { Linkedin, Twitter, Zap } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ];
  return (
    <footer className="bg-neutral-50 border-t" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[var(--primary)]" aria-hidden />
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-neutral-900">SPARK</span>{" "}
              <span className="text-[var(--primary)]">LABS</span>
            </span>
          </div>
          <p className="text-sm text-neutral-600 mt-3">Your AI workforce for SaaS growth.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-full border hover:bg-neutral-100">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter / X" className="p-2 rounded-full border hover:bg-neutral-100">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
        <nav className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-neutral-700 hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t text-center text-sm text-neutral-600 py-4">Spark Labs © 2025</div>
    </footer>
  );
}