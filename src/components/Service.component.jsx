import React from 'react'

const ServiceComponent = () => {
  return (
		<div className="w-full h-screen  flex flex-col gap-10 ">
			<h1 className=" text-orange-400 bodyFont ms-5 mt-10 border-b-orange-300 border-b w-[20%]  text-3xl header font-bold tracking-wide ">
				Our Services
			</h1>
			<div className=" w-full  h-full m-auto flex gap-10 justify-center">
				<div className="w-[35%] group px-4 hover:bg-orange-400 hover:shadow-md hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  h-[30%]">
					<div className="w-[70%]">
						<h1 className="text-xl font-bold">Fast Free Shipping</h1>
						<p className="text-sm  my-2 text-gray-800 group-hover:text-black   ">
							Order over $75 ship for free. Or singn up for a sneaker account
							and get free shopping on every order.{" "}
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/512/5952/5952766.png"
							alt=""
						/>
					</div>
				</div>

				<div className="w-[35%] group px-4 hover:bg-orange-400 hover:shadow-md hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  h-[30%]">
					<div className="w-[70%]">
						<h1 className="text-xl font-bold">Sneaker Gift Card</h1>
						<p className="text-sm  my-2 text-gray-800 group-hover:text-black  ">
							Give them exactly what they want with a Sneaker Gift Card .
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/128/2169/2169884.png"
							alt=""
						/>
					</div>
				</div>

				<div className="w-[35%] group px-4 hover:bg-orange-400 hover:shadow-md hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  h-[30%]">
					<div className="w-[70%]">
						<h1 className="text-xl font-bold">Worry Free Returns</h1>
						<p className="text-sm  my-2 text-gray-800 group-hover:text-black  ">
							Not happy? Return or exchange your purchase for free within 30
							days .
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/128/11153/11153363.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceComponent