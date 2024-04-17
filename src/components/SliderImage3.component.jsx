/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const SliderImage3Component = () => {
	const nav = useNavigate();
	const handleShop = () => {
		nav("/dashboard/collections");
	};
	return (
		<div className="flex items-center flex-wrap w-full h-screen relative justify-center">
			<div className="w-[50%] px-10 py-10 rounded-e-none  rounded-lg border border-black h-[50%]">
				<h1 className=" text-4xl mb-1 font-semibold ">QUALITY</h1>
				<h1 className="font-medium text-lg">AND AUTHENTICITY</h1>

				<p className="text-md my-4 tracking-wide text-gray-800">
					We emphasize the importance of selling genuine ,high-quality sneakers
					.
				</p>
				<button className="border hover:bg-black hover:text-white duration-700 border-black rounded-md px-4 py-2">
					LEARN MORE
				</button>
			</div>

			<div className="w-[50%] relative  overflow-hidden rounded-s-none rounded-lg border border-black h-[50%]">
				<img
					className="w-full absolute object-contain left-36 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaEYh_KsuJa39QTjDCbdNjnzGelZglnJeUQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6lfnGG-KLEE-QSGuOCnSuOamTBKUHWIQMEJ66_iI4tQemkubkYLKzSUv3ef9L_c6SjE&usqp=CAU"
				/>
			</div>

			<div className="w-[50%] relative  overflow-hidden rounded-e-none rounded-lg border border-black h-[50%]">
				<img
					className="w-full absolute  object-contain top-0 right-36 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Un5damdbmWaRtYFrrjBkxzF2mvGMzraD6g&s"
				/>
			</div>

			<div className="w-[50%] px-10 py-10 rounded-s-none  rounded-lg border border-black h-[50%]">
				<h1 className=" text-4xl mb-1 font-semibold ">EXCLUSIVE RELEASES</h1>
				<h1 className="font-medium text-lg">AND COLLABORATIONS</h1>

				<p className="text-md my-4 tracking-wide text-gray-800">
					We Collaborate with popular artists , celebrities or other brands to launch limited -edition sneakers exclusive 
					releases.
				</p>
				<button className="border hover:bg-black hover:text-white duration-700 border-black rounded-md px-4 py-2">
					LEARN MORE
				</button>
			</div>
		</div>
	);
};

export default SliderImage3Component;
