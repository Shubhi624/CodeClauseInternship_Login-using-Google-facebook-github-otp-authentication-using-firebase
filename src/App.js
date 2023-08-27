import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialSignIn from "./components/SocialSignIn";
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = { <SocialSignIn />} />
          <Route exact path='/home' element = {<Welcome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
