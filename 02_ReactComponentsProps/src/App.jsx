import { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import Button from "./components/Button";
import ChildrenCard from "./components/ChildrenCard";

function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function Greeting2({ name }) {
  return <h1>Hello {name}</h1>;
}

function Header() {
  return (
    <header>
      <h1>My Application</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2026</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Greeting name="Pol" />
      <Greeting name="Sara" />
      <Greeting name="Marko" />
      <hr />
      <UserCard />
      <UserCard name="Marko" age={37} />
      <UserCard name="Pol" age={37} />
      <UserCard name="Sara" age={37} />
      <hr />
      <Button />
      <Button label="Submit" />
      <Button label="Submit" variant="danger" />
      <Button label="Submit" variant="warning" />
      <hr />
      <ChildrenCard>
        <h2>Child 1</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          velit quam corporis accusantium officiis animi, a officia temporibus
          esse vero reprehenderit tenetur blanditiis commodi fuga sint
          voluptatum quis. Veritatis, cupiditate!
        </p>
        <Button />
      </ChildrenCard>
      <ChildrenCard>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </ChildrenCard>
      <Footer />
    </>
  );
}

export default App;
