const Projects = () => {
    const projects = [
      {
        title: "Stochos FinTech",
        description: "Engineered a Spring Boot and React financial services platform with PostgreSQL, ensuring secure digital transactions and seamless multi-bank API connectivity",
        tech: ["Java", "Spring Boot", "JavaScript", "AWS"]
      },
      {
        title: "SpeedPay Plus",
        description: "Built a Java-based microservices payment processing system using Kubernetes, Docker, and AWS, improving transaction speed by 45% and reducing errors.",
        tech: ["Docker", "Kubernetes", "Spring", "AWS", "Bootstrap"]
      },
      {
        title: "Mobile Masala",
        description: "Developed React and Node.js content management system with MongoDB, automating publishing workflows and increasing efficiency by 30%.",
        tech: ["JavaScript", "React", "Node.js", "AWS", "MongoDB"]
      },
      {
        title: "BSNL CTopUp",
        description: "Implemented a real-time ELK Stack monitoring system, reducing system outages by 25%, while upgrading the existing Javabased backend to improve performance by 20%.",
        tech: ["Java", "JavaScript", "React", "Spring", "ELK", "JUnit"]
      }
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
  