import React, { useState } from 'react'
import ModalScreen from './modal_book'
import { Link } from "react-router-dom";
import Treatments from './Treatments'
import Doctor from './Doctor';
import Founder from './Founder';
import Testimonials from './Testimonials'
import { Carousel } from 'antd';
import { SolutionOutlined, WhatsAppOutlined, TeamOutlined, ScheduleOutlined } from '@ant-design/icons'
import logo from '../Assets/Images/Home.png'
import Slide1 from '../Assets/Images/Slides/Slide1.png'
import Slide2 from '../Assets/Images/Slides/Slide2.png'
import Slide3 from '../Assets/Images/Slides/Slide3.png'
import Slide4 from '../Assets/Images/Slides/Slide4.png'

function Dashboard() {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedService(null);
    };

    return (
        <>

            <section>
                <Carousel autoplay>
                    
                    <div className="w-full h-[250px] md:h-[400px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={Slide2} className="object-fill w-5/6 md:h-5/6 h-4/6 rounded-3xl" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-[250px] md:h-[400px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={Slide3} className="object-fill w-5/6 md:h-5/6 h-4/6 rounded-3xl" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-[250px] md:h-[400px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={Slide1} className="object-fill w-5/6 md:h-5/6 h-4/6 rounded-3xl" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-[250px] md:h-[400px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={Slide4} className="object-fill w-5/6 md:h-5/6 h-4/6 rounded-3xl" alt="" />
                        </div>
                    </div>
                 
                </Carousel>
            </section>


            <div className="w-screen h-[30vh] flex justify-center">

                <div className="w-4/6 md:w-3/6 ml-4 h-full flex flex-col justify-center items-center bg-transparent">
                    <p>
                        <p className='text-lg md:text-2xl  md:font-extrabold '>Consult Specialist Doctors Online</p>
                        <p className='text-sm md:text-xl mb-4 font-semibold  md:'>Expert Guidance, Always Online</p>
                        <p className='text-xs md:text-sm mb-8 font-normal md:font-semibold'>Your Wellness, Our Priority - Virtual Care, Real Results</p>
                    </p>
                    <ModalScreen visible={modalVisible} closeModal={closeModal} Footer={false} selectedService={selectedService} />
                </div>

                <div className='w-3/6 h-full flex justify-center items-center'>
                    <img src={logo} className='h-[85%] w-[300px]' alt="" />
                </div>

            </div>

            <Treatments openModal={openModal} />

            <section className='w-screen bg-transparent mt-8 py-8 overflow-hidden cursor-pointer' onClick={()=>openModal(null)}>

                <div className='flex flex-col items-center justify-center'>
                    <p className="md:text-5xl text-3xl text-center tracking-tight ">Steps to Get Your Doctor Consultation</p>
                    <p className="md:w-4/6 w-5/6 md:text-2xl text-lg my-4 mb-8 text-center">No two Individual are alike.Samarpitam examine patients and diseases with the aim to diagnose root causes, offer personalized treatment, and provide individualized care.</p>
                </div>

                <div className='w-full h-4/6 flex flex-col md:flex-row justify-center items-center text-center'>
                    <div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
                        <Link to="https://wa.me/7814817888">
                        <div className='w-full h-full flex flex-col items-center'>
                            <span className='p-6 bg-gray-700 rounded-lg'><WhatsAppOutlined className='scale-150 text-white' /></span>
                            <p className='pt-4 text-2xl '>Connect</p>
                            <p className='p-4 text-sm font-normal'>Call, Message <br /> or Chat</p>
                            {/* <p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white rounded-md hover:text-white cursor-pointer'>Support@samarpitam.com</p> */}
                        </div>
                        </Link>
                    </div>
                    <div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
                        <div className='w-full h-full flex flex-col items-center'>
                            <span className='p-6 bg-gray-700 rounded-lg'><SolutionOutlined className='scale-150 text-white' /></span>
                            <p className='pt-4 text-2xl '>Health Coach</p>
                            <p className='p-4 text-sm font-normal'>Health Coach will be Assigned to you.</p>
                            {/* <p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white rounded-md hover:text-white cursor-pointer'>7814817888</p> */}
                        </div>
                    </div>
                    <div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
                        <div className='w-full h-full flex flex-col items-center'>
                            <span className='p-6 bg-gray-700 rounded-lg'><ScheduleOutlined className='scale-150 text-white' /></span>
                            <p className='pt-4 text-2xl '>Appointment</p>
                            <p className='p-4 text-sm font-normal'>At your convenient time with Samarpitam.</p>
                            {/* <p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white rounded-md hover:text-white cursor-pointer'>7814817888</p> */}
                        </div>
                    </div>
                    <div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
                        <div className='w-full h-full flex flex-col items-center'>
                            <span className='p-6 bg-gray-700 rounded-lg'><TeamOutlined className='scale-150 text-white' /></span>
                            <p className='pt-4 text-2xl '>Consult</p>
                            <p className='p-4 text-sm font-normal'>Receive Personalised Doctor Consultation.</p>
                            {/* <Link to={"https://wa.me/7814817888"} ><p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white  rounded-md hover:text-white cursor-pointer'>Chat on Whatsapp</p></Link> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-transparent">

            <div className="w-screen overflow-hidden p-4 my-12 flex flex-col items-center justify-center">

                <p className='w-5/6 mt-4 md:mb-12 flex items-center justify-center'>
                    <p className="sm:text-5xl text-3xl tracking-tight ">OUR AIM</p>
                </p>

                <div className='w-5/6 flex flex-col items-center justify-center'>
                <p className="md:text-2xl text-lg mt-4 mb-8 text-center">"स्वास्थस्य स्वास्थ्य रक्षणं आतुरस्य विकार प्रशमनं च"</p>
                </div>

                <div className='md:w-5/6 w-[95vw] overflow-hidden rounded-2xl bg-gray-900 shadow-xl'>

                <div className="w-full p-8 md:h-64 flex justify-center items-center">
                        <p className="md:w-4/6 text-2xl font-medium text-white text-justify">Ayurveda is not about only treatment, It is about how to live .So, our mission is to provide the best information about lifestyle and how to prevent disease & keep ourselves healthy. We hold sacred the physician patient relationship that’s based on trust, dignity and mutual respect.</p>
                </div>

                    
                </div>

                </div>
            </section>


            <section className="bg-transparent">
            <div className="w-screen overflow-hidden p-4 my-12 flex flex-col items-center justify-center">

                <p className='w-5/6 mt-4 md:mb-12 flex items-center justify-center'>
                    <p className="sm:text-5xl text-3xl tracking-tight ">OUR PERSPECTIVE</p>
                </p>

                <div className='w-5/6 flex flex-col items-center justify-center'>
                <p className="md:text-2xl text-lg mt-4 mb-8 text-center">"हम समर्पित हैं साझेदारी में, मरीजों की जरूरतों पर ध्यान केंद्रित करते हैं। स्वास्थ्य को बेहतर बनाने के साथ-साथ, हम सेहत सेवा के अच्छे अनुभव को भी प्राथमिकता देते हैं।"</p>
                </div>

                <div className='md:w-5/6 w-[95vw] overflow-hidden rounded-2xl bg-gray-900 shadow-xl'>

                    <div className="w-full p-8 md:h-64 flex justify-center items-center">
                        <p className="md:w-4/6 text-2xl font-medium text-white text-justify">We believe in team work and focusing on patient’s needs. We treat every patient in a way as we would want ourselves or our family members to be treated. We provide not just better health outcome but also a better healthcare experience.</p>
                    </div>

                </div>

                </div>
            </section>


            <Doctor />
            <Founder />
            <Testimonials />

        </>
    );
}

export default Dashboard;
