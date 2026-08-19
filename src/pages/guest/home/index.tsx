import { Hero } from "@/components/features/home/Hero";
import { RecentProjects } from "@/components/features/home/RecentProjects";
import { GetInTouch } from "@/components/features/home/GetInTouch";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentProjects />
      <GetInTouch />
    </>
  );
}