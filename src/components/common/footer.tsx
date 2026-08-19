import { NavLink } from "react-router";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export function Footer() {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      href: "https://github.com/fedook",
      label: "GitHub",
      icon: <FaGithub className="h-4 w-4" />,
    },
    {
      href: "https://www.facebook.com/felixmmoralesjr",
      label: "Facebook",
      icon: <FaFacebook className="h-4 w-4" />,
    },
    {
      href: "mailto:felixmorales@gmail.com",
      label: "Email",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="container relative mx-auto px-6 py-8 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <NavLink
              to="/"
              className="inline-block text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
            >
              Felix M. Morales Jr.
            </NavLink>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Aspiring web developer passionate about learning, building,
              and growing through modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h3>

            <nav className="mt-3">
              <ul className="space-y-2">
                {navigation.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}

                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Let's Connect
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Have a project idea, question, or opportunity? Feel free to
              reach out and let's connect.
            </p>

            {/* Contact CTA */}
            <NavLink
              to="/contact"
              className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600"
            >
              Get in touch

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </NavLink>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-border hover:bg-muted hover:text-foreground hover:shadow-sm"
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 border-t border-border/30 pt-5 flex flex-col items-center justify-center gap-1.5 text-center sm:flex-row sm:gap-4">

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Felix M. Morales Jr. All rights reserved.
          </p>

          {/* Built With */}
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
            <Sparkles className="h-3 w-3" />
            Built with React & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}