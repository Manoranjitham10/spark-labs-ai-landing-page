"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentCard from "@/components/cards/AgentCard";
import ProjectCard from "@/components/cards/ProjectCard";
import BenefitCard from "@/components/cards/BenefitCard";
import { Button } from "@/components/ui/button";
import { PhoneCall, Linkedin, Mail, FileText, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div id="home">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--primary)]/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-neutral-700 bg-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-yellow-600" />
              AI Agents for SaaS Teams
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Your AI Workforce for SaaS Growth
            </h1>
            <p className="mt-4 text-neutral-700 max-w-xl">
              Automate customer care, content creation, outreach, and productivity tasks—so your team can focus on strategy and scaling.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-600 max-w-md">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" /> Fast setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" /> Human-like conversations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" /> Brand-matched tone</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" /> Works with your stack</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl border bg-white shadow-sm overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/69e78180-e3ff-410e-b21c-10b1d751014b/generated_images/flat-minimal-illustration%3a-a-team-of-a-477cf9a7-20250921094959.jpg?"
                alt="Illustration of AI agents collaborating"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">Our AI Agents</h2>
            <p className="text-neutral-700 mt-2">Specialized AI agents to handle critical SaaS workflows.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AgentCard
              icon={<PhoneCall className="h-5 w-5" />}
              title="Voice Customer Care Agent"
              bullets="24/7 support, human-like responses, CRM integration"
            />
            <AgentCard
              icon={<Linkedin className="h-5 w-5" />}
              title="LinkedIn Post Agent"
              bullets="Learns tone, drafts posts, requests approval, auto-publishes"
            />
            <AgentCard
              icon={<Mail className="h-5 w-5" />}
              title="Email Outreach Agent"
              bullets="Personalized emails for prospects, scalable outreach"
            />
            <AgentCard
              icon={<FileText className="h-5 w-5" />}
              title="Meeting Notes Agent"
              bullets="Summarizes calls, captures action items, updates workflow tools"
            />
          </div>
        </div>
      </section>

      {/* Projects / Use Cases */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">How Spark Labs Helps SaaS Teams</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProjectCard title="Customer Support Automation" description="Reduced response time by 60%" />
            <ProjectCard title="LinkedIn Content Automation" description="Daily posts in brand's voice without manual effort" />
            <ProjectCard title="Sales Outreach Scaling" description="Personalized email campaigns increasing leads" />
            <ProjectCard title="Meeting Efficiency" description="Action items auto-captured and synced to workflow tools" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 md:py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">How It Works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold">Connect</div>
              <p className="text-sm text-neutral-600 mt-2">Integrate CRM, Slack, LinkedIn</p>
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold">Deploy</div>
              <p className="text-sm text-neutral-600 mt-2">Choose AI agents for workflows</p>
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold">Monitor & Approve</div>
              <p className="text-sm text-neutral-600 mt-2">Track, review, optimize outputs</p>
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Benefits</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BenefitCard title="Save Time" text="Cut 60% of repetitive workflows" />
            <BenefitCard title="Always-On" text="Agents never sleep, never forget" />
            <BenefitCard title="Personalized" text="Posts, emails, and responses match your brand tone" />
            <BenefitCard title="Drive Growth" text="Faster response = happier customers = higher retention" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 md:py-24 bg-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Ready to scale with AI?</h3>
          <p className="text-neutral-700 mt-2">Get your AI workforce in just 2 clicks.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-sm text-neutral-700 mt-6 hover:text-black">
            Back to top <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}