import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <main>
          <About/>
      </main>
      <Features/>
      <Tours/>
    </>
  );
};

export default App;
