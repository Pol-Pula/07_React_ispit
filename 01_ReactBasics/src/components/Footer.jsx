function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        margin: "20px",
        padding: "16px",
        borderTop: "1px solid #5a5a5a",
        textAlign: "center",
      }}
    >
      <small>{year} Info Kartice - Sva prava pridržana</small>
      
    </footer>
  );
}

export default Footer;