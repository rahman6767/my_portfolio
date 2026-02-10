function Skills() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {["HTML", "CSS", "Java", "python", "R","c/c++"].map(skill => (
          <div
            key={skill}
            className="px-6 py-3 border rounded-lg shadow hover:bg-green-50"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
