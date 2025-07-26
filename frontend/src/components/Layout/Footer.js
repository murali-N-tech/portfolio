import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    const footerStyle = {
        padding: '20px',
        background: '#082567', // Updated color
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '0px',
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
    };

    const iconsContainerStyle = {
        margin: '15px 0 10px 0',
        display: 'flex',
        gap: '20px',
    };

    const iconLinkStyle = {
        color: '#ffffff',
        fontSize: '2.2em',
        transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
    };

    const iconHoverStyle = {
        color: '#87CEFA', // Light blue on hover
        transform: 'scale(1.15)',
    };

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer style={footerStyle}>
            <div style={iconsContainerStyle}>
                <a
                    href="https://github.com/murali-N-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = iconHoverStyle.color;
                        e.currentTarget.style.transform = iconHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = iconLinkStyle.color;
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="GitHub Profile"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/_mr__murali_____/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = iconHoverStyle.color;
                        e.currentTarget.style.transform = iconHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = iconLinkStyle.color;
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="Instagram Profile"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.linkedin.com/in/chinthada-murali-nagaraju-0746912b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconLinkStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = iconHoverStyle.color;
                        e.currentTarget.style.transform = iconHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = iconLinkStyle.color;
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="LinkedIn Profile"
                >
                    <FaLinkedin />
                </a>
            </div>

            <p style={{ margin: '5px 0', fontWeight: '500' }}>
                &copy; {new Date().getFullYear()} Murali. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
