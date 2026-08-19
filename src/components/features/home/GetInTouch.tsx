import { NavLink } from "react-router";
import { Mail, ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function GetInTouch() {
  return (
    <Section className="px-4 sm:px-8 lg:px-16 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 px-6 py-16 text-center shadow-xl backdrop-blur-sm sm:px-12">

        {/* Background Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-2xl">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-background shadow-sm">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a project idea, question, or opportunity? I'd love to hear
            from you. Feel free to reach out and let's connect.
          </p>

          {/* Button */}
          <div className="mt-8">
            <NavLink to="/contact">
              <Button size="lg" className="group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Section>
  );
}