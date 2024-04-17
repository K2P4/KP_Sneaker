/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const ProductsComponent = ({ item }) => {
	const nav = useNavigate();
	const handleDetail = () => {
		nav(`/dashboard/detail/${item.id}`, { state: { item } });
	};

	
	return (
		<div className=" ">
			<div onClick={handleDetail} key={item.id} className="    ">
				<motion.div
					whileInView={{ opacity: 1 }}
					initial={false}
					whileHover={{
						opacity: 1,
						scale: 1.03,
						
					}}
					className="group">
					<img
						className=" group-hover:shadow-gray-500 shadow-lg      bg-gray-100   group-hover:opacity-85 group-hover:rotate-2    p-1    hover:transition-transform hover:duration-700    group-hover:object-center animate__animated animate__zoomIn  duration-500 transition-shadow  rounded-lg  w-[250px] object-cover  h-[250px] "
						src={item?.images.image1}
						alt=""
					/>
				</motion.div>
				<div className="flex text-sm mt-1 items-center justify-between font-medium text-gray-500 ">
					<p className="  tracking-wide leading-tight  text-wrap  ">
						{item?.name}
					</p>

					<p>${item?.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsComponent;
