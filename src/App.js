import React,  { useEffect } from 'react';
import './App.css';
import useMoEngage from './hooks/useMoengage';

const App = ()  => {
  const tracker = useMoEngage();


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Home Page</h1>
        <p>This is a simple home page built with React.</p>
      
        <div>
        <button style={{padding: '1rem', color: 'white', background:'#3c72c9', border: 'none', margin: '1rem', width: '9rem', fontWeight: 'bold'}} onClick={() => tracker('NOTIFIED')}>Get Notification</button>
        <button  style={{padding: '1rem', color: 'white', background:'#3c72c9', border: 'none', width: '9rem', fontWeight: 'bold'}} onClick={() => tracker('Button-one')}>Button 2</button>
        <button  style={{padding: '1rem', color: 'white', background:'#3c72c9', border: 'none', margin: '1rem', width: '9rem', fontWeight: 'bold'}} onClick={() => tracker('Button-two')}>Button 3</button>
        </div>
      <div className="home-page">
    </div>
      </header>
    </div>
  );
}

export default App;
