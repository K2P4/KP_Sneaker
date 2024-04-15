/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsComponent = ({ item }) => {
	const nav = useNavigate();
	const handleDetail = () => {
		nav(`/dashboard/detail/${item.id}`, { state: { item } });
	};
	return (
		<div className=" ">
			<div onClick={handleDetail} key={item.id} className=" group   ">
				<img
					className="  group-hover:hover:border-orange-500   border   p-1    hover:transition-transform hover:duration-700  group-hover:rotate-3  group-hover:object-center animate__animated animate__fadeIn  duration-500 transition-shadow  rounded-lg  w-[250px] object-cover  h-[250px] "
					src={item.images.image1}
					alt=""
				/>

				<div className="flex text-sm mt-1 items-center justify-between font-medium text-gray-500 ">
					<p className="  tracking-wide leading-tight   ">{item.name}</p>

					<p>${item.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsComponent;
