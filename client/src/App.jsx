import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing main pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills"; 
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
// import Certificates from "./Pages/Certificates";
// import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
//import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Cookie from "./Pages/Cookie"; 


//  Importing secondary pages
import BlogDetail from "./Pages/BlogDetail";
import NotFound from './components/NotFound';


// Importing admin pages
import Dashboard from "./admin/pages/Dashboard";
import AdminBlogUploader from "./admin/pages/AdminBlogUploader";
import AdminBlogs from "./admin/pages/AdminBlogs";
import AdminPage from "./admin/pages/AdminPage";

function App() {
  return (
    <Router>
          <Routes>

            {/* This is the Routes pages for All the main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/certificate" element={<Certificates />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
            <Route path="/terms&conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<Cookie />} />



            {/* This is the Routes pages for secondary pages  */}
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />




            {/* This is the Routes pages for Admin pages */}
            <Route path="/dashboard" element={
              // <ProtectedRoute> 
              <Dashboard /> 
              //  </ProtectedRoute> 
               } />
            <Route path="/new-blogs" element={<AdminBlogUploader />} />
            <Route path="/admin-blogs" element={<AdminBlogs />} />
            <Route path="/admin-page" element={<AdminPage />} />
          </Routes>
    </Router>
  );
}

export default App;
