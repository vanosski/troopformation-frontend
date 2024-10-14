import React from 'react';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
            <h1>Welcome to Troop Formation Calculator</h1>
            <p>
                Plan and optimize your troop formations for battle success. 
                Get started by registering or logging in!
            </p>

            <h2>How It Works</h2>
            <p>
                Our calculator helps you strategize by analyzing troop data. Here's the process:
            </p>

            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li><strong>1. Troop Data Extraction:</strong> Gather details about dead, wounded, and surviving troops.</li>
                <li><strong>2. Calculate Dead + Wounded:</strong> <code>dw[i] = dead[i] + wounded[i]</code></li>
                <li><strong>3. Total Troops:</strong> <code>total[i] = dw[i] + survived[i]</code></li>
                <li><strong>4. Coefficient Calculation:</strong> Analyze performance using:
                    <br />
                    <code>coef[i] = 1 / (((kills[i] - dw[i]) / √total[i])²)</code>
                </li>
                <li><strong>5. Matrix Formation:</strong> Build a matrix to represent relationships between troop types.</li>
                <li><strong>6. Gaussian Elimination:</strong> Use this technique to optimize troop deployment.</li>
                <li><strong>7. Results:</strong> Get the ideal number of troops for strategic battles!</li>
            </ul>

            <p>Optimize your strategies and lead your troops to victory!</p>
        </div>
    );
};

export default Home;
