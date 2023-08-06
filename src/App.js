import Cform from './Components/class/Cform'
import Form from './Components/function/Form';
import {Link,Route,Routes,BrowserRouter as Router} from 'react-router-dom'

function App(){

 
  return (
    <>
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar-brand">Form with Toggle</div>
        <div className="ml-auto">
          <ul className='navbar-nav'>
            <li><Link className='nav-link' to='/function'>Function</Link></li>
            <li><Link className='nav-link' to='/class'>Class</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/function' element={<Form/>} />
        <Route path='/class' element={<Cform/>} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
