import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "M Abdullah — Software Engineer",
  author: "M Abdullah",
  description:
    "A portfolio showcasing my work as a Software Engineer, including projects, experience, and contact information.",
  lang: "en",
  siteLogo: "/my_pic_small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/MAb540" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-b1a315197/" },
  ],
  socialImage: "/my_pic_small.jpg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "M Abdullah",
    specialty: "Software Engineer",
    summary: `I am a Software Engineer with over 5 years of experience building scalable, high-performance web applications.`,
    email: "awana4872@gmail.com",
  },
  experience: [
    {
      company: "Techwards",
      position: "Sr Software Engineer",
      startDate: "Mar 2024",
      endDate: "Present",
      summary: [
        "Implemented Stripe Direct Debit integration for a U.S.-based car leasing platform, streamlining payment processing and significantly enhancing the user experience. Additionally, set up Grafana, Loki, and Prometheus to enable real-time monitoring, performance metrics, and proactive alerting for system health.",
        "Designed and developed a custom ETL pipeline to aggregate customer reviews from multiple sources. Leveraged LLMs (Large Language Models) to classify reviews based on predefined business factors and compute sentiment scores, delivering actionable insights to stakeholders.",
        "Built an end-to-end proof of concept (POC) for prompt-to-video generation, exploring generative AI capabilities in early 2023. This early-stage R&D initiative helped the client evaluate the feasibility and potential of LLM-driven content creation.",
      ],
    },
    {
      company: "Techwards",
      position: "Software Engineer",
      startDate: "Nov 2021",
      endDate: "Mar 2024",
      summary: [
        "Developed backend system for a digital exercise healthcare application using Node.js, Express.js, and MongoDB.",
        "Implemented data capturing mechanism from user requests using chrome extension apis to replicate the user journey on ecommerce websites.",
        "Created a custom Multi-tenant backend system using Node.js and PostgreSQL as a SasS solution for multiple clients, enabling efficient data management and scalability.",
        "Updated existing Ensurance Management system with new features and enhancements, improving user experience and system performance.",
        "Created Mobile app using React Native for a Oil Drilling Company, integrated backend APIs for data management and real-time updates.",
      ],
    },
    {
      company: "Fiverr",
      position: "Software Engineer",
      startDate: "Jan 2021",
      endDate: "Nov 2021",
      summary:
        "Developed several Scraping scripts and automation bots using Python and Node.js to extract data from various websites, enabling data analysis and insights for business decisions.",
    },
  ],
  projects: [
    {
      name: "Story Sharing App",
      summary: "A story sharing app that allows users to create and share their stories.",
      linkPreview: "/",
      linkSource: "https://github.com/MAb540/storyApp",
      image: "/story_sharing.png",
    },
    {
      name: "Restaurant App",
      summary: "An application for managing restaurant operations, orders, and payments.",
      linkPreview: "/",
      linkSource: "https://github.com/MAb540/ECommerceFrontEnd",
      image: "/restaurant_img.png",
    },
    {
      name: "Ecommerce Platform",
      summary: "An e-commerce platform for buying and selling products.",
      linkPreview: "/",
      linkSource: "https://github.com/MAb540/ecommerce-backend",
      image: "/ecommerce_img.png",
    },
  ],
  about: {
    description: `
      Hi, I am a Software Engineer with over 5 years of experience building scalable, high-performance web applications.
      I specialize in backend and full-stack development, creating robust systems and seamless user experiences.
My backend expertise includes Node.js, Express.js, Python, Django, and databases such as MongoDB, PostgreSQL, MySQL, and Redis. I’m experienced in infrastructure and deployment using AWS services, NGINX, and other DevOps tools. On the frontend, I work extensively with React, Next.js, Redux, and React Query, building maintainable and performant user interfaces.
I enjoy working across the stack, solving complex problems, and delivering end-to-end features in dynamic, fast-paced environments. I'm always exploring new technologies and best practices to improve product quality and development efficiency.
    `,
    image: "/my_pic.jpg",
  },
};
