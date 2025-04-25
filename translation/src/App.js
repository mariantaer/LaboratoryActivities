import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    const translations = {
    hello: 'kamusta',
    world: 'mundo',
    example: 'halimbawa',
    love: 'pag-ibig',
    ghost: 'multo',
    cold: 'malamig',
    read: 'basahin',
    calendar: 'talaarawan',
    airplane: 'salipapaw',
    cheap: 'mura',
    water: 'tubig',
    fire: 'apoy',
    house: 'bahay',
    school: 'paaralan',
    friend: 'kaibigan',
    family: 'pamilya',
    food: 'pagkain',
    sleep: 'tulog',
    work: 'trabaho',
    happy: 'masaya',
    sad: 'malungkot',
    fast: 'mabilis',
    slow: 'mabagal',
    dog: 'aso',
    cat: 'pusa'
  };
  
    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
    <div className="translation-output">       
        <h2>Tagalog Translation:</h2>
        <p>{tagalogTranslation}</p>
      </div>
    )}
  </div>
);
}

export default App;
