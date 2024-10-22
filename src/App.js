
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Join from "./pages/Join";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <SignIn /> */}
          <Route path="/home" element={<Home />} />
          {/* <LogIn /> */}
          <Route path="/logIn" element={<LogIn />} />          
          <Route path="/join" element={<Join />} />       
        </Routes>
      </BrowserRouter> 
    );
  }
  
  export default App;