/** @format */

import React, { useContext, useEffect, useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import {
	useNavigate,
	useLocation,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
import { toast } from "sonner";

import { SneakerContext } from "../service/store/SneakerContextProvider";
import { useLogoutMutation } from "../service/endpoints/AuthEndpoints";
import FavouriteComponent from "./Favourite.component";
import { FaTruckMedical } from "react-icons/fa6";
import AddtoCartPage from "../page/sneakers/dashboard/module/AddtoCart.page";

const NavComponent = () => {
	const [RemoveFun, RemoveData] = useLogoutMutation();
	const {
		data,
		cart,
		hiddenIcon,
		filterCart,
		setFilterCart,
		setToggle,
		SetHiddenIcon,
		aboutToggle,
		cartToggle,
		setCartToggle,
		setaboutToggle,
		setContactToggle,
		contactToggle,
	} = useContext(SneakerContext);

	const [favToggle, setFavToggle] = useState(false);

	console.log(cartToggle);

	const [toggle, settoggle] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	const { fav } = useContext(SneakerContext);

	const handleAbout = () => {
		setaboutToggle(!aboutToggle);
	};

	const handleCart = () => {
		setCartToggle(true);
	};

	const handleContact = () => {
		setContactToggle(!contactToggle);
	};

	const nav = useNavigate();

	const toggleMenu = () => {
		settoggle(!toggle);
	};

	const [search, setSearch] = useState("");

	const handleFav = () => {
		setFavToggle(true);
	};

	const handleDashboard = () => {
		nav("/dashboard");
	};

	const handleCollections = () => {
		nav("/dashboard/collections");
	};

	const handleMen = () => {
		nav("/dashboard/men");
	};

	const handleWomen = () => {
		nav("/dashboard/women");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const filtered = data?.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilterCart(filtered);

		nav(`/dashboard/search/${search}`);
	};

	const handleLogout = async () => {
		await RemoveFun();
		localStorage.removeItem("token");
		nav("/");
		toast.success("Logout Successfully");
	};

	const handleAddToCart = () => {
		SetHiddenIcon(true);
		nav("/addtocart");
	};

	const handelCloseMenu = () => {
		nav(-1);
		settoggle(!toggle);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToSection = (id, route) => {
		const element = document.getElementById(id);
		nav(route);

		if (element) {
			settoggle(false);
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToAbout = (id) => {
		const element = document.getElementById(id);

		if (element) {
			settoggle(false);
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div>
			<div className=" w-[95%]   sm:w-[85%]    mx-auto  ">
				<Sheet>
					{favToggle && (
						<SheetContent>
							<SheetHeader>
								<SheetTitle>
									Favourite List{" "}
									<span className="text-orange-500 font-medium ">
										{fav?.length}
									</span>{" "}
									Item
								</SheetTitle>
								<SheetDescription>
									You can add wishlist more sneaker
								</SheetDescription>
								<FavouriteComponent />
							</SheetHeader>
						</SheetContent>
					)}

					
						<div
							id="drawer-right-example"
							className={`fixed top-0 right-0 z-40 h-screen ${!cartToggle && "hidden"} p-4 overflow-y-auto transition-transform translate-x-full bg-white  w-96 duration-700 dark:bg-gray-800`}
							tabindex="-1"
							aria-labelledby="drawer-right-label">
							<div className="border-b-gray-300   border-b pb-3 ">
								<div className="flex gap-1   items-center  ">
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
							</div>

							<button
								type="button"
								data-drawer-hide="drawer-right-example"
								aria-controls="drawer-right-example"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close menu</span>
							</button>

							<AddtoCartPage />
						</div>
					

					<div
						className={` border-b  border-b-gray-300  py-4 sm:pt-4 sm:pb-0  flex justify-between items-center   ${
							isFixed &&
							"fixed top-0 left-0   w-full    pe-9   ps-9  sm:pe-28 sm:px-28  mx-auto   bg-gray-50  duration-500      z-30 "
						} `}>
						<ul className=" sm:flex   hidden   items-center gap-6 align-middle">
							<li
								id="logo"
								className="text-xl   select-none tracking-wide  font-bold  text-orange-500">
								<Link to="/dashboard">
									<img
										className="   w-16 h-16"
										src="../../img/logo.png"
										alt=""
									/>
								</Link>
							</li>

							<li className="text-gray-500 tracking-wide select-none active:text-orange-600 hover:text-orange-500 hover:font-medium   active:border-b-2 transition-transform duration-200  active:border-b-orange-500   active:font-bold  ">
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
									onClick={() => scrollToSection("about")}>
									About
								</a>
							</li>

							<li
								onClick={() => scrollToAbout("contact")}
								className="text-gray-500 tracking-wide select-none active:border-b-2   hover:text-orange-500 hover:font-medium transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
								<a
									onClick={() => scrollToSection("contact", "/dashboard")}
									className=" duration-1000 ">
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
												<span className="flex-1 ms-3 whitespace-nowrap">
													Men
												</span>
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
							{/* <form
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
						</form> */}

							{/*Favourite wishlist*/}
							<div className="flex items-center gap-2">
								<SheetTrigger>
									<svg
										onClick={handleFav}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-7 me-5 text-orange-500 active:scale-90 h-7">
										<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
									</svg>
								</SheetTrigger>
								<div className="relative flex items-center select-none gap-3 sm:gap-0 duration-500 ">
									{/*Add to cart*/}
									<button
										onClick={() => setCartToggle(true)}
										type="button"
										data-drawer-target="drawer-right-example"
										data-drawer-show="drawer-right-example"
										data-drawer-placement="right"
										aria-controls="drawer-right-example"
										className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className=" w-7 select-none active:scale-90 h-7">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
											/>
										</svg>
									</button>

									<span className="w-4 absolute top-0 -end-1  h-4  select-none  text-center mx-auto text-xs font-semibold text-white bg-orange-500 rounded-full ">
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
								className=" hidden  focus:outline-none font-medium rounded-md text-sm px-4  py-2 text-center sm:inline-flex items-center "
								type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="sm:w-7 sm:h-7 w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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

								<div
									onClick={handleLogout}
									className="py-2  hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-between">
									<a className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:text-white">
										Sign out
									</a>

									<svg
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
				</Sheet>
			</div>
		</div>
	);
};

export default NavComponent;
