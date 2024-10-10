import { useState } from 'react';
import '../App.css';


function Cards(readStuff) {
  console.log(readStuff)


  // it changes in the console, but not in the UI, what's wrong?

  return (
    <>
        <h1>{readStuff.faveSkill}</h1>
        <div className="grid-container">
          <div className="grid-item">
            <h2 id="title-one">Grid Item 1</h2>
            <p id="desc-one">{readStuff.faveSkillDescription}</p>
          </div>
          <div className="grid-item">
            <h2 id="title-two">{readStuff.futureHappiness}</h2>
            <p id="desc-two">{readStuff.futureHappinessDescription}</p>
          </div>
        </div>
    </>
  );
}

export default Cards;
