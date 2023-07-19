import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Card from "./components/Card";
import cardData from "./components/cardData";

function App() {
  console.log(cardData);
  const cardList = cardData.map(card => <Card key={card.id} card={card} />);
  return <div>{cardList}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
