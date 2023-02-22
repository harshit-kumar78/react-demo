import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/Header";
import Paragraph from "./componets/Paragraph";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Paragraph></Paragraph>
      <Footer />
    </div>
  );
}

export default App;
