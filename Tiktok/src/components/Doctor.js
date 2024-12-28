import React, { useContext, useEffect , useState } from 'react'
import DATA from '../Context/DATA/data_context'
import { useNavigate } from "react-router-dom";
import { Carousel , Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import doctor from '../Assets/Images/Doctor/doctor.png'
import Anit from '../Assets/Images/Doctor/Anit.png'
import Ayushi from '../Assets/Images/Doctor/Ayushi.png'
import Hari from '../Assets/Images/Doctor/Hari.png'
import Jasmeet from '../Assets/Images/Doctor/Jasmeet.png'
import Sumeet from '../Assets/Images/Doctor/Sumeet.png'
import Rakesh from '../Assets/Images/Doctor/Rakesh.png'

function Doctor() {

    let navigate = useNavigate();
    const Contextdata = useContext(DATA);
    const { get_Doctor, Doctor } = Contextdata;
    const [Text, setText] = useState(false);

    useEffect(() => {
        get_Doctor();
    }, [navigate]);

    const photos = {
        "Anit": { src: Anit },
        "Ayushi": { src: Ayushi },
        "Hari": { src: Hari },
        "Jasmeet": { src: Jasmeet },
        "Sumeet": { src: Sumeet },
        "Rakesh": { src: Rakesh },
      };

    function Photo(index) {
        if (photos[index]) {
            let data = photos[index];
            return data.src;
        } else {
            return doctor;
        } 
    }


    let star = [<StarFilled />, <StarFilled />, <StarFilled />, <StarFilled />, <StarFilled />, <StarOutlined />, <StarOutlined />, <StarOutlined />, <StarOutlined />, <StarOutlined />]

    function StarRating(countfloat) {
        let count = Math.round(countfloat);
      const filledStars = star.slice(0, count);
      const outlinedStars = star.slice(5, 10 - count);
      return filledStars.concat(outlinedStars);
    }

    return (
        <>
            <div className='w-screen overflow-hidden p-4 my-12 flex flex-col items-center justify-center'>

                <p className='w-5/6 mt-4 md:mb-12 flex items-center justify-center'>
                    <hr className='w-1/6 border-2 border-black mr-12 hidden md:block' />
                    <p className="sm:text-5xl text-3xl tracking-tight ">OUR EXPERTS</p>
                    <hr className='w-1/6 border-2 border-black ml-12 hidden md:block' />
                </p>

                <div className='w-5/6 flex flex-col items-center justify-center'>
                <p className="md:text-2xl text-lg mt-4 mb-8 text-center">Meet Our Expert Medical Team Dedicated Physicians at Your Service.</p>
                </div>

                <div className='md:w-5/6 w-[95vw] overflow-hidden rounded-2xl bg-gray-900 shadow-xl'>
                    <Carousel autoplay>

                        {(Doctor.error === "false" && Doctor.Doctor.map((Doctor) =>

                            <>
                                <div className='w-full h-auto p-4 text-center flex flex-col md:flex-row justify-center items-center text-white'>
                                    <div className="md:w-[20rem] md:h-[20rem] h-[7rem] w-[7rem] rounded-full overflow-hidden bg-cover bg-no-repeat bg-white bg-center" style={{ "background-image": `url(${Photo(Doctor.url)})` }}></div>
                                    <div className="md:w-4/6 h-full md:p-12 flex flex-col items-center justify-center">
                                        <p className='text-3xl  my-4 text-blue-500'>Dr. {Doctor.name.toUpperCase()}</p>
                                        <p className='text-lg font-semibold mb-8'>{Doctor.study.toUpperCase()}</p>
                                        <p className='text-justify'>{ Text ? Doctor.description : Doctor.description.split(' ').slice(0, 25).join(' ')}</p>
                                        <Button type='primary' onClick={()=>setText(!Text)} className={`bg-sky-800 text-slate-50 h-10 my-4 flex items-center`}>{Text ? "Read Less" : "Read More"}</Button>
                                        <div className='w-full flex justify-between items-center mt-8'>
                                            <p className="text-sm font-semibold mb-8">{Doctor.experience}+ years of Experience</p>
                                            <p className="text-sm font-semibold mb-8">{StarRating(Doctor.star.$numberDecimal).map((starComponent,index) => <span key={index}>{starComponent}</span>)}  {Doctor.star.$numberDecimal}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                            ||
                            (
                                <div className="container my-5">
                                    <h2>Doctor</h2>
                                </div>
                            )
                        }

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Doctor