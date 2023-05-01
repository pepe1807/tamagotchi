import React, { useState, useEffect } from 'react';

function Tamagotchi() {
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [age, setAge] = useState(0);
  const [type, setType] = useState('');

  useEffect(() => {
    const ageInterval = setInterval(() => {
      setAge(prevAge => prevAge + 1);
    }, 1000);
    const statsInterval = setInterval(() => {
      setHunger(prevHunger => prevHunger - 5);
      setEnergy(prevEnergy => prevEnergy - 5);
      setHappiness(prevHappiness => prevHappiness - 5);
    }, 5000);
    return () => {
      clearInterval(ageInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const handleFeed = () => {
    setHunger(prevHunger => prevHunger + 10);
  };

  const handleSleep = () => {
    setEnergy(prevEnergy => prevEnergy + 10);
  };

  const handlePlay = () => {
    setHappiness(prevHappiness => prevHappiness + 10);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <h1>reinos</h1>
      <label>
        Choose your reino type:
        <select value={type} onChange={handleTypeChange}>
          <option value="">Select a type</option>
          <option value="cat">Cat</option>
          <option value="hongo">hongo</option>
          <option value="covid">covid</option>
        </select>
      </label>
      {type && (
        <>
          <p>Age: {age}</p>
          <p>Hunger: {hunger}</p>
          <p>Energy: {energy}</p>
          <p>Happiness: {happiness}</p>
          <button onClick={handleFeed}>Feed</button>
          <button onClick={handleSleep}>Sleep</button>
          <button onClick={handlePlay}>Play</button>
        </>
      )}
    </div>
  );
}

export default Tamagotchi;