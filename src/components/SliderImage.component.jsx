/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const SliderImageComponent = () => {
	const nav = useNavigate();

	const handleShop = () => {
		nav("/dashboard/collections");
	};
	return (
		<div>
			<div className="w-full  shadow-md  h-screen flex justify-center  my-24 flex-wrap  m-auto">
				<div className="group w-[50%] flex  relative  h-[50%] ">
					<img
						className="w-full  group-hover:opacity-90 duration-1000"
						src="https://media.istockphoto.com/id/1478466587/photo/legs-two-male-runners-running-city-marathon-race-athletes-jogging-on-asphalt-road-summer.webp?b=1&s=170667a&w=0&k=20&c=4-CnhoAtXMHXlwoPce8OwRvTc9qtEialWZi9ebFlvMU="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden  animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[35%] top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO RUN
					</button>
				</div>
				<div className="group w-[50%] flex  relative  h-[50%] ">
					<img
						className="w-full  group-hover:opacity-90 duration-1000"
						src="https://media.istockphoto.com/id/1407281632/photo/black-male-shopping.webp?b=1&s=170667a&w=0&k=20&c=OX4NxyVA7bKbWqO2YP3TiUPs-iGASNmk7JsZA8lpvzM="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden  animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[35%] top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO SHOP
					</button>
				</div>

				<div className="group w-[50%] flex  relative  h-[50%] ">
					<img
						className="w-full  group-hover:opacity-90 duration-1000"
						src="https://media.istockphoto.com/id/1494548189/photo/indonesian-woman-shopping-sport-shoes-in-shoes-store.webp?b=1&s=170667a&w=0&k=20&c=is0nIxQ443YwZr0V2UWOA3Zer_2llke8Vz6tABrKpkA="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden  animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[35%] top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO BUY
					</button>
				</div>

				<div className="group w-[50%] flex  relative  h-[50%] ">
					<img
						className="w-full  group-hover:opacity-90 duration-1000"
						src="https://media.istockphoto.com/id/1516440402/photo/business-travel-concept-man-walking-on-city-street-with-yellow-suitcase-cabin-bag.webp?b=1&s=170667a&w=0&k=20&c=F3gYIVd3eN6zHyc6ZXTEKOJQOmzbX2R1pF_xG6kF-MA="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden  animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[35%] top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO SMART
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderImageComponent;
