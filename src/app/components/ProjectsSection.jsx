import projectData from "@/data/projectData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-14 mb-10">
          My Projects
        </h2>

        <div className="space-y-16">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
