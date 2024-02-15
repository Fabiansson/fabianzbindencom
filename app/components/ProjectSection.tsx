import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="font-bold text-3xl text-center">💻 Projects</h1>
      {projects.reverse().map((project, index) => (
        <div key={index}>
          <ProjectCard
            image={project.image}
            title={project.title}
            text={project.text}
            technologies={project.technologies}
            githubLink={project.githubLink}
          ></ProjectCard>
        </div>
      ))}
    </div>
  );
}
