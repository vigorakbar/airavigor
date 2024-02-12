import './App.css';
import { BrideAndGroom } from './components/BrideAndGroom/BrideAndGroom';
import { MainHeader } from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="container">
      <MainHeader />
      <BrideAndGroom />
    </div>
  );
}

export default App;
