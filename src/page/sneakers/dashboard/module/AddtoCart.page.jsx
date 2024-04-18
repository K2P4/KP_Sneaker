/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { CartListItemComponent, EmptyComponent } from "../../../../components";

const AddtoCartPage = () => {
	const { cart, setToggle, toggle } = useContext(SneakerContext);
	const [order, setOrder] = useState(false);
	const MenuRef = useRef();

	const nav = useNavigate();

	const handleBack = () => {
		setToggle(false);
		nav("/dashboard/collections");
	};


	const toggleOrder = () => {
		setOrder(!order);
	};

	const costTotal = cart.reduce((total, product) => {
		return total + (product.discount ? product.discount : product.price);
	}, 0);
	console.log(costTotal);

	return (
		<div>
			
				<div className="px-3  mt-5">
					{cart.length == 0 && <EmptyComponent />}

					
					{cart.length > 0 && (
						<div className="   ">
							{!order && (
								<div className="">
									{cart?.map((item) => (
										<CartListItemComponent key={item.id} item={item} />
									))}
								</div>
							)}

							{order && (
								<img
									className=" duration-500 mt-10 w-full h-[50%]  animate__animated animate__bounceIn "
									src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-545.jpg?t=st=1710418226~exp=1710421826~hmac=5e5b9f614c3a4dfa936c258b73c395cbde341c18a5851db42a13c7de14382af4&w=740"
									alt=""
								/>
							)}

							<div className="     mt-60  ">
								<div className="flex justify-between items-center pt-2 border-t boder-t-gray-400  ">
									<p className=" font-bold text-gray-700  tracking-wide">
										Total
									</p>
									<p className="font-bold text-gray-700 tracking-wide ">
										{costTotal.toFixed(2)}
									</p>
								</div>

								<button
									onClick={toggleOrder}
									disabled={order}
									className="w-full select-none mt-10 active:scale-95 bg-orange-500 py-2 text-white  font-semibold tracking-wide  rounded-lg text-cemter ">
									{order ? "Order Success" : "Order Now"}
								</button>
							</div>
						</div>
					)}
				</div>
			
		</div>
	);
};

export default AddtoCartPage;

// {
// 	cart.map((item) => <CartListItemComponent key={item.id} item={item} />);
// }
