import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function ContactPage() {
  return (
    <Section className="px-4 sm:px-8 lg:px-16 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Contact Me
        </h1>

        <p className="mt-3 text-muted-foreground">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-xl">
          <h2 className="text-2xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, ideas, or
            opportunities. You can reach me through the information below.
          </p>

          <div className="mt-8 space-y-6">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>
                <p className="font-medium">
                  felixmoralesjr0@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Lapu-Lapu City, Cebu
                </p>
                <p className="font-medium">
                  Philippines
                </p>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="mt-10">
            <p className="text-sm font-medium mb-4">
              Connect with me
            </p>

            <div className="flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <FaFacebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </a>

            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-xl">
          <h2 className="text-2xl font-bold">
            Send Me a Message
          </h2>

          <form className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>

          </form>
        </div>

      </div>
    </Section>
  );
}