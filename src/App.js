import logo from './logo.svg';
import './App.css';
import { Row, Col, Navbar } from 'reactstrap';
import Home from './HomeAllCompotent/Home';


function App() {
  return (
    <div className="App">
      <Row>
        <Home/>
      </Row>
    </div>
  )
}

export default App;
