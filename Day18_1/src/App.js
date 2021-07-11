import './styles.css';
import GetInstructions from './Components/Instructions';
import CalorieCard from './Components/CalorieCard';

const instructions = {
  0: 'build a container',
  1: 'create a seperate function and use it as a component',
  2: 'pass props "calory and food" and call it to main component'
};

const menu = {
  Pizza: 266,
  Berger: 140,
  Coke: 140,
  Browne: 190,
  'Fried Rice': 125,
  Lassania: 135,
  'Pani Puri': 180
};
export default function App() {
  return (
    <div className="App">
      <GetInstructions inst={instructions} />
      <CalorieCard menu={menu} />
    </div>
  );
}
