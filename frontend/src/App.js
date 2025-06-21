    // frontend/src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Layout from './components/Layout/Layout'; // Your main layout component

    // Import all your page components
    import Home from './pages/Home';
    import About from './pages/About';
    import Projects from './pages/Projects';
    import Skills from './pages/Skills';
    import Contact from './pages/Contact';
    import Certificates from './pages/Certificates'; // <-- NEW: Import Certificates page

    function App() {
        return (
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/certificates" element={<Certificates />} /> {/* <-- NEW: Add new route */}
                    </Routes>
                </Layout>
            </Router>
        );
    }

    export default App;
    