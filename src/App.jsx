import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesP from './pages/ServicesP'
import ContactForm from './components/ContactForm'
import Collaboration from './components/Form'
import BlogPreview from './pages/BlogPreview'   // صفحه لیست وبلاگ‌ها
import BlogPost from './components/BlogPost'   
import BlogList from "./components/BlogList";

    // صفحه جزئیات مقاله
import './main.scss'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesP />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/coll" element={<Collaboration />} />

          {/* مسیرهای وبلاگ */}
          
           <Route path="/" element={<BlogPreview />} />
          <Route path="/blog" element={<BlogList  />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
