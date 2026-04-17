import { Card } from "../../components/ui/card";
import { FaFolderOpen } from "react-icons/fa";
import { projects } from "../../data/project-data";

const sortedProjects = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);

export default function PortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <p className="mb-6">
        Here you can find a showcase of my projects and work experience.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            icon={<FaFolderOpen />}
            className="h-full"
          >
            <div className="mb-2 text-sm">{project.description}</div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Project
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
