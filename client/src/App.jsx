import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import './app.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'
            element={
              user ? <Home/> : <Register />
            }
          />
          <Route path='/register' 
            element={
              !user ? <Register /> : <Home />
            }
          />
          <Route path='/login' 
            element={
              !user ? <Login /> : <Home />
            }
          />
          {user && (
            <>
              <Route path='/movies' 
                element={
                  <Home type ="movies"/>
                }
              />
              <Route path='/series' 
                element={
                  <Home type ='series'/>
                }
              />
              <Route path='/watch' 
                element={
                  <Watch />
                }
              />
            </>
            
          )}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
