import React , { useState , useContext } from 'react'
import ContactPhoto from '../Assets/Images/Contact.jpg'
import { Button, Form, Input } from 'antd';
import { MailOutlined, WhatsAppOutlined, PhoneOutlined , StarFilled ,StarOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import DATA from '../Context/DATA/data_context'
import API from '../Context/API/api_context'

function Contact() {

	const [StarCount, setStarCount] = useState(false);
	const data_context = useContext(DATA);
	const {TestimonialsFn} = data_context;
	const API_context = useContext(API);
	const {openNotificationWithIcon} = API_context

	
	let star = [<StarFilled className='scale-[2]'/>, <StarFilled className='scale-[2]'/>, <StarFilled className='scale-[2]'/>, <StarFilled className='scale-[2]'/>, <StarFilled className='scale-[2]'/>, <StarOutlined className='scale-[2]'/>, <StarOutlined className='scale-[2]'/>, <StarOutlined className='scale-[2]'/>, <StarOutlined className='scale-[2]'/>, <StarOutlined className='scale-[2]'/>]

	function StarRating(count) {
		const filledStars = star.slice(0, count);
		const outlinedStars = star.slice(5, 10 - count);
		return filledStars.concat(outlinedStars);
	}

	const onFeedBackFinish = (values) => {
		values.star = StarCount;
		if (StarCount) {
			TestimonialsFn(values, "success")
		} else {
			openNotificationWithIcon("error", "Testimonials", "Please Select Star Rating", "bottomLeft");
		}
    };
    const onFeedBackFinishFailed = (values) => {
		values.star = StarCount;
		if (StarCount) {
			TestimonialsFn(values, "error")
		} else {
			openNotificationWithIcon("error", "Testimonials", "Please Select Star Rating", "bottomLeft");
		}
    };

	return (
		<>

			<section className='bg-gray-900 w-screen h-[60rem] md:h-[30rem]'>
				<div className='w-full h-full text-white flex flex-col md:flex-row justify-center items-center'>
					<div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
						<div className='w-4/6 h-full flex flex-col items-center justify-center'>
							<span className='p-6 bg-gray-700 rounded-lg'><MailOutlined className='scale-150' /></span>
							<p className='pt-4 text-2xl '>Email us:</p>
							<p className='p-4 text-sm font-normal text-justify'>If you have any queries , you may email us, we will get in touch with you within 24 hrs.
</p>
							<p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white rounded-md hover:text-white cursor-pointer'>Support@samarpitam.com</p>
						</div>
					</div>
					<div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
						<div className='w-4/6 h-full flex flex-col items-center justify-center'>
							<span className='p-6 bg-gray-700 rounded-lg'><PhoneOutlined className='scale-150' /></span>
							<p className='pt-4 text-2xl '>Call us:</p>
							<p className='p-4 text-sm font-normal text-justify'>Book Your consultation anytime from anywhere it may be a phone call , video call or clinic consultation.
</p>
							<p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white rounded-md hover:text-white cursor-pointer'>7814817888</p>
						</div>
					</div>
					<div className="w-full h-2/6 md:h-full md:w-2/6 flex items-center justify-center">
						<div className='w-4/6 h-full flex flex-col items-center justify-center'>
							<span className='p-6 bg-gray-700 rounded-lg'><WhatsAppOutlined className='scale-150' /></span>
							<p className='pt-4 text-2xl '>Support</p>
							<p className='p-4 text-sm font-normal text-justify'>For any kind of query related to appointment , delivery timing of medicine contact our support team.</p>
							<Link to={"https://wa.me/7814817888"} ><p className='text-sm font-semibold p-2 text-blue-500 border border-solid border-white  rounded-md hover:text-white cursor-pointer'>Chat on Whatsapp</p></Link>
						</div>
					</div>
				</div>
			</section>

			<section className="dark bg-gray-900 mb-8">
				<span className='w-screen h-4/6 bg-blend-multiply bg-no-repeat bg-cover opacity-20 absolute -z-0' style={{ "background-image": `url(${ContactPhoto})` }}></span>
				<div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col justify-center items-center">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Feedback Us</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We all need people who will give us feedback.That's how we improve.
</p>
					<div className='bg-white w-5/6 md:w-4/6 md:p-12 p-8  rounded-lg flex flex-col justify-center items-center'>
						<p className='text-xl  mb-4'>Rate Us</p>
						<span className='my-4 mb-8'> {StarRating(StarCount).map((starComponent, index) => <span key={index} className='cursor-pointer mx-2 md:mx-4' onClick={()=>{setStarCount(index+1)}}>{starComponent}</span>)}</span>
					<Form name="feedback"  labelCol={{ flex: '110px' }} labelAlign="left" onFinish={onFeedBackFinish} onFinishFailed={onFeedBackFinishFailed} labelWrap wrapperCol={{ flex: 1 }} colon={false}
						style={{ maxWidth: 600 }}>

						<Form.Item label="Name" name="name" rules={[{ required: true , message:"Please enter your Name!" , }]}>
							<Input type='string' placeholder='Enter your name' />
						</Form.Item>

						<Form.Item label="Message" name="massage" rules={[{ required: true , message: "Please enter your experience!" , }]}>
							<Input.TextArea  placeholder='Enter your Message'/>
						</Form.Item>

						<Form.Item label="">
							<Button type="primary" htmlType="submit" className='bg-sky-800 mt-8'>
								Submit
							</Button>
						</Form.Item>
					</Form>
					</div>
				</div>
			</section>

		</>
	)
}

export default Contact