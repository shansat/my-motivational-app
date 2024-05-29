import React, { useState, useEffect } from 'react';

const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done."
];

function App() {
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    const quoteTimer = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 3600000); // 3600000ms = 1 hour

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Time and Date</h1>
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.toLocaleDateString()}</p>
      <h2>Motivational Quote</h2>
      <p>{quote}</p>
    </div>
  );
}

export default App;
