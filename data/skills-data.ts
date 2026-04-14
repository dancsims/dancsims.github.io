import * as FaIcons from "react-icons/fa";
export type SkillIcon = keyof typeof FaIcons;
export interface Skill {
  title: string;
  tags: string[];
  icon: SkillIcon;
}

export const skills: Skill[] = [
  // ...existing code...
  {
    title: "Cloud & DevOps",
    tags: [
      "Azure",
      "Docker",
      "Kubernetes",
      "App Services",
      "Azure Functions",
      "Azure SQL Database",
      "KeyVault",
      "Azure Storage",
      "Application Insights",
      "Snowflake",
      "CI/CD",
      "Bicep",
      "Infrastructure as Code",
      "GitHub Actions",
    ],
    icon: "FaCloud",
  },
  {
    title: "Data Engineering & ETL",
    tags: [
      "ETL",
      "Data Migration",
      "SQL Server Integration Services (SSIS)",
      "Tivoli Workload Scheduler (TWS)",
    ],
    icon: "FaExchangeAlt",
  },
  {
    title: "Agile & Collaboration",
    tags: [
      "Agile",
      "Mentoring",
      "Code Review",
      "Client Collaboration",
      "Requirements Gathering",
      "Project Delivery",
    ],
    icon: "FaHandsHelping",
  },
  {
    title: "Support & Operations",
    tags: [
      "Technical Support",
      "Imaging",
      "Symantec Ghost",
      "Troubleshooting",
      "International Support",
      "Business Continuity",
    ],
    icon: "FaDesktop",
  },
  {
    title: "Education & Training",
    tags: [
      "Teaching",
      "Student Support",
      "Grading",
      "Office Hours",
      "Academic Assistance",
    ],
    icon: "FaGraduationCap",
  },
  {
    title: "Database Systems",
    tags: [
      "Microsoft SQL",
      "Netezza",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQLite",
      "Snowflake",
      "Azure SQL Database",
    ],
    icon: "FaDatabase",
  },
  {
    title: "Data Modeling & Access Control",
    tags: ["dbt", "Prisma", "TypeORM", "OpenFGA", "Prometheus"],
    icon: "FaProjectDiagram",
  },
  {
    title: "Languages",
    tags: [
      "T-SQL",
      "Python",
      "TypeScript",
      "JavaScript",
      "SAS",
      "R",
      "Ruby",
      "C++",
      "C#",
      "Swift",
      "Java",
    ],
    icon: "FaCode",
  },
  {
    title: "Data Visualization & BI",
    tags: [
      "Power BI",
      "Tableau",
      "Azure Data Studio",
      "Grafana",
      "SAS Visual Analytics",
      "SQL Server Reporting Services (SSRS)",
    ],
    icon: "FaChartBar",
  },
];
