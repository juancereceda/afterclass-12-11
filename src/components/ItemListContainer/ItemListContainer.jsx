import Item from "../Item/Item";
import "./ItemListContainer.css";
import { items } from "../../data/productos";

export function ItemListContainer({ greeting }) {
	return (
		<div className="item-list-container">
			<h1>{greeting}</h1>
			{items.map((item) => (
				<Item name={item.name} price={item.price} imgUrl={item.imgUrl} />
			))}
		</div>
	);
}

export default ItemListContainer;
