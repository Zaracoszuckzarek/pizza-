import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getPizzasData } from "../api";
import { requiredAuth } from "./util";
import "./pizzas.css";

export async function loader() {
  await requiredAuth();
  return getPizzasData();
}

const Pizza = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countryFilter = searchParams.get("country");

  const pizzas = useLoaderData();

  const displayPizzas = countryFilter
    ? pizzas.filter((pizza) => pizza.country === countryFilter)
    : pizzas;

  const pizzaList = displayPizzas.map((pizza) => {
    return (
      <div key={pizza.id} className="pizza--start-list">
        <Link to={pizza.id}>
          <img src={pizza.img} alt={name} />
          <div className="pizzas--info">
            <h5>{pizza.name}</h5>
            <h5>$ {pizza.price}.00</h5>
            <p>{pizza.country}</p>
          </div>
        </Link>
      </div>
    );
  });

  function handleCountryFilter(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="pizzaList">
      <span>Filter By Countries:</span>

      <div className="pizzas-search-buttons">
        {countryFilter ? (
          <button onClick={() => handleCountryFilter("country", null)}>
            &larr;Clear filter
          </button>
        ) : null}
        <button onClick={() => handleCountryFilter("country", "USA")}>
          USA
        </button>
        <button onClick={() => handleCountryFilter("country", "Argentina")}>
          Argentina
        </button>
        <button onClick={() => handleCountryFilter("country", "Italy")}>
          Italy
        </button>
        <button onClick={() => handleCountryFilter("country", "Cuba")}>
          Cuba
        </button>
        <button onClick={() => handleCountryFilter("country", "Mexico")}>
          Mexico
        </button>
        <button onClick={() => handleCountryFilter("country", "Brazil")}>
          Brazil
        </button>
        <button onClick={() => handleCountryFilter("country", "Russia")}>
          Russia
        </button>
      </div>

      <div className="pizzas-list-arrangement">{pizzaList}</div>
    </div>
  );
};

export default Pizza;


