import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { Container } from 'react-bootstrap';
import Dashboard from './Dashboard';

// Объект с параметрами урла
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      <Container style={{ textAlign: 'center' }}>
        {code ? <Dashboard code={code}/> : <Login />}
      </Container>
    </div>
  );
}

export default App;
