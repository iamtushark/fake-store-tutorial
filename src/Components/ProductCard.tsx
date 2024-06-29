import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CommonTypography from './common/CommonTypography';
import ProductCardInterface, {ProductCardProps} from '../Interfaces/ProductCardInterface';
import { useState } from 'react';
import { useCartDispatch } from '../Contexts/CartContext/CartContext';


export default function ProductCard({ description, image, price, title, id, isInCart }: ProductCardProps) {
	const [inCart, setInCart] = useState<boolean>(isInCart);
	const cartDispatch = useCartDispatch();

	const toggleCart = () => {
		if (inCart) {
			cartDispatch && cartDispatch({ type: 'removed', id });
		} else {
			cartDispatch && cartDispatch({ type: 'added', item: { id, title, description, image, price } });
		}
		setInCart(!inCart);
	};

	return (
		<Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
			<CardMedia
				component="img"
				image={image}
				sx={{ height: 150, width: 150, marginRight: 2 }}
				alt={title}
				title={title}
			/>
			<div style={{ flexGrow: 1 }}>
				<CardContent sx={{ padding: 0 }}>
					<CommonTypography variant="h5">
						{title.length > 35 ? `${title.slice(0, 35)}...` : title}
					</CommonTypography>
					<CommonTypography variant="h6">${price}</CommonTypography>
					<CommonTypography variant="body2">
						{description.length > 90 ? `${description.slice(0, 90)}...` : description}
					</CommonTypography>
				</CardContent>
				<CardActions sx={{ padding: 0, justifyContent: 'flex-end' }}>
					<Button size="small" color="secondary" onClick={toggleCart}>
					{inCart ? 'Remove from Cart' : 'Add to Cart'}
					</Button>
				</CardActions>
			</div>
		</Card>
	);
}
