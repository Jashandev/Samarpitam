import React, { useContext, useState, useEffect } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox , InputNumber , DatePicker} from 'antd';
import API from '../Context/API/api_context'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import Logo1 from '../Assets/Images/Login/1.png'
import Logo2 from '../Assets/Images/Login/2.png'
import Logo3 from '../Assets/Images/Login/3.png'
import Logo4 from '../Assets/Images/Login/4.png'
import Logo5 from '../Assets/Images/Login/5.png'
import Logo6 from '../Assets/Images/Login/6.png'
import bg from '../Assets/Images/Login/bg.png'

function Register(props) {

    let navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('token')) {
            navigate('/');
        }

    }, [navigate]);

    const Contextdata = useContext(API);
    const { AlertData, RegisterFn } = Contextdata;
    const [api, contextHolder] = AlertData;

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const onRegisterFinish = (values) => {
        RegisterFn(values, "success")
    };
    const onRegisterFinishFailed = (values) => {
        RegisterFn(values, "error")
    };

    return (
        <>

            <div className="w-screen h-screen  flex items-center justify-center overflow-hidden">

                <div className='h-full w-full flex items-center justify-center bg-no-repeat bg-cover' style={{ "background-image": `url(${bg})` }} >

                    <div className='w-0 h-0 md:w-3/6 md:h-full' style={{ "boxShadow": "0px 0px 50px #000000" }}>

                        <Carousel autoplay>
                        <div className="w-full h-screen">
                                <img src={Logo1} className="object-fill w-full h-screen" alt="" />
                            </div>
                            <div className="w-full h-screen">
                                <img src={Logo2} className="object-fill w-full h-screen" alt="" />
                            </div>
                            <div className="w-full h-screen">
                                <img src={Logo3} className="object-fill w-full h-screen" alt="" />
                            </div>
                            <div className="w-full h-screen">
                                <img src={Logo4} className="object-fill w-full h-screen" alt="" />
                            </div>
                            <div className="w-full h-screen">
                                <img src={Logo5} className="object-fill w-full h-screen" alt="" />
                            </div>
                            <div className="w-full h-screen">
                                <img src={Logo6} className="object-fill w-full h-screen" alt="" />
                            </div>
                        </Carousel>

                    </div>

                    <div className='w-[80%] h-[35rem] md:h-full md:w-3/6 border-808080 flex flex-col items-center justify-center bg-white overflow-y-hidden' style={{ "boxShadow": "0px 0px 50px #000000" }}>

                        <div className='w-full overflow-y-scroll p-10 md:px-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                            <h1 className=' mb-12 mt-2 font-mono'>Welcome to Samarpitam</h1>

                            <Form className='w-68 h-68 overflow-hidden' form={form} layout="vertical" initialValues={{ requiredMarkValue: requiredMark, remember: true, }}
                                onValuesChange={onRequiredTypeChange} requiredMark={requiredMark} onFinish={onRegisterFinish} onFinishFailed={onRegisterFinishFailed} autoComplete="off">

                                <Form.Item label="Name" name="Name" required tooltip="Name is a required" rules={[{ required: true, message: 'Please enter your Name!', },]}>
                                    <Input placeholder="Enter Your Name" type='string' maxLength={15} />
                                </Form.Item>

                                <Form.Item label="E-mail" name="Email" tooltip="Email is a optional" rules={[{ type:'email' , message: 'Please enter your E-mail!', },]}>
                                    <Input placeholder="Enter Your E-mail" type='string' />
                                </Form.Item>

                                <Form.Item label="Phone" name="Phone" required tooltip="phone is a required " rules={[{ type: 'number', min:1000000000 , required: true, message: 'Please enter your Phone!', },]}>
                                    <InputNumber placeholder="Enter Your Phone" style={{ width: '100%' }} maxLength={10}/>
                                </Form.Item>

                                <Form.Item label="DOB" name="DOB" required tooltip="DOB is a required" rules={[{ type:'date' , required: true, message: 'Please enter your Age!', },]}>
                                    <DatePicker placeholder="Selet Your DOB" style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item label="Password" name="Password" required tooltip={{ title: 'Secure password', icon: <InfoCircleOutlined />, }} rules={[{ required: true, message: 'Please enter your Password!', },]}>
                                    <Input.Password placeholder="Enter Your Password" />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked" >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className='bg-sky-800 h-8 text-slate-50' onClick={props.oncloseLoginDrawer} >Register</Button>
                                </Form.Item>

                            </Form>

                            <h1 className='mt-6 mb-2'>Already User<Link to={'/Login'} className='text-blue-600'> Login</Link></h1>

                        </div>

                    </div>

                </div>

                {contextHolder}

            </div>

        </>
    )
}

export default Register;