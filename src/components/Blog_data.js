import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import DATA from '../Context/DATA/data_context'
import Modal_book from './modal_book'
import bg from '../Assets/Images/Blog_info/bg.jpg'
import PCOS from '../Assets/Images/Blog_info/pcod.png';
import leucorrhea from '../Assets/Images/Blog_info/leucorrhea.png';
import Kidney from '../Assets/Images/Blog_info/Kidney.png';
import ULCERATIVE from '../Assets/Images/Blog_info/Ulcerative.png';
import Irritable from '../Assets/Images/Blog_info/Irritable.png';
import Depression from '../Assets/Images/Blog_info/Depression.png';
import piles from '../Assets/Images/Blog_info/piles.png';
import Fatty from '../Assets/Images/Blog_info/Fatty.png';
import Jaundice from '../Assets/Images/Blog_info/Jaundice.png';
import Asthma from '../Assets/Images/Blog_info/Asthma.png';
import Sinusitis from '../Assets/Images/Blog_info/Sinusitis.png';
import Migraine from '../Assets/Images/Blog_info/Migraine.png';
import Thyroid from '../Assets/Images/Blog_info/Thyroid.png';
import Obesity from '../Assets/Images/Blog_info/Obesity.png';
import Vitiligo from '../Assets/Images/Blog_info/Vitiligo.png';
import Psoriasis from '../Assets/Images/Blog_info/Psoriasis.png';
import Hypertension from '../Assets/Images/Blog_info/Hypertension.png';
import Urinary from '../Assets/Images/Blog_info/Urinary.png';
import Acne from '../Assets/Images/Blog_info/Acne.png';
import Eczema from '../Assets/Images/Blog_info/Eczema.png';
import Neuralgia from '../Assets/Images/Blog_info/Neuralgia.png';
import Sciatica from '../Assets/Images/Blog_info/Sciatica.png';
import Diabetes from '../Assets/Images/Blog_info/Diabetes.png';
import Infertility from '../Assets/Images/Blog_info/Infertility.png';
import Gout from '../Assets/Images/Blog_info/Gout.png';
import Cervical from '../Assets/Images/Blog_info/Cervical.png';
import Rheumatoid from '../Assets/Images/Blog_info/Rheumatoid.png';
import Osteo from '../Assets/Images/Blog_info/Osteo.png';
import Typhoid from '../Assets/Images/Blog_info/Typhoid.png';
import Oligospermia from '../Assets/Images/Blog_info/Oligospermia.png';
import Benign from '../Assets/Images/Blog_info/Benign.png';
import Erectile from '../Assets/Images/Blog_info/Erectile.png';


function Blog_data() {

    let navigate = useNavigate();

    useEffect(() => {
        if (!DATA.Blog_info) {
            navigate('/');
        }
    }, [navigate]);

    const photos = {
		"PCOS or PCOD": { src: PCOS },
		"leucorrhea": { src: leucorrhea },
		"Kidney stones": { src: Kidney },
		"ULCERATIVE COLITIS": { src: ULCERATIVE },
		"Irritable Bowel Syndromme": { src: Irritable },
		"Depression": { src: Depression },
		"piles": { src: piles },
		"Fatty liver": { src: Fatty },
		"Jaundice": { src: Jaundice },
		"Asthma": { src: Asthma },
		"Sinusitis": { src: Sinusitis },
		"Migraine": { src: Migraine },
		"Thyroid": { src: Thyroid },
		"Obesity": { src: Obesity },
		"Vitiligo": { src: Vitiligo },
		"Psoriasis": { src: Psoriasis },
		"Hypertension": { src: Hypertension },
		"Urinary Tract Infection": { src: Urinary },
		"Acne": { src: Acne },
		"Eczema": { src: Eczema },
		"Neuralgia Pain": { src: Neuralgia },
		"Sciatica Pain": { src: Sciatica },
		"Diabetes": { src: Diabetes },
		"Infertility": { src: Infertility },
		"Gout": { src: Gout },
		"Cervical": { src: Cervical },
		"Rheumatoid Arthritis": { src: Rheumatoid },
		"Osteo Arthritis": { src: Osteo },
		"Typhoid": { src: Typhoid },
		"Oligospermia": { src: Oligospermia },
		"Benign Prostatic Hyperplasia": { src: Benign },
		"Erectile dysfunction": { src: Erectile },
	};

    function Photo(index) {
        if (photos[index]) {
            let data = photos[index];
			return data.src;
		} else {
			return bg;
		}
	}

    function DOP(DOP) {
		const utcDOB = new Date(DOP);
		// Specify options for formatting the date
		const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
		const DOBDateString = utcDOB.toLocaleDateString('en-GB', options);
		return DOBDateString;
	}


    return (
        <>
            {DATA.Blog &&

                <>
                    <section className='w-screen bg-transparent overflow-hidden'>

                        {/* <div className='flex flex-col items-center justify-center bg-red-400 py-12'> */}
                        <div className='flex flex-col justify-center py-12 min-h-[500px] bg-no-repeat bg-cover'  style={{ "background-image": `url(${Photo(DATA.Blog_info.name)})` ,  "backgroundPosition": 'right'  }}>
                            <div className='md:w-3/6 w-full flex flex-col justify-center items-center'>
                            <p className="md:text-5xl text-3xl text-center font-bold">{DATA.Blog.name.toUpperCase()}</p>
                            <p className="md:w-4/6 w-5/6 md:text-2xl text-lg my-4 text-center">{DATA.Blog.description}</p>
                            <p className="md:w-4/6 w-5/6 md:text-2xl text-lg mb-8 text-center">{DATA.Blog_info.name.toUpperCase()}</p>
                            <Modal_book Footer={true}/>
                            </div>
                        </div>

                        <div className='w-full h-auto flex-row justify-center items-center'>
                            {Object.entries(DATA.Blog_info.description).map(([key, value]) => (
                                <div key={key} className='w-full h-auto overflow-hidden'>
                                    <p className='text-2xl font-bold m-8'>{key.toUpperCase()}</p>

                                    {Array.isArray(value) ? (
                                        <ul className='mx-16 list-disc'>
                                            {value.map((item, index) => (
                                                <li key={index} className='text-justify' >{item}</li>
                                            ))}
                                        </ul>

                                    ) : typeof value === 'object' ? (

                                            <ul className='mx-12 list-decimal'>

                                                {Object.entries(value).map(([subKey, subValue]) => (
                                                    <li key={subKey} className='text-justify'><span className='font-semibold text-sky-800'>{subKey.toUpperCase()}</span>: {subValue}</li>
                                                ))}

                                            </ul>

                                    ) : (
                                        <p className='mx-12 text-justify'>{value}</p>
                                    )}


                                </div>
                            ))}

                            <div className='m-8 flex justify-start items-center'><p className='font-bold'>Publish Date</p><p className='mx-4'>{DOP(DATA.Blog_info.createdAt)}</p></div>

                        </div>
                    </section>
                </>

                ||

                (
                    <div className="w-full h-auto py-8 my-8 bg-sky-200 flex-row items-center border border-black border-solid">
                        <p className=' px-8 text-5xl font-normal leading-tight tracking-widest'>BLOG NOT FOUND</p>
                    </div>
                )
            }

        </>
    )
}

export default Blog_data