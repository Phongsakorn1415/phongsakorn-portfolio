import React from "react";
import './index.css'
import { Element } from "react-scroll";


const Content = () => {
    return(
        <Element name="About">
            <div className="content">
                <div className="container content-card rounded-2">
                    <div className="row">
                        <div className="col">
                            <div>
                                <image src="../../assets/STP_8397.png" width="200"/>
                            </div>
                        </div>
                        <div className="col">col2</div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Content