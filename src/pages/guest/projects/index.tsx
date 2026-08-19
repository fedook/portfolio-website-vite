import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/card";
import { projects } from "@/components/features/home/project-data";

export function Projects() {
  return (
    <Section className="px-4 sm:px-8 lg:px-16 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          My Projects
        </h1>

        <p className="mt-3 text-muted-foreground">
          Here are the projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </Section>
  );
}