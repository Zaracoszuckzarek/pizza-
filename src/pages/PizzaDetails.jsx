import "./pizzadetails.css";
import { Link, useLoaderData } from "react-router-dom";
import { getPizzasData } from "../api";
import { requiredAuth } from "./util";

export async function loader({ params }) {
  await requiredAuth();
  return getPizzasData(params.id);
}

const PizzaDetails = () => {
  const pizza = useLoaderData();

  return (
    <div className="pizza-details-card">
      <Link to=".." relative="path">
        &larr; <span>Back to All pizzas</span>
      </Link>
      <img src={pizza.img} alt="large pizza" />
      <div className="details-card-info">
        <h4>Name: {pizza.name}</h4>
        <p>Price: ${pizza.price}.00</p>
        <p>Desc: {pizza.description}</p>
        <p>Country: {pizza.country}</p>
      </div>
      <button className="pizza-details-button">Add to chart</button>
    </div>
  );
};

export default PizzaDetails;


