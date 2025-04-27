// pages/index.js
export default function Home() {
    // Array of projects for dynamic rendering
    const projects = [
      { title: "Project 1", description: "This project solves [problem description]." },
      { title: "Project 2", description: "This project solves [another problem description]." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-bold text-center">Hi, I'm [Your Name]</h1>
          <p className="mt-4 text-xl text-center">
            I’m a frontend developer passionate about creating amazing web experiences.
          </p>
  
          {/* Portfolio Button */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition">
              Explore My Portfolio
            </button>
          </div>
  
          {/* Fun Interactive Button */}
          <div className="mt-8">
            <button
              className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition"
              onClick={() => alert('You clicked me!')}
              aria-label="Click me for fun"
            >
              Click me for fun!
            </button>
          </div>
        </div>
  
        {/* Projects Section */}
        <div className="bg-gray-200 py-16">
          <h2 className="text-3xl font-bold text-center">My Projects</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <pre className="bg-gray-800 text-white p-4 mt-4 rounded-lg">
                  <code>
                    {`function ${project.title.toLowerCase().replace(/\s+/g, '')}() { console.log("Solution here!") }`}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }