import React from "react";

export interface Movie {
	id: string;
	name: string;
	index?: number;
	inputOnChange?: React.ChangeEventHandler;
}