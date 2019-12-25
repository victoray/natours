import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
    return (
        <>
            <div>
                <Navigation/>
                <Header/>
                <main>
                    <About/>
                    <Features/>
                    <Tours/>
                    <Stories/>
                    <Booking/>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default App;