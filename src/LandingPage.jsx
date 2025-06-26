import React from 'react';

export const LandingPage = () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5f7fa' }}>
        <div className='nes-mario'></div>
        <h1>It's-a-me, Josh!</h1>
        <div style={{backgroundColor: "#212529", padding: "1rem 0"}}>
            <h4 style={{ color: "#fff", textAlign: "center" }}>Continue?</h4>
            <label>
                <input type="radio" className="nes-radio is-dark" name="answer-dark" checked />
                <span>Yes</span>
            </label>
            <label>
                <input type="radio" className="nes-radio is-dark" name="answer-dark" />
                <span>No</span>
            </label>
        </div>
    </div>
);
