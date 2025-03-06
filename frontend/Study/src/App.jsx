import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <div className="logo">Study Buddy</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Help</a>
        </div>
      </div>

      <div className="content">
        <h1>Project Title: Study Buddy</h1>
        <h2>Project Overview</h2>
        <p>
          Study Buddy is a platform that helps students study together by creating
          study groups, sharing resources, and tracking progress. It aims to make
          studying more interactive and fun by connecting students with peers and
          offering tools to stay on track.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>📚 Study Groups: Join or create groups based on subjects.</li>
          <li>📅 Session Scheduler: Plan and track study sessions.</li>
          <li>📖 Shared Resources: Upload and share notes, flashcards, etc.</li>
          <li>📊 Progress Tracker: Track your study progress.</li>
          <li>💬 Discussion Boards: Discuss and ask questions in forums.</li>
          <li>💻 Real-time Chat: Chat with study buddies.</li>
          <li>🏆 Gamification: Earn rewards for study progress.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
          <li>Frontend: React.js, Material-UI</li>
          <li>Backend: Node.js, MongoDB</li>
        </ul>

        <h2>Why This Project?</h2>
        <p>
          I chose this project because it's a fun way to help students study more
          effectively while improving my skills in both frontend and backend
          development. The real-time chat and gamification elements make it more
          engaging, and I get to build something that has a positive impact on
          learning.
        </p>
      </div>
    </>
  );
}

export default App;
