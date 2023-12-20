import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Game} from "./phaser";
import { Login, Rooms, WaitingRoom, InGame, Reward } from './pages';

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/in-game" element={<InGame />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/test-game" element={<Game />} />
        {/* Add a default redirect or a default route if necessary */}
      </Routes>
    </Router>
  );
};
