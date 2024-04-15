/** @format */

import React, { createContext, useState } from "react";
import useFetch from "../../hook/useFetch";
import { sneakerDataService } from "../sneakerdata.service.js";

export const SneakerContext = createContext();

const SneakerContextProvider = ({ children }) => {
	const { data, loading, error } = useFetch(sneakerDataService, "sneakers");

	const [cart, setCart] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [filterCart, setFilterCart] = useState([]);
	const [aboutToggle, setaboutToggle] = useState(false);
	const [contactToggle, setContactToggle] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [hiddenIcon, SetHiddenIcon] = useState(false);
	const [isChecked, setChecked] = useState(false);

	const toggleDelete = (id) => {
		setCart(cart.filter((item) => item.id != id));
	};

	const handleSearch = (query) => {
		const filtered = data.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredProducts(filtered);
	};

	const handleCheckBox = () => {
		setChecked(!isChecked);
	};

	const toggleAddRemove = (addItemid, addQ) => {
		setCart(
			cart.map((el) => {
				if (el.id == addItemid) {
					const newQuantity = el.quantity + addQ;
					const newPrice = el.price * newQuantity;
					const newDiscount = el.discount * newQuantity;

					return {
						...el,
						quantity: newQuantity,
						price: newPrice,
						discount: newDiscount,
					};
				}
				return el;
			})
		);
	};

	const toggleRemove = (removeItemid, removeQ) => {
		setCart(
			cart.map((el) => {
				if (el.id == removeItemid) {
					const newQuantity = el.quantity - removeQ;

					const removePrice = el.price / el.quantity;
					const newDiscount = el.discount / el.quantity;

					return {
						...el,
						quantity: newQuantity,
						price: removePrice,
						discount: newDiscount,
					};
				}
				return el;
			})
		);
	};

	const addCart = (newCart) => {
		setCart([...cart, newCart]);
	};
	return (
		<div>
			<SneakerContext.Provider
				value={{
					setDisabled,
					setContactToggle,
					contactToggle,
					filterCart,
					setFilterCart,
					setToggle,
					toggle,
					handleSearch,
					disabled,
					hiddenIcon,
					setChecked,
					data,
					loading,
					error,
					SetHiddenIcon,
					isChecked,
					toggleRemove,
					setCart,
					handleCheckBox,
					addCart,
					cart,
					toggleDelete,
					toggleAddRemove,
					setaboutToggle,
					aboutToggle,
				}}>
				{children}
			</SneakerContext.Provider>
		</div>
	);
};

export default SneakerContextProvider;
