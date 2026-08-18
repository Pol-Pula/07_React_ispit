import TextInput from "./components/forms/TextInput";
import ContactForm from "./components/forms/ContactForm"
import "./App.css";
import RegistrationForm from "./components/forms/RegistrationForm";
import RegistrationFormValidation from "./components/forms/RegistrationFormValidation";

function App() {
  return (
    <>
      <h2>Text Input</h2>
      <form action="">
        <TextInput name="ime" label="Ime: " type="text" />
        <TextInput name="email" label="Email: " type="email" />
        <TextInput name="telefon" label="Telefon: " type="tel" />
        <TextInput name="godine" label="Godine: " type="number" />
      </form>
      <h2>Contact Form</h2>
      <ContactForm />
      <h2>Registration Form</h2>
      <RegistrationForm />
      <h2>Registration form with Validation</h2>
      <RegistrationFormValidation />
      <DynamicForm fields={fields} />
    </>
  );
}

export default App;
