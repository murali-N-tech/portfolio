import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Add this import

function Footer() {
    // Define inline styles for the footer and its elements
    const footerStyle = {
        padding: '20px',
        background: '#1a202c', // Dark background for a modern look
        color: '#e2e8f0',     // Light text color
        textAlign: 'center',
        marginTop: 'auto',    // Pushes footer to the bottom
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        alignItems: 'center',    // Center align items horizontally
        borderRadius: '8px',     // Slightly rounded corners
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    };

    const iconsContainerStyle = {
        margin: '15px 0 10px 0', // Spacing above and below icons
        display: 'flex',         // Arrange icons in a row
        gap: '20px',             // Space between icons
    };

    const iconLinkStyle = {
        color: '#e2e8f0',      // Icon color
        fontSize: '2.2em',     // Larger icon size
        transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out', // Smooth transition for hover effects
    };

    const iconHoverStyle = {
        color: '#63b3ed', // A light blue color on hover
        transform: 'scale(1.1)', // Slightly enlarge on hover
    };

    // Add navigation links style
    const navLinksStyle = {
        display: 'flex',
        gap: '2rem',
        margin: '10px 0',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    // Responsive styles for navigation links
    const navLinkStyle = {
        color: '#e2e8f0',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1.05rem',
        transition: 'color 0.2s',
        padding: '8px 0',
        borderBottom: '2px solid transparent',
        textAlign: 'center',
        width: 'auto',
    };

    const navLinkHoverStyle = {
        color: '#63b3ed',
        borderBottom: '2px solid #63b3ed',
    };

    // Media query for mobile responsiveness
    const mobileNavLinksStyle = {
        flexDirection: 'column',
        gap: '0.5rem',
    };

    // Detect mobile screen
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer style={footerStyle}>
            <div style={iconsContainerStyle}>
                {/* GitHub Icon Link */}
                <a
                    href="https://github.com/murali-N-tech" // REPLACE with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = iconHoverStyle.color, e.currentTarget.style.transform = iconHoverStyle.transform)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = iconLinkStyle.color, e.currentTarget.style.transform = 'scale(1)')}
                    title="GitHub Profile"
                >
                    <FaGithub />
                </a>

                {/* Instagram Icon Link */}
                <a
                    href="https://www.instagram.com/_mr__murali_____/" // REPLACE with your Instagram profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = iconHoverStyle.color, e.currentTarget.style.transform = iconHoverStyle.transform)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = iconLinkStyle.color, e.currentTarget.style.transform = 'scale(1)')}
                    title="Instagram Profile"
                >
                    <FaInstagram />
                </a>

                 {/* LinkedIn Icon Link (Optional, but highly recommended for portfolios) */}
                 <a
                    href="https://www.linkedin.com/in/chinthada-murali-nagaraju-0746912b9/" // REPLACE with your LinkedIn profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = iconHoverStyle.color, e.currentTarget.style.transform = iconHoverStyle.transform)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = iconLinkStyle.color, e.currentTarget.style.transform = 'scale(1)')}
                    title="LinkedIn Profile"
                >
                    <FaLinkedin />
                </a>
            </div>

            {/* Navigation Links */}
            <div
                style={
                    isMobile
                        ? { ...navLinksStyle, ...mobileNavLinksStyle }
                        : navLinksStyle
                }
            >
                <Link
                    to="/"
                    style={navLinkStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = navLinkHoverStyle.color;
                        e.currentTarget.style.borderBottom = navLinkHoverStyle.borderBottom;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = navLinkStyle.color;
                        e.currentTarget.style.borderBottom = navLinkStyle.borderBottom;
                    }}
                >Home</Link>
                <Link
                    to="/about"
                    style={navLinkStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = navLinkHoverStyle.color;
                        e.currentTarget.style.borderBottom = navLinkHoverStyle.borderBottom;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = navLinkStyle.color;
                        e.currentTarget.style.borderBottom = navLinkStyle.borderBottom;
                    }}
                >About</Link>
                <Link
                    to="/projects"
                    style={navLinkStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = navLinkHoverStyle.color;
                        e.currentTarget.style.borderBottom = navLinkHoverStyle.borderBottom;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = navLinkStyle.color;
                        e.currentTarget.style.borderBottom = navLinkStyle.borderBottom;
                    }}
                >Projects</Link>
                <Link
                    to="/skills"
                    style={navLinkStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = navLinkHoverStyle.color;
                        e.currentTarget.style.borderBottom = navLinkHoverStyle.borderBottom;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = navLinkStyle.color;
                        e.currentTarget.style.borderBottom = navLinkStyle.borderBottom;
                    }}
                >Skills</Link>
                <Link
                    to="/contact"
                    style={navLinkStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = navLinkHoverStyle.color;
                        e.currentTarget.style.borderBottom = navLinkHoverStyle.borderBottom;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = navLinkStyle.color;
                        e.currentTarget.style.borderBottom = navLinkStyle.borderBottom;
                    }}
                >Contact</Link>
            </div>

            <p style={{ margin: '5px 0' }}>&copy; {new Date().getFullYear()} Murali. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
