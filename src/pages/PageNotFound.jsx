import { Link } from "react-router-dom";
import "./pageNotFound.css";

const pageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h4> Sorry the page you are looking for not found</h4>
      <Link to="/">
        <button>back to home</button>
      </Link>
    </div>
  );
};

export default pageNotFound;
