import * as React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <div className="App">
            </div>
        </>
    )
}

export default App
