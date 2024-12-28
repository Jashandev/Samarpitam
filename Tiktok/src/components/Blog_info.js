import React, { useContext, useEffect } from 'react'
import DATA from '../Context/DATA/data_context'
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Blog_info() {

    let navigate = useNavigate();
    const Contextdata = useContext(DATA);
    const { Blog_data, get_Blog_Data } = Contextdata;

    useEffect(() => {
        if (!DATA.Blog) {
            navigate('/');
        } else {
            get_Blog_Data(DATA.Blog, 'success');
        }
    }, [navigate]);

    function Blog_data_info(value) {
        DATA.Blog_info = value;
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

                    <section className='w-screen bg-transparent mt-8 py-8 overflow-hidden'>

                        <div className='flex flex-col items-center justify-center'>
                            <p className="md:text-5xl text-3xl text-center tracking-tight ">{DATA.Blog.name.toUpperCase()}</p>
                            <p className="md:w-4/6 w-5/6 md:text-2xl text-lg my-4 mb-8 text-center">{DATA.Blog.description}</p>
                        </div>

                        <div className='w-full h-auto flex-row justify-center items-center text-center'>
                            {(Blog_data.error === "false" && Blog_data.Blog_data.length !== 0 && Blog_data.Blog_data.map((Data) =>

                                <>
                                    <div className="w-screen h-auto flex justify-center items-center">
                                    <Link to={`/Blog_info/${Data.name}`} onClick={() => Blog_data_info(Data)}>
                                        <div className="md:w-[900px] w-screen py-8 my-8 bg-sky-200 flex flex-col justify-center md:rounded-lg items-center border border-black border-solid">
                                            <p className='px-8 md:text-5xl text-4xl font-normal leading-tight tracking-widest'>{Data.name.toUpperCase()}</p>
                                            <p className='p-4'>{Data.description[Data.name]}</p>
                                            <div className="flex justify-center">
                                                <Button type='primary' className='bg-sky-800 text-slate-50 h-10 flex items-center'>Read More</Button>
                                            </div>
                                            <div className='w-full px-8 mt-4 flex justify-between items-center'><p>Publish Date</p><p className='mx-4'>{DOP(Data.createdAt)}</p></div>
                                        </div>
                                    </Link>
                                    </div>

                                </>
                            ))
                                ||
                                (
                                    <div className="w-full h-auto py-8 my-8 bg-sky-200 flex-row items-center border border-black border-solid">
                                        <p className=' px-8 text-5xl font-normal leading-tight tracking-widest'>BLOG NOT FOUND</p>
                                    </div>
                                )
                            }

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

export default Blog_info