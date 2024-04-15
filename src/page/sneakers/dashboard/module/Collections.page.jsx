/** @format */

import React from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";

import { useContext } from "react";
import {
	CollectionLoadingComponent,
	ProductsComponent,
} from "../../../../components";

const CollectionsPage = () => {
	const { data, loading, error, hiddenIcon } = useContext(SneakerContext);

	const collection = Array.from({ length: 12 }, (_, index) => index);
	


	return (
		<div className=" ">
			{loading ? (
				<div className="flex mx-auto  flex-wrap justify-center items-center align-middle gap-8  my-3">
					{collection.map((item) => (
						<CollectionLoadingComponent key={item} />
					))}
				</div>
			) : (
				<div className="flex my-3 flex-wrap gap-8 text-center justify-center ">
					{data?.map((item) => (
						<ProductsComponent item={item} key={item.id} />
					))}
				</div>
		)}
		</div>
	);
};

export default CollectionsPage;
