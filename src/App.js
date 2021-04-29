import "./App.css";

/* Import Components */
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <main>
        <div className="wrapper">
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
