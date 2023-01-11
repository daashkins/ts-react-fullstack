import * as React from 'react'
import PuppyProvider from './context/puppiesContext'
import Puppies from './components/Puppies'
import AddPuppy from './components/AddPuppy'
import Main from './components/Main'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <PuppyProvider>
      <div className='App'>
        <Header/>
        <Main/>
      </div>
    </PuppyProvider>
  );
}

export default App;



