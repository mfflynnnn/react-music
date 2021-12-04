import "./App.css";
import AudioPlayer from "./AudioPlayer";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MollyMakesMusic</h1>
        <h3>a music player app by molly</h3>
      </header>
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;
