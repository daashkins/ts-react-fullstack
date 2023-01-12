import * as React from 'react'
import PuppyProvider from './context/puppiesContext'
import Puppies from './components/Puppies'
import AddPuppy from './components/AddPuppy'
import Main from './components/Main'
import Header from './components/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path='/edit' element={<Edit/>} /> */}
            </Routes>

            <div className="App">
                {/* <Header />
                <Main /> */}
            </div>
            {/* </PuppyProvider> */}
        </>
    )
}

export default App
