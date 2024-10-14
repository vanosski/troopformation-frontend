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
                The Troop Formation Calculator uses mathematical modeling to help strategize troop placements in battle. Here’s a breakdown of the calculations involved:
            </p>
            <h3>Mathematical Breakdown</h3>
            <p>
                1. **Troop Details Extraction**: We start by gathering key details for each troop type, including the number of troops that are dead, wounded, or have survived.
            </p>
            <p>
                2. **Calculating Dead and Wounded Troops**: For each troop type, the total number of dead and wounded troops is calculated. This helps to assess the available strength of each troop type.
                <br />
                <strong>Formula:</strong> 
                <code>dw[i] = dead[i] + wounded[i]</code>
            </p>
            <p>
                3. **Total Troops Calculation**: The total troops available for each type are computed by adding those who are dead, wounded, and those who survived.
                <br />
                <strong>Formula:</strong>
                <code>total[i] = dw[i] + survived[i]</code>
            </p>
            <p>
                4. **Coefficient Calculation**: We calculate a coefficient for each troop type based on their performance in terms of kills and survival. This coefficient influences how effectively each type can be deployed in battle.
                <br />
                <strong>Formula:</strong>
                <code>
                    coef[i] = 1 / (((kills[i] - dw[i]) / Math.sqrt(total[i])) * ((kills[i] - dw[i]) / Math.sqrt(total[i])))
                </code>
            </p>
            <p>
                5. **Matrix Formation**: Using the calculated coefficients, a matrix is constructed that represents the relationships between different troop types. This matrix is used to solve a system of linear equations.
            </p>
            <p>
                6. **Gaussian Elimination**: We apply Gaussian elimination to simplify the matrix and find the optimal distribution of troops that minimizes losses while maximizing combat effectiveness. This involves transforming the matrix into row echelon form and then back-substituting to find the values of troop deployment.
            </p>
            <p>
                7. **Result Compilation**: Finally, the calculated troop formations are compiled into a readable format, showing the optimal number of troops for each type, ensuring strategic deployment in battles.
            </p>
            <p>
                With our Troop Formation Calculator, you can visualize and optimize your strategies to achieve success on the battlefield!
            </p>
        </div>
    );
};

export default Home;
