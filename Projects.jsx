function Projects() {
  const projects = [
    {
      title: "Event Management System",
      description:
        "A full stack web application to manage events, registrations, and schedules.",
      tech: "React, Node.js, MongoDB",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and Tailwind CSS.",
      tech: "React, Tailwind CSS",
    },
    {
      title: "Student Management System",
      description:
        "CRUD based application for managing student records.",
      tech: "JavaScript, HTML, CSS",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <span className="text-sm text-green-600 font-medium">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
