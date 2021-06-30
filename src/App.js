import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container style={{ textAlign: 'center' }}>
        <Login />
      </Container>
    </div>
  );
}

export default App;
