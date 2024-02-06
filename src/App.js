import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home-Page/HomePage";
import NavbarLogin from "./Components/Utilities/NavBar-Login/NavbarLogin";
import Footer from "./Components/Utilities/Footer/Footer";
import LoginPage from "./Pages/Auth/1-Login-Page/LoginPage";
import RegisterPage from "./Pages/Auth/2-Resister-Page/RegisterPage";
import AllCategoryPage from "./Pages/Categories/All-Category-Page/AllCategoryPage";

function App() {
  return (
    <div className="App">

      <div className='py-5'>
        <NavbarLogin />
      </div>

      <BrowserRouter >
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/allCategory" element={<AllCategoryPage/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
      
      
    </div>
  );
}

export default App;
