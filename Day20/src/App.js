import './styles.css';
import GetInstructions from './Components/Instructions';
import CalorieCard from './Components/CalorieCard';
import { useState } from 'react';
const instructions = [
  'build a container',
  'create a seperate function and use it as a component',
  'pass props "calory and food" and call it to main component'
];

const menuItems = [
  ['Pizza', 56],
  ['Berger', 69],
  ['Coke', 500],
  ['Browne', 180],
  ['Fried Rice', 90],
  ['Lassania', 200],
  ['Pani Puri', 10]
];

export default function App() {
  const [menu, setMenu] = useState(menuItems);
  return (
    <div className="App">
      <GetInstructions inst={instructions} />
      <CalorieCard menu={menu} setCards={setMenu} />
    </div>
  );
}
