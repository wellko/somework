import React from "react";

export interface Movie {
	id: string;
	name: string;
	index?: number;
}

export interface MovieForList {
	id: string;
	name: string;
	index?: number;
	inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface Joke {
	categories:[];
	created_at: string;
	icon_url:string;
	id:string;
	updated_at:string;
	url:string;
	value:string;
}