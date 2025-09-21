"use client";
import { Card } from "@/components/ui/card";

export default function BenefitCard({ title, text }: { title: string; text: string; }) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl p-5 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-neutral-600 mt-2">{text}</p>
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
    </Card>
  );
}