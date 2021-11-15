import './App.css';
import GameTemplate from './components/GameTemplate';
import Score from './components/Score';
import Box from './components/Box';

function App() {
  return (
    <GameTemplate>
      <Score />
      <Box />
    </GameTemplate>
  );
}

export default App;
