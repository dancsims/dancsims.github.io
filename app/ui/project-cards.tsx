import { link } from "fs";

const projects = [
  {
    title: "Weather-Angular",
    description: "Project 1 description",
    link: "https://weather-angular-gamma.vercel.app/",
  },
  {
    title: "Next.JS Dashboard",
    description: "Project 2 description",
    link: "https://nextjs-dashboard-black-theta-44.vercel.app/",
  },
  {
    title: "Pizza Menu",
    description: "Project 3 description",
    link: "https://dancsims.github.io/03-pizza-menu/",
  },
  {
    title: "Developer Card",
    description: "Project 4 description",
    link: "https://dancsims.github.io/developer-card/",
  },
];

export function ProjectCards() {
  return (
    <div>
      {projects.map((project) => (
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a
            href={project.link}
            className="ml-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {project.title}{" "}
          </a>
          <span className="opacity-50 text-xs">- {project.description}</span>
        </p>
      ))}
    </div>
  );
}
