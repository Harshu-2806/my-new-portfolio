// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-xl text-center">
          I started my journey in frontend development because I’ve always loved
          creating things and solving problems. My first project was a small
          interactive webpage, and since then, I’ve been hooked on learning new
          web technologies.
        </p>
  
        <div className="mt-8">
          {/* Example of adding a visual asset (handmade sketch, icon, etc.) */}
          <img src="/assets/my-sketch.svg" alt="My Hand-drawn Sketch" className="w-32 h-32" />
        </div>
      </div>
    )
  }
  