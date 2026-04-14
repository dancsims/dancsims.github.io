import { Card } from "../../components/ui/card";
import { Tag } from "../../components/ui/tag";
import { skills } from "../../data/skills-data";
import * as FaIcons from "react-icons/fa";

export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-2">Skills</h1>
      <p className="mb-6">
        Here you can find a list of my professional skills and proficiencies.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => {
          const Icon = FaIcons[skill.icon];
          return (
            <Card
              key={skill.title}
              title={skill.title}
              icon={Icon ? <Icon className="text-xl" /> : null}
              className="h-full"
            >
              <div className="flex flex-wrap mt-2">
                {skill.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
