/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Apiservice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://contact.sankyitar.store/api/v1/",

		prepareHeaders: (headers, { getState }) => {
			const token = localStorage.getItem("token");

			if (token) {
				headers.set("authorization", `Bearer ${JSON.parse(token)}`);
			}

			return headers;
		},
	}),

	tagTypes: ["auth"],

	endpoints: (builder) => ({}),
});

export const ContactService = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://project-data-2-j6db.onrender.com/",
	}),

	tagTypes: ["contact"],
	endpoints: (builder) => ({}),
});
