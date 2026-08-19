import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "./project-data";


export function RecentProjects() {
  const recentProjects = projects.slice(0, 3);

  return (
    <Section className="px-4 sm:px-8 lg:px-16 py-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Recent Projects
        </h2>

        <p className="mt-3 text-muted-foreground">
          Here are some of the projects I've worked on recently.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProjects.map((project) => (
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

      {/* View All Projects */}
      <div className="flex justify-center mt-10">
        <NavLink to="/projects">
          <Button variant="outline" className="group">
            Check out all projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </NavLink>
      </div>
    </Section>
  );
}