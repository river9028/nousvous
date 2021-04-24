import React, { createContext } from 'react';
import sectionFilter from '../utils/section-filter';

type ProductsTypes = ReturnType<typeof sectionFilter>;

type ProductType = {
	name: string;
	section: string;
	pname: string;
	price: number;
	'shipping-charge': { UK: number; Europe: number; Worldwide: number };
	description: string;
	'img-url': string;
	stock: number;
};

type PressContext = {
	product?: ProductsTypes,
	products?: ProductsTypes,
	section: "" | "book" | "print" | "record" | "etc" | "info",
	setSection: React.Dispatch<React.SetStateAction<"" | "book" | "print" | "record" | "etc" | "info">>,
	// currentProduct: ProductType | null;
	// setCurrentProduct: React.Dispatch<React.SetStateAction<ProductType | null>>;
};

const PressContext = createContext<PressContext>({
	product: undefined,
	products: undefined,
	section: '',
	setSection: () => null,
	// currentProduct: null,
	// setCurrentProduct: () => null,
});

export default PressContext;
