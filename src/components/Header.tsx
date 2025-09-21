"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Zap } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#how", label: "How It Works" },
    { href: "#benefits", label: "Benefits" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2" aria-label="Spark Labs Home">
          <Zap className="h-6 w-6 text-[var(--primary)]" />
          <span className="font-semibold text-lg tracking-tight uppercase">
            <span className="text-neutral-900">Spark</span>{" "}
            <span className="text-[var(--primary)]">Labs</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-neutral-600 hover:text-black transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <a href="#cta">Book a Demo</a>
          </Button>
          <Button className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-95 rounded-full">
            Get Early Access
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-neutral-700 hover:text-black" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <Button variant="outline" asChild className="rounded-full">
                <a href="#cta">Book a Demo</a>
              </Button>
              <Button className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}