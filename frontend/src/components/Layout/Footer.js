// frontend/src/components/Layout/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer style={{ padding: '20px', background: '#333', color: 'white', textAlign: 'center', marginTop: 'auto' }}>
            <p>&copy; {new Date().getFullYear()} Murali. All rights reserved.</p>
        </footer>
    );
}

export default Footer;