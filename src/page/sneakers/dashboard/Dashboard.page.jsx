/** @format */

import React, { useContext, useEffect } from "react";

import "../../../../node_modules/swiper/swiper-bundle.min.css";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import useFetch from "../../../hook/useFetch";
import { MenSneakerService } from "../../../service/men.service";
import { Link, useNavigate } from "react-router-dom";
import HomeCarouselComponent from "../../../components/HomeCarousel.component";
import AboutPage from "./module/About.page";
import ContactPage from "./module/Contact.page";
import {
	DashboardLoadingComponent,
	LoadingComponent,
} from "../../../components";
import AuthGuard from "../../../components/guard/AuthGuard";

const DashboardPage = () => {
	const { data, loading } = useFetch(MenSneakerService, "men");
	const nav = useNavigate();


	return (
		<AuthGuard>
			<div className="">
				<div className="w-[85%]   h-screen  sm:my-10 mx-auto select-none ">
					{loading ? (
						<DashboardLoadingComponent />
					) : (
						<Carousel>
							<CarouselContent>
								{data?.map((item) => (
									<CarouselItem>
										<div className="flex w-full my-5 sm:my-0 duration-700 flex-col items-center sm:flex-row h-[200px] sm:h-[320px] sm:items-start    align-middle ">
											<img
												className="w-[90%] h-[130px] sm:w-[45%] sm:h-[320px] object-cover   rounded-sm  "
												src={item?.images.image1}
												alt=""
											/>

											<div className=" w-[90%] bg-gray-100 sm:h-[320px]  px-4  sm:w-[60%]">
												<div className="mt-2 ">
													<h3 className="text-orange-500 text-center sm:text-left sm:text-3xl  line-clamp-1 sm:line-clamp-none  text-xl  font-bold  ">
														{item.name}
													</h3>

													<p className=" mt-5 text-lg hidden sm:inline-flex   text-gray-600  text-justify  tracking-wide leading-7 font-medium ">
														{item.description}
													</p>

													<button className=" my-7 hidden sm:inline-flex bg-orange-500 font-medium text-white rounded-md px-6 text-center py-2 ">
														<Link to={"/collections"}>SHOP NOW</Link>
													</button>
												</div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hover:bg-orange-400" />
							<CarouselNext className="hover:bg-orange-400" />
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
