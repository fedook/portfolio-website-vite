import { NavLink } from "react-router";
import { Section } from "@/components/common/Section";
import felix from "@/assets/images/felix.png";

export function Hero() {
  return (
    <Section className="grid min-h-[calc(100vh-4rem)] items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:px-16">
      <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Yo, I'm Felix M. Morales Jr.
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Aspiring web developer passionate about learning, building, and
            growing in the world of web development.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <NavLink
            to="/contact"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-80"
          >
            Contact Me
          </NavLink>

          <NavLink
            to="/about"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            About Me
          </NavLink>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={felix}
          alt="Felix M. Morales Jr."
          width={500}
          height={500}
          className="rounded-2xl shadow-2xl object-cover w-full max-w-[400px]"
        />
      </div>
    </Section>
  );
}
