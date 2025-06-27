import React from 'react';
import { Link } from 'react-router';

export const LandingPage = () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5f7fa' }}>
        <div className='nes-mario'></div>
        <h1 style={{ margin: "2rem"}}>It's-a-me, Josh!</h1>
        <div style={{backgroundColor: "#212529", padding: "1rem 1rem"}}>
            <h4 style={{ color: "#fff", textAlign: "center" }}>Continue?</h4>
            <label>
                <input type="radio" className="nes-radio is-dark" name="answer-dark" checked />
                <Link to="/categories">
                    <span>Yes</span>
                </Link>
            </label>
            <label>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <input type="radio" className="nes-radio is-dark" name="answer-dark" />
                    <span>No</span>
                </a>
            </label>
        </div>
    </div>
);
