/** @format */

import React, { useEffect, useState } from "react";

import useFetch from "../hook/useFetch";
import { motion } from "framer-motion";
import { LatestService } from "../service/popular.service";
import { MdPadding } from "react-icons/md";
import Slider from "react-slick";
import HomeLoadingComponent from "./HomeLoading.component";
import SellerProductComponent from "./SellerProduct.component";
const BestSellerComponent = () => {
	const { data, loading } = useFetch(LatestService, "Latest");
	const [showAnimation, setShowAnimation] = useState(false);

	const CustomPrevArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...props.style, color: "red" }} // Change color here
				onClick={onClick}
			/>
		);
	};

	const CustomNextArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...props.style, color: "blue" }} // Change color here
				onClick={onClick}
			/>
		);
	};

	const settings = {
		dots: true,
		className: "center h-[310px] px-5 ",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 4,
		speed: 600,
		focusOnSelect: true,
		slidesToScroll: 4,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("bestseller");
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
		<div
			id="bestseller"
			className={`w-full h-screen ${
				showAnimation &&
				"animate__animated  animate__slideInRight  duration-1000"
			}`}>
			<div className="">
				<h1 className="sm:text-4xl text-2xl    mx-auto text-center text-orange-500  bodyFont  tracking-wide">
					Best Seller
				</h1>

				<h1 className=" text-xl   font-semibold  text-center mt-1 sm:mt-1 text-gray-700 tracking-wide">
					Products
				</h1>
			</div>
			<div className="slider-container mt-5">
				{loading ? (
					<HomeLoadingComponent />
				) : (
					<Slider className="   " {...settings}>
						{data?.map((item) => (
							<SellerProductComponent key={item.id} item={item} />
						))}
					</Slider>
				)}
			</div>
		</div>
	);
};

export default BestSellerComponent;
