function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-green-600">Abdur Rahman</span>
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        React Developer | MCA Aspirant
      </p>
      <a href="/projects" className="text-green-600 underline">
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
        View Projects
      </button></a>
      
    </section>
  );
}

export default Hero;
