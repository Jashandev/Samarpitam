import React, { useContext, useState, useEffect } from 'react'
import { InfoCircleOutlined , NotificationOutlined } from '@ant-design/icons';
import { Form , Button, Checkbox , InputNumber , Input } from 'antd';
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


function Login(props) {

    let navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('token')) {
            navigate('/');
        }

    }, [navigate]);

    const Contextdata = useContext(API);
    const { AlertData, LoginFn } = Contextdata;
    const [api, contextHolder] = AlertData;

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

        /* eslint-disable no-template-curly-in-string */
        const validateMessages = {
            required: '${label} is required!',
            types: {
                number: 'Please enter valid number!',
            },
            number: {
                min: 'Please enter vaild ${label}!',
            },
        };

    const onLoginFinish = (values) => {
        LoginFn(values, "success")
    };
    const onLoginFinishFailed = (values) => {
        LoginFn(values, "error")
    };

    return (
        <>

            <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">

                <div className='h-full w-full flex items-center justify-center bg-no-repeat bg-cover' style={{ "background-image": `url(${bg})` }}>

                    <div className='w-0 h-0 md:w-3/6 md:h-full overflow-hidden' style={{ "boxShadow": "0px 0px 50px #000000" }}>


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

                    <div className='border-2 w-[80%] h-[35rem] md:h-full md:w-3/6 border-808080 flex flex-col items-center justify-center bg-white overflow-y-hidden' style={{ "boxShadow": "0px 0px 50px #000000" }}>

                        <div className='w-full overflow-y-scroll p-10 md:px-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                            <h1 className=' mb-12 mt-2 font-mono'>Hello <NotificationOutlined /></h1>

                            <Form className='w-68 h-68 overflow-hidden' form={form} layout="vertical" initialValues={{ requiredMarkValue: requiredMark, remember: true, }}
                                onValuesChange={onRequiredTypeChange} requiredMark={requiredMark} onFinish={onLoginFinish} onFinishFailed={onLoginFinishFailed} autoComplete="off" validateMessages={validateMessages}>

                                <Form.Item label="Phone" name="Phone" required tooltip="Enter your phone" rules={[{ type: 'number', min:1000000000 , required: true, },]}>
                                    <InputNumber placeholder="Enter Your Phone" style={{ width: '100%' }} maxLength={10}/>
                                </Form.Item>

                                <Form.Item label="Password" name="Password" required tooltip={{ title: 'Secure password', icon: <InfoCircleOutlined />, }} rules={[{ required: true, message: 'Please select your Password!', },]}>
                                    <Input.Password placeholder="Enter Your Password" />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked" >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className='bg-sky-800 h-8 text-slate-50' onClick={props.oncloseLoginDrawer} >Login</Button>
                                </Form.Item>

                            </Form>

                            <h1 className='mt-6 mb-2'>New user <Link to={'/Register'} className='text-blue-600'>signup</Link></h1>

                        </div>

                    </div>

                </div>

                {contextHolder}

            </div>

        </>
    )
}

export default Login