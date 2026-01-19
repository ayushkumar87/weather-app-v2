import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Keep Home eager for faster LCP
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

// Lazy load other pages to reduce initial bundle size
const Forecast = lazy(() => import('./pages/Forecast'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Assistant = lazy(() => import('./pages/Assistant'));

// Loading component
const PageLoader = () => (
    <div className="loader-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        color: 'white'
    }}>
        <div className="loader"></div>
    </div>
);

import { WeatherProvider } from './context/WeatherContext';

// ... existing imports ...

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <WeatherProvider>
                    <Router>
                        <ErrorBoundary>
                            <div className="app">
                                <Navbar />
                                <Suspense fallback={<PageLoader />}>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/forecast" element={<Forecast />} />
                                        <Route path="/analytics" element={<Analytics />} />
                                        <Route path="/assistant" element={<Assistant />} />
                                    </Routes>
                                </Suspense>
                                <Footer />
                            </div>
                        </ErrorBoundary>
                    </Router>
                </WeatherProvider>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
