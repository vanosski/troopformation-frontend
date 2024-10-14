import React, { useState } from 'react';

const TroopFormationForm = () => {
    const [name, setName] = useState('');
    const [troopTypes, setTroopTypes] = useState(1);
    const [totalTroops, setTotalTroops] = useState(0);
    const [numGuards, setNumGuards] = useState(0);
    const [troops, setTroops] = useState([{ type: '', dead: 0, wounded: 0, survived: 0, kills: 0 }]);
    const [result, setResult] = useState('');

    const addTroopType = () => {
        setTroops([...troops, { type: '', dead: 0, wounded: 0, survived: 0, kills: 0 }]);
        setTroopTypes(troopTypes + 1);
    };

    const handleInputChange = (index, event) => {
        const newTroops = [...troops];
        newTroops[index][event.target.name] = event.target.value;
        setTroops(newTroops);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/formation/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, troopTypes, totalTroops, numGuards, troops }),
        });
        const data = await response.json();
        if (response.ok) {
            setResult(data.result);
        } else {
            setResult('Error: ' + data.error);
        }
    };

    return (
        <div>
            <h1>Troop Formation Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                </label>
                <label>
                    Total Troops:
                    <input type="number" value={totalTroops} onChange={(e) => setTotalTroops(e.target.value)} placeholder="Enter total troops" required />
                </label>
                <label>
                    Number of Guards:
                    <input type="number" value={numGuards} onChange={(e) => setNumGuards(e.target.value)} placeholder="Enter number of guards" required />
                </label>
                
                {troops.map((troop, index) => (
                    <div key={index}>
                        <h3>Troop Type {index + 1}</h3>
                        <label>
                            Troop Type:
                            <input type="text" name="type" value={troop.type} onChange={(e) => handleInputChange(index, e)} placeholder="Enter troop type" required />
                        </label>
                        <label>
                            Dead:
                            <input type="number" name="dead" value={troop.dead} onChange={(e) => handleInputChange(index, e)} placeholder="Enter number of dead" required />
                        </label>
                        <label>
                            Wounded:
                            <input type="number" name="wounded" value={troop.wounded} onChange={(e) => handleInputChange(index, e)} placeholder="Enter number of wounded" required />
                        </label>
                        <label>
                            Survived:
                            <input type="number" name="survived" value={troop.survived} onChange={(e) => handleInputChange(index, e)} placeholder="Enter number survived" required />
                        </label>
                        <label>
                            Kills:
                            <input type="number" name="kills" value={troop.kills} onChange={(e) => handleInputChange(index, e)} placeholder="Enter number of kills" required />
                        </label>
                    </div>
                ))}

                <button type="button" onClick={addTroopType}>Add Troop Type</button>
                <button type="submit">Calculate Formation</button>
            </form>

            <div id="result" dangerouslySetInnerHTML={{ __html: result }} />
        </div>
    );
};

export default TroopFormationForm;
