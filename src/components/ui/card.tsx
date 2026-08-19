import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

export function Card({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
}: CardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/80 shadow-xl backdrop-blur-sm">
      
      {/* Image */}
      <div className="p-3">
        <img
          src={image}
          alt={title}
          className="h-52 w-full rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        <h2 className="text-xl font-bold text-foreground">
          {title}
        </h2>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                View Demo
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline">
                <FaGithub className="mr-1 h-4 w-4" />
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}