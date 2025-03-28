import React, {forwardRef} from "react";
import { TypeAnimation } from 'react-type-animation';
import './index.css'
import { BannerData } from "../../content/BannerContent";
import { Link, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Banner = () =>{
  const ContentRender = (type,Class,content,ScrollLink) =>{
    if(type == "animation"){
      return (
        <TypeAnimation
          className= {Class}
          sequence={content}
          wrapper="span"
          speed={40}
          style={{display: 'inline-block' }}
          repeat={Infinity}
        />
      )
    }else if(type == "Link"){
      return (
        <div className="my-4">
          <Link to={ScrollLink} className={`btn ${Class}`} smooth={true} duration={500}>{content}</Link>
        </div>
      )
    }
    else{
      return <div className={Class}>{content}</div>
    }
  }

  return(
    <Element name="banner">
      <div className="banner">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="banner-content align-items-center">
          {
            BannerData.map(({
              type = '',
              Class = '',
              content = []
            }) => (ContentRender(type,Class,content)))
          }
          
          <div>
            <a href="https://github.com/Phongsakorn1415" target="_blank" className="mt-4 btn btn-secondary">
              <FontAwesomeIcon icon={faGithub} className="me-2 fs-5"/>
              Visit My Github
            </a>
          </div>
          <div className="my-4">
            <Link to='Contact' className='btn btn-primary' smooth={true} duration={100}>Contact Me</Link>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Banner