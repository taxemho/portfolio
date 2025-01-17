const Projects = () => {
    const projects = [
      {
        title: "Stochos FinTech Integration",
        description: "Implemented multiple payment gateways for a leading Middle Eastern financial technology platform.",
        tech: ["Java", "Spring Boot", "React", "AWS"]
      },
      {
        title: "Content Management System",
        description: "Developed a comprehensive backend dashboard for MobileMasala.com using React and Spring framework.",
        tech: ["React", "Spring", "MySQL", "Bootstrap"]
      },
      // Add more projects as needed
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  