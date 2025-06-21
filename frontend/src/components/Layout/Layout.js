// frontend/src/components/Layout/Layout.js
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer'; // Import your Footer component

// Layout component accepts 'children' as a prop
function Layout({ children }) {
    // Define styles for the overall layout, using a linear gradient background
    const layoutStyle = {
        minHeight: '100vh', // Ensure the layout takes at least the full viewport height
        display: 'flex',
        flexDirection: 'column',
        // Linear gradient background derived from the uploaded image's colors
        // The image shows a gradient from a lighter blue at the top to a slightly darker blue at the bottom.
        background: 'linear-gradient(to bottom, #E0F2F7, #ADD8E6)', // A subtle light blue to slightly darker blue gradient
        color: '#333333',               // Default text color for the layout
    };

    return (
        <div style={layoutStyle}>
            <Navbar /> {/* Your navigation bar */}
            <main style={{ flexGrow: 1, padding: '20px' }}> {/* Main content area, grows to fill space */}
                {children} {/* This is where your page components (Home, About, etc.) will be rendered */}
            </main>
            <Footer /> {/* Your footer */}
        </div>
    );
}

export default Layout; // Export the Layout component as default
