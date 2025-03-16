import './App.css';
import Page from './components/Page';

function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Page />
      </div>
    </div>
  );
}

export default App;
