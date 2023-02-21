import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search'
            element={
              <div className="app__page">
              <Login />
            </div>}/>
          <Route path='/' 
            element={
            <div className="app__page">
              <Home />
            </div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
