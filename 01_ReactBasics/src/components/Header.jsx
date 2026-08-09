// import "./Header.css"

function Header() {
  const apptitle = "Info Kartice";
  const today = new Date().toLocaleDateString("hr-HR");
  const titleStyle = { margin: 10, padding: 0, backgroundColor: "transparent" };

  return (
    <header
      className="main-header"
      style={{
        padding: "24px 16px",
        marginBottom: "10px",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <h1 style={titleStyle}>{apptitle}</h1>
      <p>Današnji datum: {today}</p>
    </header>
  );
}

export default Header;
