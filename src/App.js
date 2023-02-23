import './App.css';
import CalculatorComponent from './components';
import AppProvider from './Global/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <CalculatorComponent />
      </div>
    </AppProvider>
  );
}

export default App;
