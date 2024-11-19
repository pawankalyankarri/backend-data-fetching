import "./listItem.css";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const App = () => {
  let [list, setList] = useState([]);
  function fetchItem() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setList(json));
  }
  useEffect(() => {
    fetchItem();
  }, []);
  let retriveItem =
    list.length > 0 ? (
      list.map((item) => <ListItem key={item.id} {...item} />)
    ) : (
      <div className="col-12">
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    );

  return (
    <>
      <h1 className="text-center">Products List</h1>
    <div className="container mt-5">
    
      {retriveItem}
    </div>
    </>
  );
};
export default App;
