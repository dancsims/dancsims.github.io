import { Card } from "../components/ui/card";
import { Tag } from "../components/ui/tag";
import { FaUser } from "react-icons/fa";

import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Home() {
  return (
    <div id="summary" className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-2">Daniel Sims</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300">
        Software Engineer
      </h2>
      <Tag label="15+ years" />
      <Tag label="Database Administrator" />
      <Tag label="Data Engineer" />
      <Tag label="Full Stack Engineer" />
      <Tag label="IoT & Enterprise" />
      <Card title="Background" icon={<FaUser />} className="mb-8 mt-4">
        With over 15 years of experience in IT, I have a strong background in
        database development, architecture, and administration. I have worked
        extensively with Microsoft SQL Server, Oracle, and PostgreSQL, designing
        and optimizing databases for performance and scalability. In recent
        years, I have transitioned into full stack development, leveraging my
        database expertise to build robust applications. I am passionate about
        learning new technologies and applying them to solve complex problems.
      </Card>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Master of Science, Data Analytics"
            // icon={<FaGraduationCap />}
          >
            <div className="font-semibold">Western Governors University</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Tag label="2020 – 2021" />
            </div>
          </Card>
          <Card
            title="Bachelor of Science, Computer Science"
            // icon={<FaGraduationCap />}
          >
            <div className="font-semibold">Wright State University</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Tag label="2009 – 2013" />
            </div>
          </Card>
        </div>
      </div>

      {/* Certifications Section */}
      <Card title="Certifications" icon={<FaCertificate />} className="mb-8">
        <Tag label="SAS Base Programming 9.4" />
        <Tag label="SAS Statistical Business Analyst 9" />
        <Tag label="CompTIA Security+ (Expired)" backgroundColor="#850707" />
      </Card>
    </div>
  );
}
// ...existing code...
