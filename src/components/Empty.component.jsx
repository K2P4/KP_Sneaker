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
					<h5 className="  mt-8 sm:text-md font-medium text-gray-700  ">
						There Has No Item .{" "}
						<span
							onClick={handleBack}
							className="text-orange-500 duration-300 active:scale-95 border-b-orange-400 pb-1 border-b  ">
							Buy Something
						</span>
					</h5>
				</div>

				
			</div>
		</div>
	);
};

export default EmptyComponent;
