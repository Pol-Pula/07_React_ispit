import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();     // onemogućujemo defaultno ponašanje, 
    // jer ne želimo da browser automatski radi request-response ciklus 
    // (jer ovim upravlja React, gdje najčešće šaljemo AJAX zahtjev sa FetchAPI-jem ?!)
    console.log("Submitted: ", { name, email, message })
    // Nećemo slati ove podatke nigdje, nego ćemo samo console.log-ati ove podatke u obliku teksta i jednog objekta.
    // U realnom svijetu tu bi ste upotrijebili FetchApi poziv i poslali podatke, 
    // gdje god, na neki server
}

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm