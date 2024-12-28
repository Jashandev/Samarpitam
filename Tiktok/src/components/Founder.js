import React from "react";
import doctor from "../Assets/Images/Founder.png";

function Founder() {
    return (
        <>
            <div className="w-screen overflow-hidden p-4 my-12 flex flex-col items-center justify-center">
                <p className="w-5/6 md:w-4/6 mt-4 md:mb-12 flex items-center justify-center">
                    <hr className="w-1/6 border-2 border-black mr-12 hidden md:block" />
                    <p className="sm:text-5xl text-3xl tracking-tight ">
                        OUR FOUNDER
                    </p>
                    <hr className="w-1/6 border-2 border-black ml-12 hidden md:block" />
                </p>
                <div className="w-5/6 flex flex-col items-center justify-center">
                    <p className="md:text-2xl text-lg mt-4 mb-8 text-center">
                    Discover the future of healthcare at your fingertips.
                    </p>
                </div>

                <div className="md:w-5/6 py-8 overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
                    <div className="w-full h-auto md:px-12 px-4 flex justify-center items-center text-white">
                        <div className="flex flex-col items-center justify-center">
                            <div  className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center bg-cover bg-no-repeat bg-white bg-center" style={{ "background-image": `url(${doctor})` }} ></div>
                            <p className="md:text-2xl text-xl  mt-4 text-center"> A Dream project of Mrs. KRISHNA DEVI </p>
                            <p className="md:mt-8 mt-4 text-lg md:leading-10 text-justify">
                                SAMARPITAM has been established with the vision of bringing
                                quality health care with a team of competent and highly
                                dedicated doctors. With a forward-thinking approach and a deep
                                understanding of the intersection between technology and
                                medicine, Mrs. Krishna Devi has been instrumental in shaping the
                                landscape of digital doctor services. Her visionary leadership
                                has played a pivotal role in developing a platform that
                                seamlessly integrates cutting-edge technology with the highest
                                standards of medical care offline & Online. Her passion for
                                utilizing technology to bridge gaps in healthcare delivery is
                                evident in the user-friendly and patient-centric features that
                                define this platform. Under her guidance, digital doctor service
                                has become a beacon of innovation, offering real-time
                                consultations, personalized health insights, and a holistic
                                approach to well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Founder;
