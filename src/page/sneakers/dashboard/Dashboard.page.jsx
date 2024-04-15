/** @format */

import React, { useContext, useEffect, useState } from "react";

import "../../../../node_modules/swiper/swiper-bundle.min.css";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import useFetch from "../../../hook/useFetch";
import Autoplay from "embla-carousel-autoplay";

import { Link, useNavigate } from "react-router-dom";
import HomeCarouselComponent from "../../../components/HomeCarousel.component";
import AboutPage from "./module/About.page";
import ContactPage from "./module/Contact.page";
import {
	DashboardLoadingComponent,
	LoadingComponent,
} from "../../../components";
import AuthGuard from "../../../components/guard/AuthGuard";
import { PopularService } from "../../../service/popular.service";
import { motion } from "framer-motion";

import "../../../../node_modules/animate.css/animate.min.css";

const DashboardPage = () => {
	const { data, loading } = useFetch(PopularService, "popular");
	const [animation, setAnimation] = useState(false);

	const nav = useNavigate();

	const handleAnimation = () => {
		setAnimation(true);
	};

	return (
		<AuthGuard>
			<div className="">
				<div className="w-[85%] sm:w-full  h-screen  sm:my-10 mx-auto select-none ">
					{loading ? (
						<DashboardLoadingComponent />
					) : (
						<Carousel
							plugins={[
								Autoplay({
									delay: 4000,
								}),
							]}>
							<CarouselContent>
								{data?.map((item) => (
									<CarouselItem className="">
										<motion.div
											whileInView={{ opacity: 1 }}
											initial={false}
											whileHover={{
												opacity: 1,
												scale: 1.01,
												boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
											}}>
											<div className=" group  h-[480px] m-auto  relative  shadow-lg shadow-orange-400   px-5    rounded-md w-full flex  align-middle items-center justify-between ">
												<div className="w-[60%] z-20  animate__slideInLeft duration-1000 transition-shadow animate__animated">
													<h1 className=" font-bold text-orange-400 text-3xl ">
														{item.name}
													</h1>
													<p className="text-md my-6 tracking-wide h-[170px] text-gray-700  text-justify">
														{item.description}
													</p>

													<button className="bg-orange-500 hover:bg-orange-600 active:scale-90 duration-300  text-white text-lg  font-semibold px-7 py-2 rounded-lg">
														SHOP NOW
													</button>
												</div>

												<img
													className={`  w-full ${
														animation &&
														"animate__animated animate__slideInRight"
													} animate__slideInRight animate__animated  absolute  transition-transform duration-1000   left-80 top-0   text-center mx-auto h-full   object-contain `}
													src={item.image}
													alt=""
												/>
											</div>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hover:bg-orange-400 hover:text-white duration-500" />
							<CarouselNext
							
								
								className="hover:bg-orange-400 hover:text-white duration-500"
							/>
						</Carousel>
					)}
					<HomeCarouselComponent />

					<AboutPage />

					<div
						id="contact"
						className="    w-full    sm:bg-stone-100 px-3 py-5 rounded-lg  ">
						<ContactPage />
					</div>
				</div>
			</div>
		</AuthGuard>
	);
};

export default DashboardPage;
