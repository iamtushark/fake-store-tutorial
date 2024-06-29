import React, { useEffect, useState } from 'react';
import getProducts from './utils/getProducts';
import ProductCardInterface from '../../Interfaces/ProductCardInterface';
import ProductCard from '../../Components/ProductCard';
import CommonCircularProgress from '../../Components/common/commonCircularProgress';
import { useCart } from '../../Contexts/CartContext/CartContext';


const Products: React.FC = () => {
	const [products, setProducts] = useState<ProductCardInterface[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const cart = useCart();
	console.log(cart)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProducts();
				setProducts(data);
				setError(null)
			} catch (error) {
				setError('Failed to fetch products');
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return <CommonCircularProgress />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			{products.map((product) => {
			const isInCart = !!cart && !!cart[product.id];
        return <ProductCard key={product.id} {...product} isInCart={isInCart} />;
      })}
		</div>
	);
};

export default Products;
