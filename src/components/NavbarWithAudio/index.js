import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff, faPause, faPlay, faVolumeDown } from '@fortawesome/fontawesome-free-solid';
import './index.css'
import { Link } from 'react-scroll';

//Change audio here
import Mymusic from '../../assets/MiSide OST MainMenu UPD.mp3';

// Custom Hook ใช้เล่นเสียง
const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
  
    const toggle = () => setPlaying(!playing);
    const mute = () => setMute(isMute ? false : true);

    
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
      audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        audio.muted = isMute
      }, [isMute]);

    useEffect(() => {
        audio.loop = true;
    
        return () => {
          audio.loop = false; // ปิด loop ถ้า component ถูก unmount
        };
    }, []);
  
    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);
  
    return { playing, toggle, volume, setVolume, mute, isMute, setMute };
  };
  
  const NavbarWithAudio = () => {
    const { playing, toggle, volume, setVolume, mute, isMute, setMute} = useAudio(Mymusic);
    const [scrolled, setScrolled] = useState(false);
  
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav 
            className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`} 
            style={{
                transition: 'background-color 0.3s ease, padding 0.3s ease',
                padding: scrolled ? '5px 0' : '15px 0',
            }}
        >
            <div className="container">
                <a className={`navbar-brand text-start ${scrolled ? 'scrolled-brand' : ''}`}>
                    <Link to="banner" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                        <div>Phongsakorn Suwanna</div>
                        {!scrolled && <div>Portfolio</div>}
                    </Link>
                </a>
                
                {/* ปุ่ม Toggle Menu สำหรับ Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="banner" smooth={true} duration={100} activeClass='active fw-bolder mx-3' spy>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="About" smooth={true} duration={100} activeClass='active  fw-bolder mx-3' spy>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="Education" smooth={true} duration={100} activeClass='active  fw-bolder mx-3' spy>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="Work" smooth={true} duration={100} activeClass='active fw-bolder mx-3' spy>Work Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="Event" smooth={true} duration={100} activeClass='active fw-bolder mx-3' spy>Activities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link curser-pointer" to="Contact" smooth={true} duration={100} activeClass='active fw-bolder mx-3' spy>Contact</Link>
                        </li>
                    </ul>

                    {/* ส่วนควบคุมเพลง */}
                    <div className="rounded-3 p-1" style={{ display: 'block', backgroundColor: 'rgba(255, 255, 255, 0.1)', opacity: '10' }}>
                        {!scrolled && <div className="mx-auto text-white">Background Music</div>}

                        <div className="d-flex align-items-center position-relative justify-content-center">
                            <button className="btn btn-link" onClick={toggle}>
                                {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                            </button>
                            <button className="btn btn-link" onClick={mute} style={{ width: '2rem' }}>
                                {volume === 0 || isMute ? <FontAwesomeIcon icon={faVolumeOff} /> : volume > 0.4 ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeDown} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                style={{ width: "100px", marginLeft: "10px" }}
                                className="me-2 curser-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  };
  
  export default NavbarWithAudio;
