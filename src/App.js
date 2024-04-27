import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import SignUpPage from './Components/SignUpPage'
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<SignUpPage />}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
