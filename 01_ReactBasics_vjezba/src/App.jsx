import "./App.css";

function App() {
  const studentName = "Marko";
  const courseName = "React Basics";
  const completedLessons = 7;
  const totalLessons = 8;
  const isLoggedIn = true;
  const hasCertificate = true;
  const progressPercentage = (completedLessons / totalLessons) * 100;
  const nextTasks = [
    "Review JSX syntax",
    "Practice conditional rendering",
    "Create your first component layout",
  ];

  return (
    <main>
      <section className="dashboard-header">
        <h1>My React Learning Dashboard</h1>
        <p>Welcome, {studentName}!</p>
      </section>

      <section className="student-card">
        <h2>{studentName.toUpperCase()}</h2>
        <p>Course: {courseName}</p>
        <p>You are currently learning: {courseName}</p>
        <p>
          Progress: {completedLessons} / {totalLessons}
        </p>
      </section>

      <section className="message-card">
        {isLoggedIn ? (
          <p className="success-message">You are logged in. Continue learning!</p>
        ) : (
          <p className="warning-message">Please log in to continue your course.</p>
        )}
        {!hasCertificate && (
          <p className="info-message">Complete all lessons to unlock your certificate.</p>
        )}
        <p>Progress: {progressPercentage.toFixed(0)}%</p>
      </section>

      <section className="tasks-card">
        <h2>Next Tasks</h2>
        <ul>
          <li>{nextTasks[0]}</li>
          <li>{nextTasks[1]}</li>
          <li>{nextTasks[2]}</li>
        </ul>
      </section>

      <section className="summary-card">
          <p>Today's focus: JSX attributes and conditional rendering.</p>
          <p style={{ fontSize: "18px", fontWeight: "bold"}}>
            Keep going, you are doing great!
          </p>
      </section>
    </main>
  );
}

export default App;
