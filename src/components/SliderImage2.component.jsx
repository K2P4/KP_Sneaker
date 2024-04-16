/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const SliderImage2Component = () => {
	const nav = useNavigate();
	const handleWomen = () => {
		nav("/dashboard/women");
	};

	const handleMen = () => {
		nav("/dashboard/men");
	};

	const handleUnisex = () => {
		nav("/dashboard/collections");
	};
	return (
		<div className="flex justify-between flex-col">
			<h1 className=" text-orange-400 bodyFont ms-5 mt-10 border-b-orange-300 border-b w-[20%]  text-3xl header font-bold tracking-wide ">
				Shop By Category
			</h1>
			<div className="w-full flex items-center  my-16 h-full">
				<div className="w-[35%] hover:opacity-90 duration-500 relative  ">
					<img
						className=""
						src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw6c46638c/firstspirit/media/homepage_1/2024_spring_1/03_march/D_Converse_04_04_24_GBL_NA_New_Arrivals_Women.jpg"
						alt=""
					/>

					<button
						onClick={handleWomen}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP WOMEN
					</button>
				</div>
				<div className="w-[35%] hover:opacity-90 duration-500 relative  ">
					<img
						className=""
						src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw81d301c6/firstspirit/media/homepage_1/2024_summer_1/01_april_1/D_Converse_04_04_24_GBL_NA_New_Arrivals_Men.jpg"
						alt=""
					/>

					<button
						onClick={handleMen}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP MEN
					</button>
				</div>

				<div className="w-[35%]  hover:opacity-90 duration-500 relative  ">
					<img
						className=""
						src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw13276789/firstspirit/media/homepage_1/2024_summer_1/01_april_1/D_Converse_04_04_24_GBL_NA_New_Arrivals_Kids.jpg"
						alt=""
					/>

					<button
						onClick={handleUnisex}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP UNISEX
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderImage2Component;
