import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Box width="400px">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
    </Router>
  )
}

export default App