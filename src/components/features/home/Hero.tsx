import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/common/Section";
import { FaFacebook, FaGithub } from "react-icons/fa";
import felix from "@/assets/images/felix.png";

export function Hero() {
  return (
    <Section className="relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] px-4 sm:px-8 lg:px-16 py-12">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start justify-center space-y-8 text-center lg:text-left z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs font-medium text-muted-foreground shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Heading & Intro */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Felix M. Morales Jr.
            </span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg leading-relaxed">
            Aspiring web developer passionate about learning, building, and
            growing in the world of web development.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NavLink to="/projects" className="w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto shadow-md shadow-blue-500/20">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </NavLink>
          <NavLink to="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-accent/50">
              Contact Me
            </Button>
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-muted-foreground justify-center lg:justify-start pt-2">
          <NavLink
            to="https://github.com/fedook"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border/50 bg-background/50 hover:bg-accent hover:text-foreground hover:scale-105 transition-all shadow-sm"
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </NavLink>

          <NavLink
            to="mailto:felixmorales@gmail.com"
            className="p-2.5 rounded-xl border border-border/50 bg-background/50 hover:bg-accent hover:text-foreground hover:scale-105 transition-all shadow-sm"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </NavLink>

          <NavLink
            to="https://www.facebook.com/felixmmoralesjr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border/50 bg-background/50 hover:bg-accent hover:text-foreground hover:scale-105 transition-all shadow-sm"
          >
            <FaFacebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </NavLink>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center mt-6 lg:mt-0 z-10">
        <div className="relative group">
          {/* Subtle image glow behind frame */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
          
          <div className="relative p-2 rounded-3xl bg-background/80 border border-border/60 shadow-2xl backdrop-blur-sm">
            <img
              src={felix}
              alt="Felix M. Morales Jr."
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full max-w-[360px] sm:max-w-[400px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}