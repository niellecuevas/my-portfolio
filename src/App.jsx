import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container text-center mt-5">
      <h1>Hello, I'm Raniella</h1>
      <p className="lead">Aspiring Web Developer</p>

      <section className="my-5">
        <h2>Projects</h2>
        <ul className="list-unstyled">
          <li>✅ Portfolio Website</li>
          <li>✅ Student Violation System</li>
        </ul>
      </section>

      <footer>
        <p>Connect with me: 
          <a href="https://github.com/niellecuevas" target="_blank" rel="noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

