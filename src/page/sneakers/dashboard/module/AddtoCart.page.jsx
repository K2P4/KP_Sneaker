/** @format */

import React, { useContext, useState } from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { CartListItemComponent, EmptyComponent } from "../../../../components";

const AddtoCartPage = () => {
	const { cart, setToggle } = useContext(SneakerContext);
	const [order, setOrder] = useState(false);
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
			<div className="fixed overflow-scroll  animate__animated animate__bounceInRight  z-10 top-0 end-0 bg-gray-50  border  w-[70%]  sm:w-[25%] h-screen mx-auto ">
				<div className="px-3 mt-5">
					{cart.length == 0 && <EmptyComponent />}

					{cart.length > 0 && (
						<div className=" flex   justify-between border-b-gray-300 border-b pb-3  ">
							<div className="flex gap-1 items-center  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 text-orange-500 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								<h2 className=" text-xs font-semibold sm:text-1xl sm:tracking-normal ">
									{" "}
									List Of Added Sneaker
								</h2>
							</div>

							<button
								onClick={handleBack}
								className="border duration-500    p-1 sm:p-0  active:scale-95 rounded-sm  hover:bg-slate-100 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5 sm:w-7 sm:h-7">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					)}
					{cart.length > 0 && (
						<div className="">
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

							<div className="  mt-20  ">
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
		</div>
	);
};

export default AddtoCartPage;

// {
// 	cart.map((item) => <CartListItemComponent key={item.id} item={item} />);
// }
