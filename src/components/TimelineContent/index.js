import React from "react";
import './index.css'
import { Element } from "react-scroll";

const Timeline = ({
    name = "",
    MainTitle = "",
    data = [],
}) => {
    const DotPic = (picture) =>{
        if(!picture){
            return (
                <div className="position-absolute top-50 start-50 translate-middle bg-light rounded-circle" style={{ width: "20px", height: "20px",  zIndex: '-1'}}></div> 
            )
        }else{
            return (
                <img 
                    src={picture}  // เปลี่ยนเป็น path รูปของคุณ
                    alt="Timeline Point"
                    className="position-absolute top-50 start-50 translate-middle rounded-3"
                    style={{ height: "13vh", zIndex: "-1" }} 
                /> 
            )
        }
    }

    return (
        <Element name={name}>
            <div className="Timeline">
                <div className="container text-light Timeline-content rounded">
                    {/* หัวข้อใหญ่ของ Timeline */}
                    <h2 className="text-center fw-bold mb-5">{MainTitle}</h2>

                    <div className="position-relative mx-auto Timeline-content-detail">
                        {/* เส้นตรงกลาง */}
                        <div className="position-absolute top-0 start-50 translate-middle-x bg-light"
                        style={{ width: "4px", height: "100%", zIndex: "-1" ,color: 'white'}}></div>

                        {data.map(({
                            date = "",
                            title = "",
                            detail = "",
                            picture = ""
                        }, index) => (
                            <div key={index} className="position-relative d-flex mb-5">
                                {/* จุดกลม */
                                    DotPic(picture)
                                }
                                {/* กล่องข้อความที่สลับซ้าย-ขวา */}
                                <div className={`w-100 d-flex ${index % 2 === 0 ? "justify-content-start pe-4" : "justify-content-end ps-4"}`}>
                                <div className={`bg-dark-subtle text-dark p-3 shadow rounded ${index % 2 === 0 ? 'text-end': 'text-start'}`} style={{ maxWidth: "300px",  zIndex: '1'}}>
                                    <h5 className="fw-bold">{date}</h5>
                                    <p className="fw-semibold">{title}</p>
                                    <p className="text-muted">{detail}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Timeline;
