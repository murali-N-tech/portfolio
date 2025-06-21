// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Your global CSS file (if you have one)

// Import ChakraProvider and extendTheme from @chakra-ui/react
// ChakraProvider makes Chakra UI components available throughout your application
// extendTheme is used to customize Chakra UI's default theme (e.g., colors, fonts)
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// You can optionally define a custom theme here.
// For now, it's an empty object, but you can add your custom colors, fonts,
// component styles, etc., later to brand your portfolio.
const customTheme = extendTheme({
    // Example:
    // colors: {
    //   brand: {
    //     50: '#E6FFFA',
    //     100: '#B2F5EA',
    //     200: '#81E6D9',
    //     500: '#00B5D8', // A primary color for your brand
    //     900: '#1A202C',
    //   },
    // },
    // fonts: {
    //   heading: 'Inter, sans-serif',
    //   body: 'Inter, sans-serif',
    // },
    // breakpoints: {
    //   sm: '30em', // 480px
    //   md: '48em', // 768px
    //   lg: '62em', // 992px
    //   xl: '80em', // 1280px
    //   '2xl': '96em', // 1536px
    // },
});

// Create a React root for your application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component, wrapped in React.StrictMode and ChakraProvider
root.render(
  <React.StrictMode>
    {/* ChakraProvider makes the Chakra UI theme and components available */}
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
