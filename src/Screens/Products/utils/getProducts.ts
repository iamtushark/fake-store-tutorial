import { fetchGet } from "../../../utils/axios-wrapper";
import { BASE_API_URL, PRODUCT_ENDPOINT } from "../../../config";

const getProducts = async () => {
	const url = BASE_API_URL + PRODUCT_ENDPOINT;

	try {
		const response = await fetchGet(url);
		const products = response.map((product: any) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: product.image,
		}));
		return products;
	} catch (error) {
		console.error("Error fetching products", error);
		throw error;
	}
};

export default getProducts;