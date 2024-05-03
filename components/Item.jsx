import "./Item.css";

export default function Item({ item }) {
  return (
    <li key={item.item_id} className="itemBox">
      <h2>{item.item_name}</h2>
      <p>£{item.price / 100}</p>
      <img src={item.img_url} />
      <div>
        <button>Add to basket</button>
        <button>More info</button>
      </div>
    </li>
  );
}
