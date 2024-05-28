import "./kiss.css";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getCurrentPizzasInfo } from "../kissApi";

export function loader() {
  return getCurrentPizzasInfo();
}

const Kiss = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countryFilter = searchParams.get("country");
  const kissPizzas = useLoaderData();

  const displayKissPizzas = countryFilter
    ? kissPizzas.filter(
        (currentPizza) => currentPizza.country === countryFilter
      )
    : kissPizzas;

  const KissPizza = displayKissPizzas.map((items) => {
    return (
      <div key={items.id} className="pizza--start-list">
        <Link to={items.id}>
          <img src={items.img} alt={name} />
          <div className="pizzas--info">
            <h4>{items.name}</h4>
            <h5>{items.price}.00</h5>
            <p>{items.country}</p>
          </div>
        </Link>
      </div>
    );
  });

  function handlecountryFilter(key, value) {
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
      <span>filter by country: </span>
      <div className="filtersButtons">
        {countryFilter ? (
          <button onClick={() => handlecountryFilter("country", null)}>
            &larr;Clear Filter
          </button>
        ) : null}

        <button onClick={() => handlecountryFilter("country", "Argentina")}>
          Argentina
        </button>
        <button onClick={() => handlecountryFilter("country", "Brazil")}>
          Brazil
        </button>
        <button onClick={() => handlecountryFilter("country", "Cuba")}>
          Cuba
        </button>
        <button onClick={() => handlecountryFilter("country", "Italy")}>
          Italy
        </button>
        <button onClick={() => handlecountryFilter("country", "Mexico")}>
          Mexico
        </button>
        <button onClick={() => handlecountryFilter("country", "Russia")}>
          Russia
        </button>
        <button onClick={() => handlecountryFilter("country", "USA")}>
          USA
        </button>
      </div>
      <div className="pizzas-list-arrangement">{KissPizza}</div>
    </div>
  );
};

export default Kiss;
