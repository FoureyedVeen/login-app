import "./App.css";
import Form from "./routes/Form";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Register from "./routes/Register";
import Home from "./routes/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
