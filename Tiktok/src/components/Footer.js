import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import ModalScreen from "./modal_book";
import ModalStatus from "./modal_status";
import { InstagramOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
	const navigation = [
		{ name: "Dashboard", to: "/" },
		{ name: "Testimonials", to: "/Testimonials" },
		{ name: "Blogs", to: "/Blogs" },
		{ name: "Contact Us", to: "/Contact" },
		{ name: "Our Team", to: "/Doctor" },
	];

	const phoneNumber = '7814817888';

	const handleClick = () => {
		navigator.clipboard.writeText(phoneNumber);
		window.location.href = `tel:${phoneNumber}`;
	};

	return (
		<>
			<footer className="bg-gray-800">
				<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
					<div className="md:flex md:justify-between text-gray-500">
						<div className="mb-6 md:mb-0 ">
							<Link to="https://Samarpitam.com/" className="flex items-center">
								<img src={Logo} className="h-8 me-3 rounded-full bg-white" alt="Samarpitam Logo" />
								<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
									Samarpitam
								</span>
							</Link>
							<br />
							<svg fill="#FF0000" version="1.1" id="Capa_1" className="w-8 h-8" viewBox="0 0 400 400">
								<g>
									<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                    c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                    C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                    c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
								</g>
							</svg>
							<br />
							<section className="hover:text-white">
								<p className="text-2xl  text-white"> Reach Us</p>
								<p>Bhoot Nath Mandir Road</p>
								<p>Near A.S Garden Dinanagar,</p>
								<p>Gurdaspur,</p>
								<p>Punjab 143531</p>
							</section>
						</div>



						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">
								Contact Us
							</h2>
							<ul className="text-gray-500 font-extralight md:font-medium md:tex-sm">
								<li className="mb-4" onClick={() => handleClick()}>
									<Link to="tel:7814817888" className="hover:text-blue-500">
										7814817888
									</Link>
								</li>
								<li>
									<Link to="mailto:Support@Samarpitam.com" className="hover:text-blue-500">
										Support@Samarpitam.com
									</Link>
								</li>
								<li className="my-4">
									<ModalScreen Footer={true} />
								</li>
								<li className="my-4">
									<ModalStatus />
								</li>
							</ul>
						</div>


						<div className="hidden md:block">
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">
								Explore More
							</h2>
							<ul className="text-gray-500 font-extralight md:font-medium md:tex-sm">
								{navigation.map((menu, index) => (
									<li className="mb-2 md:mb-4" key={index}>
										<Link to={menu.to} className="hover:text-white">
											{menu.name}
										</Link>
									</li>
								))}
							</ul>
						</div>


					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							© 2024{" "}
							<Link to="https://Samarpitam.com/" className="hover:underline">
								Samarpitam™
							</Link>
							. All Rights Reserved.
						</span>
						<div className="flex mt-4 sm:justify-center sm:mt-0">
							<Link to="https://www.facebook.com/Samarpitam.Chikitsalaya?sfnsn=wiwspmo&mibextid=RUbZ1f" className="text-gray-500 hover:text-white dark:hover:text-white">
								<FacebookOutlined />
								<span className="sr-only">Facebook page</span>
							</Link>
							<Link to="https://www.instagram.com/samarpitam.chikitsalaya?igsh=MXNpMnU5aWU0bTNwaQ==" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
								<InstagramOutlined />

								<span className="sr-only">Instagram page</span>
							</Link>
							<Link to="https://in.linkedin.com/in/samarpitam-chikitsalaya-b575732b9" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
								<LinkedinOutlined />
								<span className="sr-only">Linkedin account</span>
							</Link>
							<Link to="https://youtube.com/@Samarpitam.Chikitsalaya?si=aUL73FhwBv3anKw0" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
								<YoutubeOutlined />

								<span className="sr-only">Youtube account</span>
							</Link>
							<Link to={"https://wa.me/7814817888"} className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
								<WhatsAppOutlined />

								<span className="sr-only">Whatsapp account</span>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;