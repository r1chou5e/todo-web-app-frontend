import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './components/pages/Authentication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Authentication login={true} />}></Route>
        <Route
          path="/signup"
          element={<Authentication login={false} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
