import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from 'react-dom/client' in React 18+
import App from './App';
import { RBACProvider } from './contexts/RBACContext'; // Import your context provider
import './styles.css'; // Import styles if applicable

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RBACProvider>
            <App />
        </RBACProvider>
    </React.StrictMode>
);




const theme = createTheme({
    palette: {
        primary: { main: '#4caf50' },
        secondary: { main: '#ff5722' },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
