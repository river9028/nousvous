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

export default function sectionFilter(products: ProductType[]) {
	return {
		book: {
			title: 'Books',
			data: products?.filter((item) => item.section === 'book'),
		},
		print: {
			title: 'Prints',
			data: products?.filter((item) => item.section === 'print'),
		},
		record: {
			title: 'Records',
			data: products?.filter((item) => item.section === 'record'),
		},
		etc: {
			title: 'ETC',
			data: products?.filter((item) => item.section === 'etc'),
		},
	};
}