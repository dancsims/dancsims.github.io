// Project data structure and sample data
export interface Project {
  sortOrder: number;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    sortOrder: 1,
    title: "Weather-Angular",
    description:
      "A full-stack weather application built with Angular and Node.js that provides real-time weather conditions and forecasts. Users can search by city, zip code, or use their current location via geolocation to get current conditions and multi-day forecasts powered by the OpenWeatherMap API.",
    link: "https://weather-angular-phi.vercel.app/",
  },
  {
    sortOrder: 2,
    title: "Developer Card",
    description:
      "A simple web app that displays my developers profile card, built with React. It showcases basic information, profile image, and contact details in a clean, responsive layout.",
    link: "https://dancsims.github.io/developer-card/",
  },
  {
    sortOrder: 3,
    title: "Loot Tracker",
    description:
      "A web application built with React that allows users to track their in-game loot and rewards for Tabletop Role Playing Games (TTRPGs). Users can log each character in the game, monitor the ledger of party funds, and each item acquired and where it is stored. Users can export the entire dataset to a JSON file for backup or sharing with other players. The app is designed to enhance the gaming experience by providing an organized way to manage loot and rewards throughout the campaign.",
    link: "https://dancsims.github.io/loot-tracker/",
  },
  {
    sortOrder: 4,
    title: "Connect+",
    description:
      "Copeland's enterprise management software, Connect+ seamlessly connects and actively manages multi-site food retail operations for supermarkets, convenience stores, and restaurants. Backed by Copeland's deep domain expertise in refrigeration, IoT, and facility management, the platform provides near real-time access to critical information — helping retailers like Amazon, Walmart, and Target immediately track, triage, and respond to issues across hundreds or thousands of sites from a centralized location.",
  },
  {
    sortOrder: 5,
    title: "Kroger Rewards",
    description:
      "Kroger's customer loyalty program, Kroger Rewards, offers personalized discounts, fuel points, and exclusive promotions to millions of customers. By leveraging data-driven insights and a user-friendly interface, the program enhances the shopping experience and fosters customer loyalty across Kroger's extensive network of stores.",
  },
  {
    sortOrder: 6,
    title: "Speedy Rewards",
    description:
      "Maintained and improved on the database systems of Speedway's customer loyalty program, Speedy Rewards, ensuring efficient data management and seamless user experience for millions of customers. This involved optimizing database performance, implementing robust data security measures, and supporting the scalability needs of the loyalty program as it continues to grow.",
  },
  {
    sortOrder: 7,
    title: "Enterprise Data Database",
    description:
      "Maintained and improved on a robust database architecture for Speedway's enterprise data, ensuring efficient storage, retrieval, and management of critical information across multiple business units. This architecture supports the scalability and performance needs of the organization while maintaining data integrity and security.",
  },
];
