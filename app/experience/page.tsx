import { Card } from "../../components/ui/card";
import { Tag } from "../../components/ui/tag";
import { workExperience } from "../../data/experience-data";
import { FaBriefcase } from "react-icons/fa";

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-2">Experience</h1>
      <p className="mb-6">
        Here you can find my work experience and projects I've been involved in.
      </p>
      <div className="grid gap-6 md:grid-cols-1">
        {workExperience.map((exp) => (
          <Card
            key={exp.companyName + exp.title}
            title={exp.companyName}
            icon={<FaBriefcase />}
            className="h-full relative"
          >
            <div className="absolute top-6 right-6">
              <Tag
                label={(() => {
                  const fromYear = exp.employedFrom.slice(0, 4);
                  const toYear =
                    exp.employedTo === "current"
                      ? "Present"
                      : exp.employedTo.slice(0, 4);
                  if (exp.employedTo === "current") {
                    return `${fromYear} – Present`;
                  } else if (fromYear === toYear) {
                    return fromYear;
                  } else {
                    return `${fromYear} – ${toYear}`;
                  }
                })()}
                className={
                  exp.employedTo === "current"
                    ? "text-white font-bold border border-green-700"
                    : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100"
                }
                backgroundColor={
                  exp.employedTo === "current" ? "#0b8036" : "#010c05"
                }
              />
            </div>
            <div className="mb-1 text-sm font-semibold">{exp.title}</div>
            <div className="mb-2 flex flex-wrap mt-2">
              {exp.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <ul className="list-disc pl-5 text-sm">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
