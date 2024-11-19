import "./listItem.css";
const ListItem = ({ image, price, rating, category }) => {
  return (
    <div className="card shadow">
      <img src={image} width="250px" />
      <p>{category}</p>
      <p>
        ${price} <br></br> {rating.rate}
      </p>
    </div>
  );
};
export default ListItem;
