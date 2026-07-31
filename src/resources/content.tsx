import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sanu",
  lastName: "Shifan",
  name: `Sanu Shifan kc`,
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "sanushifankc@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's build something amazing together </>,
  description: <>Have a project idea or collaboration in mind? Let's connect!</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sanushifan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sanushifan",
  },
  // {
  //   name: "instagram",
  //   icon: "instagram",
  //   link: " ",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable full-stack web applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sanu's</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/Gadgetory_E-commerce_platform",
  },
  subline: (
    <>
      I'm Sanu Shifan, a Full-Stack SaaS Developer building scalable
      multi-tenant platforms
      <br /> with the MERN Stack, NestJS, Redis, Docker, and AWS.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  resume: {
    display: true,
    link: "/documents/Sanushifan_resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sanu Shifan is a self-taught Full-Stack SaaS Developer with experience building scalable
        multi-tenant SaaS applications using the MERN Stack, NestJS, Redis, Docker, and modern
        backend architectures. Currently working at NIFAMA Technologies developing production-ready
        SaaS platforms including restaurant ordering systems, campaign generation platforms, and
        scalable e-commerce infrastructure. Skilled in backend architecture, authentication systems,
        REST APIs, dashboard systems, frontend optimization, and cloud deployment using AWS EC2 and NGINX.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "NIFAMA Technologies Pvt. Ltd.",
        timeframe: "November 2025 – Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Working on scalable SaaS applications with a focus on backend architecture, multi-tenant systems, and dashboard ecosystems.</>,
          <>Contributed to MenuBex, a restaurant SaaS platform featuring digital menu systems, QR ordering, tenant management, and customizable dashboards.</>,
          <>Developed features for FrameBex, a SaaS campaign poster generation platform with dynamic template systems and user customization workflows.</>,
          <>Currently developing a scalable SaaS e-commerce platform inspired by Shopify architecture with tenant isolation and admin management systems.</>,
          <>Implemented JWT authentication, REST API architecture, and worked with AWS EC2, NGINX, Docker, and Redis.</>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "June 2025 – Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Built production-ready MERN applications with responsive UI systems and scalable backend architecture.</>,
          <>Developed authentication systems, admin dashboards, payment integrations, and real-time features.</>,
          <>Deployed applications using AWS, Vercel, Render, and Netlify.</>,
        ],
        images: [],
      },
      {
        company: "Brototype",
        timeframe: "August 2024 – May 2025",
        role: "Bootcamp Trainee",
        achievements: [
          <>Trained in full-stack web development using React.js, Node.js, and the modern JavaScript ecosystem.</>,
          <>Built practical MERN applications and collaborated using GitHub workflows including pull requests and code reviews.</>,
          <>Worked on real-world projects including AI-assisted and chat-based applications.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Baithul Izza Arts and Science College, Kerala",
        description: <>Bachelor of Computer Applications (BCA) – University of Calicut, 2021 – 2024.</>,
      },
      {
        name: "Higher Secondary Education – Computer Science",
        description: <>Kerala State Board, 2019 – 2021.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (<> </>),
        tags: [
          { name: "JavaScript (ES6+)", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (<> </>),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwindCss" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (<> </>),
        tags: [
          { name: "Node.js", icon: "nodeJs" },
          { name: "NestJS", icon: "nestjs" },
          { name: "Express.js", icon: "express" },
          { name: "REST APIs", icon: "api" },
          { name: "JWT Authentication", icon: "jwt" },
          { name: "Redis", icon: "redis" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (<> </>),
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mySql" },
        ],
        images: [],
      },
      {
        title: "DevOps & Deployment",
        description: (<> </>),
        tags: [
          { name: "AWS EC2", icon: "aws" },
          { name: "NGINX", icon: "nginx" },
          { name: "Docker", icon: "docker" },
          { name: "Vercel", icon: "vercel" },
          { name: "Render", icon: "render" },
          { name: "Netlify", icon: "netlify" },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: (<> </>),
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Postman", icon: "postman" },
          { name: "Figma", icon: "figma" },
          { name: "VS Code", icon: "vscode" },
        ],
        images: [],
      },

    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
