import React from 'react';
import './App.css';
import Hero from './components/Hero'
import GridWorkoutPrograms from './components/GridWorkoutPrograms';
import ReviewSlider from './components/ReviewSlider';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Hero/>
      <GridWorkoutPrograms />
      <ReviewSlider />
      <Footer/>
    </div>
  );
}

export default App;
