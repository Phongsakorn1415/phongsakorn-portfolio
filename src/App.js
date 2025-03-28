import React from 'react';
import './App.css';
import NavbarWithAudio from './components/NavbarWithAudio';
import MyMusic from './assets/MiSide OST MainMenu UPD.mp3';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Timeline from './components/TimelineContent';
import { EducationContent } from './content/EducationContent';
import { WorkEXP } from './content/WorkEXP';
import Content from './components/Content';
import About from './components/About';
import EventContent from './content/EventContent';
import Contact from './components/Contact';

function App() {
  document.title = "Portfolio | Phongsakorn"

  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarWithAudio/>
      <Banner/>
      <About/>
      <Timeline
        name = 'Education'
        MainTitle = 'Educational Background'
        data = {EducationContent}
        // BGtype = "bg1"
      />
      <Timeline
        name = 'Work'
        MainTitle = "Work Experience"
        data = {WorkEXP}
      />
      <Timeline
        name = 'Event'
        MainTitle = "Activities Participated"
        data = {EventContent}
      />
      <Contact/>
    </div>
    
  );
}

export default App;
