import React from "react";
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <img src="nust_logo.jpeg" alt="AIVAC Logo" className="logo" />
        </nav>
        <h1>AIVaC Competition</h1>
        <p className="subtitle">AI-Value Creation Competition</p>
        <p><strong>Venue:</strong> NUST-SEECS</p>
        <p><strong>Date:</strong> 28 Sep 2024</p>
        <p><strong>First prize:</strong> Rs. 50,000</p>
        <p><strong>Runners up (2):</strong> Rs. 20,000 each</p>
        <p className="rules">
          <strong>Rules:</strong>
          <ol>
            <li>Any AI application</li>
            <li>Budget under $30</li>
            <li>One big problem with 3-4 sub-problems</li>
            <li>Max 3 members</li>
          </ol>
        </p>
        <p><strong>Registration Fee:</strong> Rs. 2,000</p>
        <h2>Description</h2>
        <p className="description">
          Join the AI-Value Creation Competition at NUST-SEECS and showcase your innovative AI solutions. Compete for the top prize of Rs. 50,000 by solving real-world problems with your AI application, all under a budget of $30. Form a team of up to 3 members and dive into the challenge to make a significant impact. Don't miss this opportunity to demonstrate your skills and creativity!
        </p>
        <button className="register-button" onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}>Register Now</button>

      </div>
      <div>
        <p class="sponser">Sponsered by SiBot</p>
      </div>

    </div>
  );
}

export default App;

// alt="AIVAC Logo"