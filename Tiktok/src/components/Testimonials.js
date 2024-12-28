import React, { useContext, useEffect } from 'react'
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import DATA from '../Context/DATA/data_context'
import { useNavigate } from "react-router-dom";


function Testimonials() {

	let navigate = useNavigate();
	const Contextdata = useContext(DATA);
	const { get_Testimonials, Testimonials } = Contextdata;

	useEffect(() => {
		get_Testimonials();
	}, [navigate]);

	let star = [<StarFilled />, <StarFilled />, <StarFilled />, <StarFilled />, <StarFilled />, <StarOutlined />, <StarOutlined />, <StarOutlined />, <StarOutlined />, <StarOutlined />]

	function StarRating(count) {
		const filledStars = star.slice(0, count);
		const outlinedStars = star.slice(5, 10 - count);
		return filledStars.concat(outlinedStars);
	}


	return (
		<>
				<div className="w-screen overflow-hidden p-4 my-12 flex flex-col items-center justify-center">

				<p className='w-5/6 mt-4 md:mb-12 flex items-center justify-center'>
                    <p className="sm:text-5xl text-3xl tracking-tight ">Testimonials</p>
                </p>

                <div className='w-5/6 flex flex-col items-center justify-center'>
                <p className="md:text-2xl text-lg mt-4 mb-8 text-center">Delve into the sweetness of SAMARPITAM's offerings and share your delectable experiences.</p>
                </div>

                <div className='md:w-5/6 w-[95vw] overflow-hidden rounded-2xl bg-gray-900 shadow-xl'>
				

					<Carousel autoplay>

						{(Testimonials.error === "false" && Testimonials.Testimonial.map((Testimonials) =>

							<>

								<div className='w-full h-72 p-8 flex flex-col justify-center items-center text-white bg-gray-900 rounded-2xl overflow-hidden'>

									<svg className="h-16 mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
									</svg>
									<blockquote>
										<p className="md:text-3xl text-2xl pb-2 font-medium text-white text-center">{Testimonials.massage}</p>
									</blockquote>
									<figcaption className="flex items-center justify-center mt-6 space-x-3">
										<div className="flex items-center divide-x-2 divide-gray-700">
											<div className="pr-3 font-medium text-white">{Testimonials.name}</div>
											<div className="pl-3 text-sm font-light text-gray-400">{StarRating(Testimonials.star).map((starComponent, index) => <span key={index}>{starComponent}</span>)}  {Testimonials.star}.0</div>
										</div>
									</figcaption>
									
								</div>


							</>

						))
							||
							(
								<div className="container my-5">
									<h2>Testimonials</h2>
								</div>
							)
						}

					</Carousel>

					</div>


				</div>

		</>
	)
}

export default Testimonials