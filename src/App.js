import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Home1 from './component/Home1';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/user' element={<Home1 />}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
