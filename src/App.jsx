import { useState } from 'react';
import "./App.css";
import Cards from './components/Cards.jsx';
import Button from './components/Button.jsx';

function App() {

  const [dataObj, setDataObj] = useState({
    faveSkill: "Effective Collaboration",
    faveSkillDescription: "How I can drive outcome oriented results together",
    futureHappiness: "Want to become immortal with technology",
    futureHappinessDescription:
      "I don't know how it will work yet, but we are moving in the right direction!",
  });

  const newData = {
    faveSkill: "Eating Lasagna",
    faveSkillDescription: "Till my belly hurts",
    futureHappiness: "Moving to the moon when I am 80",
    futureHappinessDescription:
      "Elon is not allowed to come cuz he scares me a little",
  };

  const changeStuff = () => {
    setDataObj(newData);
  };

  return (
    <div className="container">
      <Cards readStuff={ dataObj }/>
      <Button doStuff={ changeStuff }/>
    </div>

  );
}

export default App;
