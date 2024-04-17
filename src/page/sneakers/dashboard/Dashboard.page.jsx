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
	BestSeller,
	DashboardLoadingComponent,
	LoadingComponent,
	SliderImage,
	SliderImage2,
} from "../../../components";
import AuthGuard from "../../../components/guard/AuthGuard";
import { PopularService } from "../../../service/popular.service";
import { motion } from "framer-motion";

import "../../../../node_modules/animate.css/animate.min.css";
import { SneakerContext } from "../../../service/store/SneakerContextProvider";
import CustomerComponent from "../../../components/Customer.component";
import ServiceComponent from "../../../components/Service.component";

const DashboardPage = () => {
	const { data, loading } = useFetch(PopularService, "popular");
	const { toggleAnimation, setoogleAnimation } = useContext(SneakerContext);

	console.log(toggleAnimation);

	const nav = useNavigate();

	const hanldeShop = () => {
		nav('/dashboard/collections')
	}

	return (
		<AuthGuard>
			<div className="">
				<div className="w-[85%] sm:w-full  h-auto  sm:my-10 mx-auto select-none ">
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
											<div className=" group   bg-slate-50  h-[480px] m-auto  relative  shadow-lg shadow-orange-400   px-5    rounded-md w-full flex  align-middle items-center justify-between ">
												<div className="w-[60%] z-20  animate__slideInLeft duration-1000 transition-shadow animate__animated">
													<h1 className=" font-bold text-orange-400 text-3xl ">
														{item.name}
													</h1>
													<p className="text-md my-6 tracking-wide h-[170px] text-gray-700  text-justify">
														{item.description}
													</p>

													<button
														onClick={hanldeShop}
														className="bg-orange-500 hover:bg-orange-600 active:scale-90 duration-300  text-white text-lg  font-semibold px-7 py-2 rounded-lg">
														SHOP NOW
													</button>
												</div>

												<div className="   w-[400px] h-[400px]  bg-orange-500  border boder-2    border-orange-500 absolute top-5  z-20 left-[60%] rounded-full"></div>
												<img
													className={`    w-full ${
														toggleAnimation && "  animate-bounce  "
													} animate__slideInRight animate__animated   absolute z-20  transition-transform duration-1000 rounded-full     left-80 top-0   text-center mx-auto  h-full  object-contain `}
													src={item.image}
													alt=""
												/>
											</div>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hover:bg-orange-400 hover:text-white duration-500" />
							<CarouselNext className="hover:bg-orange-400 hover:text-white duration-500" />
						</Carousel>
					)}
					<HomeCarouselComponent />

					<SliderImage />
					<BestSeller/>
					<CustomerComponent />

					<SliderImage2 />
					<ServiceComponent />
				</div>

				<div
					id="contact"
					className="    w-full    sm:bg-stone-50 px-3 py-5 rounded-lg  ">
					<ContactPage />
				</div>
			</div>
		</AuthGuard>
	);
};

export default DashboardPage;
