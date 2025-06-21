// frontend/src/components/Layout/Layout.js
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer'; // Import your Footer component

// Layout component accepts 'children' as a prop
function Layout({ children }) {
    return (
        <div>
            <Navbar /> {/* Your navigation bar */}
            <main style={{ minHeight: '80vh', padding: '20px' }}> {/* Main content area */}
                {children} {/* This is where your page components (Home, About, etc.) will be rendered */}
            </main>
            <Footer /> {/* Your footer */}
        </div>
    );
}

export default Layout; // <--- THIS IS CRUCIAL: Export the Layout component as default