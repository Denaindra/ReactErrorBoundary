import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import ErrorBoundary from '../src/ErrorHandle/ErrorBoundary';

function App() {
  return (



    <div className="App">
      <ErrorBoundary>
      <Home age={"heweqwewqewqe"} />
      </ErrorBoundary>
      
      <ErrorBoundary>
      {<Home age={"gayan"}/> }
      </ErrorBoundary>

    </div>
  );
}

export default App;
