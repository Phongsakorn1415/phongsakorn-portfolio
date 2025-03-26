import React, {forwardRef} from "react";
import { TypeAnimation } from 'react-type-animation';
import './index.css'
import { BannerData } from "../../content/BannerContent";
import { Link, Element } from "react-scroll";

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
          
          <div className="my-4">
            <Link to='About' className='btn btn-primary' smooth={true} duration={500}>About Me</Link>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Banner