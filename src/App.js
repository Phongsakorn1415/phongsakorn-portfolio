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
        MainTitle = 'ประวัติการศึกษา'
        data = {EducationContent}
      />
      <Timeline
        name = 'Work'
        MainTitle = "ประสบการณ์การทำงาน"
        data = {WorkEXP}
      />
      <Timeline
        name = 'Event'
        MainTitle = "กิจกรรมที่เข้าร่วม"
        data = {EventContent}
      />
    </div>
    
  );
}

export default App;
