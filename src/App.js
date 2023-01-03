
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./router/Home";

function App() {
  return (
    <header>
      <Router>
        <Routes>
          <Route exact path ='/' element={<Home/>} />
        </Routes>
      </Router>
    </header>
  )
}

export default App;