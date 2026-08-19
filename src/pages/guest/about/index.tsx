import { NavLink } from "react-router";
import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  GraduationCap,
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiReact, SiTailwindcss } from "react-icons/si";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import felix from "@/assets/images/felix.png";

export default function AboutPage() {
  return (
    <div>
      {/* Hero / Introduction */}
      <Section className="px-4 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />

              <div className="relative p-2 rounded-3xl bg-background/80 border border-border/60 shadow-2xl backdrop-blur-sm">
                <img
                  src={felix}
                  alt="Felix M. Morales Jr."
                  className="rounded-2xl object-cover w-full max-w-90 sm:max-w-100"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-sm font-medium text-blue-600 mb-3">
              About Me
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hi, I'm Felix.
            </h1>

            <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              I'm an aspiring web developer and an IT student who enjoys
              learning about technology and building useful applications.
              I'm continuously improving my skills through personal projects,
              school projects, and hands-on experience.
            </p>

            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              I may still be learning, but every project gives me an
              opportunity to understand something new, solve problems, and
              become a better developer.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink to="/projects">
                <Button size="lg" className="group w-full sm:w-auto">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get in Touch
                </Button>
              </NavLink>
            </div>
          </div>

        </div>
      </Section>

      {/* What I Do */}
      <Section className="px-4 sm:px-8 lg:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I Do
          </h2>

          <p className="mt-3 text-muted-foreground">
            Areas I'm currently learning and developing my skills in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Web Development */}
          <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Globe className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Web Development
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I enjoy creating responsive and user-friendly websites while
              learning modern web development practices.
            </p>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Database className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Backend Development
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'm particularly interested in backend development, databases,
              APIs, authentication, and building reliable systems.
            </p>
          </div>

          {/* Learning */}
          <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Code2 className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Continuous Learning
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Technology is constantly changing, so I continue learning new
              tools, frameworks, and development techniques.
            </p>
          </div>

        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="px-4 sm:px-8 lg:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I Use
          </h2>

          <p className="mt-3 text-muted-foreground">
            Some of the technologies and tools I've worked with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

          <TechItem icon={<FaHtml5 />} name="HTML" />
          <TechItem icon={<FaCss3Alt />} name="CSS" />
          <TechItem icon={<FaJs />} name="JavaScript" />
          <TechItem icon={<SiReact />} name="React" />
          <TechItem icon={<FaPhp />} name="PHP" />
          <TechItem icon={<FaLaravel />} name="Laravel" />
          <TechItem icon={<SiMysql />} name="MySQL" />
          <TechItem icon={<SiTailwindcss />} name="Tailwind CSS" />
          <TechItem icon={<FaGitAlt />} name="Git" />
          <TechItem icon={<GraduationCap />} name="IT" />

        </div>
      </Section>

      {/* Goal */}
      <Section className="px-4 sm:px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto rounded-3xl border border-border/60 bg-background/80 px-6 py-14 sm:px-12 text-center shadow-xl">

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My Goal
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            My goal is to become a skilled and reliable developer who can
            build useful applications and solve real-world problems through
            technology. I'm especially interested in growing as a backend
            developer while continuing to improve my frontend skills.
          </p>

          <div className="mt-8">
            <NavLink to="/contact">
              <Button size="lg" className="group">
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </NavLink>
          </div>

        </div>
      </Section>
    </div>
  );
}

/* Technology Item */
function TechItem({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-2xl">
        {icon}
      </div>

      <span className="text-sm font-medium">
        {name}
      </span>
    </div>
  );
}