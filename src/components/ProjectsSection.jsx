import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Badaro",
    description: "A beautiful, high tech , responsive ecommerce website.",
    image: "/projects/BadaroProjectPNG.png",
    tags: [
      "React",
      "TailwindCSS",
      "Supabase",
      "Express js ",
      "Next js",
      "Mongo DB",
    ],
    demoUrl: "https://badaro-ns.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Shadow ns ",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/ShadowCapture.png",
    tags: ["TypeScript", "TailWind css", "Next.js ", "Express js", "Figma"],
    demoUrl: "https://shadow-lac-six.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Meraco ns",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/MeracoCapture.PNG",
    tags: ["TypeScript", "TailWind css", "Next.js ", "Express js", "Figma"],
    demoUrl: "https://meraco.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Simon Web",
    description: "A beautiful, high tech , responsive ecommerce website.",
    image: "/projects/SimonCapture.PNG",
    tags: [
      "React",
      "TailwindCSS",
      "Supabase",
      "Express js ",
      "Next js",
      "Mongo DB",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Piassa Admin",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/PiassaAdmin.png",
    tags: ["TypeScript", "TailWind css", "Next.js ", "Express js", "Figma"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Piassa App",
    description:
      "A mobile marketplace app for buying and selling car parts, offering secure user accounts, easy listings, and smooth in-app transactions.",
    image: "/projects/piassa.png",
    tags: ["React native", "Node.js", "Next js"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.zackiber.piassamobile&hl=en",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Hungry Hero",
    description:
      "A mobile delivery app that connects users with fast, reliable couriers for food, packages, and essentials—anytime, anywhere.",
    image: "/projects/delevery.png",
    tags: ["Flutter", "Firebase", "Firestore"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AcilHabib"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
