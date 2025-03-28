import React from "react";
import './index.css'
import { Element } from "react-scroll";
import { AboutContent } from "../../content/AboutContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const About = () => {
    return(
        <Element name="About">
            <div className="content">
                <div className="container rounded-2">
                    {/* <div className="text-center" style={{fontSize: '2rem'}}>{AboutContent.title}</div> */}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-block justify-content-center py-3">
                            <div className="mb-4">
                                <img src={AboutContent.img} width="300" className="rounded-5"/>
                            </div>
                            <div className='mt-3'>
                                <a href={AboutContent.linkResume} target='_blank' className='me-4'>
                                    <span className='btn btn-primary py-2 px-2'>
                                        <span className='inline-block me-2 text-sm'><FontAwesomeIcon className='animate-bounce' transform={{ rotate: 270 }} icon={faArrowDown} /></span>
                                        {AboutContent.btnText1}
                                    </span>
                                </a>
                                <a href={AboutContent.linkTranscript} target='_blank'>
                                    <span className='btn btn-primary py-2 px-2'>
                                        <span className='rotate-90 inline-block me-2 text-sm'><FontAwesomeIcon className='animate-bounce' transform={{ rotate: 270 }} icon={faArrowDown} /></span>
                                        {AboutContent.btnText2}
                                    </span>
                                </a>
                            </div>
                            <div>
                                {/* <a href={AboutContent.Github} target="_blank" className="mt-4 btn btn-secondary fs-5">
                                    <FontAwesomeIcon icon={faGithub} className="me-2"/>
                                    Visit My Github
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-block justify-content-center py-3 px-3 text-center about-content rounded-4">
                            <div className="header">{AboutContent.name}</div>
                            <div className="subheader mb-3">{AboutContent.status}</div>
                            {
                                AboutContent.caption.map((e) =>(
                                    <div className="my-3 mx-3">{e}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About