
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { Container } from 'react-bootstrap';
import Dashboard from './Dashboard';

// Object/Trick to get certain URL parametre
// inside get() we specify what exact url part we need
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      <Container style={{ textAlign: 'center' }}>

        {/* If url code is not null render Dashboard component + pass code as prop
        Otherwise render Login component (which is actually just a button) */}
        {code ? <Dashboard code={code}/> : <Login />}
      </Container>
    </div>
  );
}

export default App;
