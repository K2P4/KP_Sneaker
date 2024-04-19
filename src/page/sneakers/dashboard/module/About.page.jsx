/** @format */

import React, { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import useFetch from "../../../../hook/useFetch";
import { ImageService } from "../../../../service/images.service";
import { AiFillInstagram } from "react-icons/ai";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";

const AboutPage = () => {
	const { data } = useFetch(ImageService, "personalimage");
	const [showAnimation, setShowAnimation] = useState(false);

	const { aboutToggle, setaboutToggle } = useContext(SneakerContext);

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("about");
			if (serviceComponent) {
				const serviceComponentOffset = serviceComponent.offsetTop;
				const scrollPosition = window.scrollY + window.innerHeight;

				if (scrollPosition >= serviceComponentOffset) {
					setShowAnimation(true);
				} else {
					setShowAnimation(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			id="about"
			className={` ${
				showAnimation &&
				"animate__animated  animate__slideInLeft  mb-20 duration-1000"
			} `}>
			<div className=" w-full about bg-slate-200  border-slate-300 shadow-lg shadow-slate-500 sm:w-[80%] mx-auto h-auto my-28 pt-4  rounded-lg  ">
				<div className="flex flex-col gap-1 align-middle items-center">
					<div className="animate__bounceInLeft bodyFont flex flex-col gap-1 sm:gap-0  animate__animated   duration-700 transition-transform ">
						<p className="text-center  tracking-widest aboutFont  text-orange-500 sm:text-4xl">
							WHO WE ARE
						</p>
						<p className="text-black  text-md text-center   aboutFont sm:text-2xl sm:tracking-widest  tracking-wide  ">
							Nikee Is One Of The Best Production Sneaker In The World{" "}
						</p>
					</div>

					<p className="text-gray-700 animate__bounceInRight duration-700 transition-transform  animate__animated text-sm md:text-md  text-justify sm:text-pretty mt-2 font-medium  tracking-wide  leading-6   sm:text-center    sm:leading-7  ">
						In a world where style meets substance, Nikee stands at the
						forefront of sneaker excellence. With a dedication to design,
						precision manufacturing, sustainability, and community engagement,
						we're not just making sneakers – we're shaping culture, one step at
						a time. Join us on this journey as we continue to push the
						boundaries of creativity and craftsmanship, inspiring sneaker
						enthusiasts around the world to step into elegance with every stride
					</p>
				</div>

				<div className=" sm:w-[70%] py-5  animate__bounceInLeft animate__animated duration-700 transition-transform   flex flex-col items-center align-middle justify-center my-3 p-2 mx-auto">
					<h1 className=" text-orange-500  text-2xl font-bold">Founder KP</h1>
					<img
						className="w-[120px] mt-2 rounded-full h-[120px] "
						src="../../../../../public/Phyo Thura.jpg"
						alt=""
					/>

					<h1 className="font-bold tracking-wide my-3 ">
						{" "}
						Junior Frontend-Developer{" "}
					</h1>

					<div className="flex   my-4 gap-8 items-center justify-center">
						<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
							<FaFacebookF className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
						<a href="https://www.linkedin.com/in/phyo-thu-ya-199215278/">
							<FaLinkedinIn className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
						<a href="https://github.com/K2P4">
							<FaGithub className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
						<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
							<AiFillInstagram className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
