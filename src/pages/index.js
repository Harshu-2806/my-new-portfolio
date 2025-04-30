export default function Home() {
  // Array of projects for dynamic rendering
  const projects = [
    {
      title: "Project 1",
      description: "Developed interactive, responsive UIs using HTML, CSS, JavaScript, and Streamlit. Built a Hospital API app with features like live map integration (OpenLayers), calendar scheduling (FullCalendar.js), and local storage for session management.",
      codeSnippet: `function hospitalAPI() {
  console.log("Integrating live maps and calendar scheduling!"); }`,
    },
    {
      title: "Project 2",
      description: "Designed the frontend for an AI-based healthcare platform, including chatbot flow, vitals dashboard, and OCR upload using Streamlit.",
      codeSnippet: `function aiHealthcarePlatform() {
  console.log("Building chatbot and OCR upload features!"); }`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-center">Hi, I'm Harshali Agrawal</h1>
        <p className="mt-4 text-xl text-center">
          I’m a frontend developer passionate about creating amazing web experiences.
        </p>

        {/* Portfolio Button */}
        <div className="mt-8">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Go to My Projects
          </button>
        </div>

        {/* Fun Interactive Button */}
        <div className="mt-8">
          <button
            className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition"
            onClick={() => {
              alert("You clicked me! Here's a fun fact: Did you know that JavaScript was created in just 10 days?");
            }}
          >
            Click me for fun!
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <pre className="bg-gray-800 text-white p-4 mt-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transition animate-bounce"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
