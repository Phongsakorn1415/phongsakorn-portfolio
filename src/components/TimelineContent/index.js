import React, {useState} from "react";
import './index.css'
import { Element } from "react-scroll";

const Timeline = ({
    name = "",
    MainTitle = "",
    data = [],
    BGtype = ""
}) => {
    const [modalImage, setModalImage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const openModal = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImage("");
    };

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
                    style={{ height: "13vh", zIndex: "50", cursor: 'pointer'}} 
                    onClick={() => openModal(picture)}
                /> 
            )
        }
    }

    return (
        <Element name={name}>
            <div className={`Timeline ${BGtype}`}>
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
                                    <div className={`bg-dark-subtle text-dark p-3 shadow rounded ${index % 2 === 0 ? 'text-end': 'text-start'}`} style={{ maxWidth: "300px",  zIndex: '51'}}>
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

            {/* Bootstrap Modal */}
            {showModal && (
                <div 
                    className="modal fade show d-block" 
                    tabIndex="-1" 
                    role="dialog" 
                    style={{ background: "rgba(0, 0, 0, 0.7)", zIndex: "1050" }}
                    onClick={closeModal} // ปิด modal เมื่อกดข้างนอก
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-dark text-light" data-bs-theme="dark">
                            <div className="modal-header">
                                <h5 className="modal-title">Image</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img src={modalImage} alt="Enlarged" className="img-fluid rounded" style={{ maxWidth: "90%", maxHeight: "80vh" }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Element>
    );
};

export default Timeline;
