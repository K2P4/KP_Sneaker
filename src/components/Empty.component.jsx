/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SneakerContext } from "../service/store/SneakerContextProvider";
const EmptyComponent = () => {
	const nav = useNavigate();
	const { setToggle, SetHiddenIcon } = useContext(SneakerContext);

	const handleBack = () => {
		setToggle(false);
		nav("/dashboard/collections");
	};
	return (
		<div>
			<div className=" mt-20 ">
				<div className="mx-auto    select-none  flex flex-col  gap-2 items-center align-middle">
					<img
						className=" w-full  "
						src="https://ouch-cdn2.icons8.com/3bX0fX3Ny1iN8gWkpKJvKOs7ag94ZyjmBXa-vbPZgSw/rs:fit:368:348/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODIy/LzA0ZTgyOGFjLWQ1/MjEtNDZkMC05ZjVj/LWIzYTM2MzllZmVm/Zi5wbmc.png"
						alt=""
					/>
					<h5 className=" mt-40 sm:text-lg font-medium text-gray-700  ">
						There Has No Item .{" "}
						<span
							onClick={handleBack}
							className="text-orange-500 duration-300 active:scale-95 border-b-orange-400 pb-1 border-b  ">
							Buy Something
						</span>
					</h5>
				</div>

				<button
					onClick={handleBack}
					className="border duration-500 fixed top-4 sm:end-9  end-4   active:scale-95 rounded-sm hover:bg-slate-100 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7  h-7">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default EmptyComponent;
