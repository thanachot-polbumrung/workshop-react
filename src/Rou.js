import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Nav from "./component/Nav";
import Post from "./pages/Post";

function Rou() {
  return (
    <Router>
      <Nav />
      <Routes>
        
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
export default Rou;
