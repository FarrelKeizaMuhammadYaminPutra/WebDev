import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// import Intro from './components/Intro';
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import AllMovies from "./components/AllMovie";
import "./App_landing.css";
import "../style/landingpage.css";
// import "./style/Home.css";
import "../style/navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchPages from "./components/SearchPages";


function App_landing() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Intro/>} /> */}
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchPages />} />
        <Route path="/all-movies" element={<AllMovies />} />
      </Routes>
    </>
  );
}

export default App_landing;
