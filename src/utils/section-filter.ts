type ProductType = {
	id: 1;
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
		records: {
			title: 'Records',
			data: products?.filter((item) => item.section === 'record'),
		},
		prints: {
			title: 'Prints',
			data: products?.filter((item) => item.section === 'print'),
		},
		book: {
			title: 'Books',
			data: products?.filter((item) => item.section === 'book'),
		},
		etc: {
			title: 'ETC',
			data: products?.filter((item) => item.section === 'etc'),
		},
	};
}