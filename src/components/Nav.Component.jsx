/** @format */

import React, { useContext, useEffect, useState } from "react";
import {
	useNavigate,
	useLocation,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
import { SneakerContext } from "../service/store/SneakerContextProvider";

const NavComponent = () => {
	// const {
	// 	state : { AuthenticateData },
	// } = useLocation();
	const [toggle, settoggle] = useState(false);
	const { aboutToggle, setaboutToggle, setContactToggle, contactToggle } =
		useContext(SneakerContext);

	const handleAbout = () => {
		setaboutToggle(!aboutToggle);
	};

	const handleContact = () => {
		setContactToggle(!contactToggle);
	};

	const nav = useNavigate();
	const {
		data,
		cart,
		hiddenIcon,
		filterCart,
		setFilterCart,
		setToggle,
		SetHiddenIcon,
	} = useContext(SneakerContext);

	const toggleMenu = () => {
		settoggle(!toggle);
	};

	const [search, setSearch] = useState("");

	const click = () => {
		setToggle(true);
		SetHiddenIcon(true);
	};

	const handleDashboard = () => {
		nav("/dashboard");
		settoggle(!toggle);
	};

	const handleCollections = () => {
		nav("/dashboard/collections");
		settoggle(!toggle);
	};

	const handleMen = () => {
		nav("/dashboard/men");
		settoggle(!toggle);
	};

	const handleWomen = () => {
		nav("/dashboard/women");
		settoggle(!toggle);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const filtered = data?.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilterCart(filtered);

		nav(`/dashboard/search/${search}`);
	};

	const handleLogout = () => {
		const remove = localStorage.removeItem("token");

		nav("/");
	};

	const handleAddToCart = () => {
		SetHiddenIcon(true);
		nav("/addtocart");
	};

	const handelCloseMenu = () => {
		nav(-1);
		settoggle(!toggle);
	};

	return (
		<div>
			<div className=" w-[95%]   sm:w-[85%]    mx-auto  ">
				<div className=" border-b border-b-gray-300  py-4 sm:py-9  flex justify-between items-center   ">
					<ul className=" sm:flex   hidden   items-center gap-6 align-middle">
						<li
							id="logo"
							className="text-xl   select-none tracking-wide  font-bold  text-orange-500">
							<Link to="/dashboard">
								<div className="flex items-center gap-1">
									NIKEE
									<img
										className="w-10"
										src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
										alt=""
									/>
								</div>
							</Link>
						</li>

						<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium   active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/dashboard/collections">Collections</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/dashboard/men">Men</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/dashboard/women">Women</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<a
								className=" duration-1000 "
								onClick={handleAbout}
								href="#about">
								About
							</a>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2   hover:text-orange-500 hover:font-medium transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<a
								className=" duration-1000 "
								onClick={handleContact}
								href="#contact">
								Contact
							</a>
						</li>
					</ul>

					<div className=" flex sm:hidden ">
						<h2
							onClick={() => nav("/dashboard")}
							className="flex items-center  gap-1 text-orange-500 text-xl font-bold">
							NIKEE
							<img
								className="w-9"
								src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
								alt=""
							/>
						</h2>
					</div>

					{toggle && (
						<div className="fixed  duration-700   animate__animated  animate__bounceInLeft  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-64 dark:bg-gray-800">
							<h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
								Menu
							</h5>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
								<svg
									className="w-3 h-3"
									onClick={handelCloseMenu}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
							</button>
							<div className="py-4 overflow-y-auto">
								<ul className="space-y-2 font-medium">
									<li>
										<a
											onClick={handleDashboard}
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 22 21">
												<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
												<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
											</svg>
											<span className="ms-3">Dashboard</span>
										</a>
									</li>
									<li>
										<a
											onClick={handleCollections}
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
												<path
													fillRule="evenodd"
													d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
													clipRule="evenodd"
												/>
											</svg>

											<span className="flex-1 ms-3 whitespace-nowrap">
												Collections
											</span>
										</a>
									</li>

									<li>
										<a
											onClick={handleMen}
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 18">
												<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">Men</span>
										</a>
									</li>
									<li>
										<a
											onClick={handleWomen}
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 18">
												<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">
												Women
											</span>
										</a>
									</li>

									<li>
										<a
											onClick={handleLogout}
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 16">
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
												/>
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">
												Sign Out
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					)}

					<div className=" flex   sm:gap-4 select-none items-center ">
						<form
							onSubmit={handleSubmit}
							action="
						">
							<div
								className="sm:flex hidden border-slate-200 sm:border border-b  px-2   items-center  
						 rounded-md  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 m-0  h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>

								<input
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									className="w-[40px] sm:w-[90px] text-sm tracking-wide bg-transparent  border-0 focus:ring-0  text-md  "
									type="text"
									name="email"
								/>
							</div>
						</form>
						<div className="flex items-center gap-3">
							<div className="relative flex items-center gap-3 sm:gap-0 duration-500 active:scale-90 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									onClick={click}
									strokeWidth={1.5}
									stroke="currentColor"
									className=" w-7 h-7">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
									/>
								</svg>

								<span className="w-4 absolute top-0 -end-1  h-4   text-center mx-auto text-xs font-semibold text-white bg-orange-500 rounded-full ">
									{cart.length}
								</span>
							</div>
							<div className="flex sm:hidden text-center">
								<button
									className=" text-xl  flex  tracking-wide items-center gap-1 font-bold "
									type="button"
									data-drawer-target="drawer-navigation"
									data-drawer-show="drawer-navigation"
									aria-controls="drawer-navigation">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										onClick={toggleMenu}
										className="w-7 h-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</button>
							</div>
						</div>

						<button
							id="dropdownInformationButton"
							data-dropdown-toggle="dropdownInformation"
							className="text-white hidden bg-gray-400  hover:bg-gray-500  focus:outline-none font-medium rounded-md text-sm px-4  py-2 text-center sm:inline-flex items-center "
							type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="   sm:w-6 sm:h-6 w-5 h-5 ">
								<path
									fillRule="evenodd"
									d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>

						<div
							id="dropdownInformation"
							className="z-10 hidden  divide-y divide-gray-200  font-medium  rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
							<div className="px-4 py-3 text-sm text-gray-900 dark:text-white"></div>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownInformationButton">
								<li
									onClick={handleDashboard}
									className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
									Dashboard
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
										Settings
									</a>
								</li>
							</ul>
							<div className="py-2  hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-between">
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:text-white">
									Sign out
								</a>

								<svg
									onClick={handleLogout}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 me-2 active:scale-95 ">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default NavComponent;

// {
// 	/* <div className="py-2 flex items-center justify-between">
// 						<a
// 							href="#"
// 							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
// 							Sign out
// 						</a>

// 						<svg
// 							onClick={handleLogout}
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className="w-5 h-5 me-2">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
// 							/>
// 						</svg>

// 					</div> */
// }
