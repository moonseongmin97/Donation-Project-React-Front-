
import Welcome from "./pages/Home";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Join from "./pages/Join";
import About from "./pages/About";
import Test from "./SamplePage/Pricing";
import CampaignList from "./CampaignList";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          {/* < /> */}
          <Route path="/" element={<Welcome />} />
          {/* </CampaignList /> */}
          <Route path="/CampaignList" element={<CampaignList />} />
          {/* <SignIn /> */}
          <Route path="/home" element={<Home />} />
          {/* <LogIn /> */}
          <Route path="/logIn" element={<LogIn />} />                   
          <Route path="/join" element={<Join />} />  

          <Route path="/About" element={<About />} />  

          {/* <TestUrl /> */}
          <Route path="/Test" element={<Test />} /> 
        </Routes>
      </BrowserRouter> 
    );
  }
  
  export default App;