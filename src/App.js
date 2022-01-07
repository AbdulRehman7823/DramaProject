import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';
import SignUp from './components/signUp';
import Profile from './components/Profile';
import Episodes from './components/Episodes'

function App() {
  return (
    
    <Router>
       <Routes>


         
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login/Profile/:id" element={<Profile />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/episodes/:id" element={<Episodes />}/>



       </Routes>


    </Router>

  );
}

export default App;
