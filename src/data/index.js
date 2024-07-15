import { algorithms, devnotes, oscs } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Self Employed",
    date: "2024 - Present",
    details: [
      "Built an <span style='color: white;'>Automated Trading Journal</span> for keeping a track of all the candidates, and generated a report showing their emotional side while talking a trade.",
      "Crafted a trading strategy for the Researcher team that generated over <span style='color: white;'>400,000 $</span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Adani",
    date: "2023 - 2024",
    details: [
      "Developed and delivered BBPS for one of the biggest conglomerates for easy bill payments, using <span style='color: white;'>Node.js Typescript and React Redux</span>.",
      "Successfully launched the app for <span style='color: white;'>16M</span> users across India, with <span style='color: white;'>5 out of 26</span> major categories",
      "Integrated Loyalty systems for customer retention",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nova Benefits",
    date: "2022 - 2023",
    details: [
      "Built a custom e-card generator for one of the <span style='color: white;'>Unicorns company</span> as a full-stack software engineer.",
      "Helped in the biggest migration from CRM to internal systems <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tech Ferry",
    date: "2021 - 2022",
    details: [
      "Built a custom e-card generator for one of the top<span style='color: white;'>Unicorns</span> as a full-stack software engineer.",
      "Helped in the biggest <span style='color: white;'>migration</span> from CRM to internal systems for <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Computer Science",
    college: "DIT University",
    date: "2016 - 2020",
    details: [
      "Built a <span style='color: white;'>chat application for mute people<span style='color: white;'>, where the text gets translated from hand signs to textual data",
      "Worked and interned at <span style='color: white;'>THDC</span> a goverment body that looks after hydel power generation to gain practical experience in the field of data analysis.",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };
