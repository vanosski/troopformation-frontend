import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TroopFormationForm from './components/TroopFormationForm';
import Home from './components/Home';
import Register from './components/Registers';  
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <div>
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/troop-formation" element={<TroopFormationForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
