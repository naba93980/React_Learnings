import React, { useState } from "react";

export default function Appquote() {
  let quotes = ["naver", "ever", "necessary"];
  const [quote, setquote] = useState(" generate random quote");

  function generatenew() {
    setquote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div>
      <p>quote : {quote}</p>
      <button onClick={generatenew}>change quote</button>
    </div>
  );
}
