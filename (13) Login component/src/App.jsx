import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";


function App() {

  return (
    <main className="my-4"> 
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App
