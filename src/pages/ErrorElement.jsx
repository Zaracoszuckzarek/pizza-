import "./errorElement.css"
import { Link } from "react-router-dom"

const ErrorElement = () => {

  return (
    <div className="errContainer">
        <h4 className="errorMessage">Hello user!! We are working on the pizzas for all. Please try in a moment or two</h4>
        <Link to="/" className="errorLink">Return Home</Link>
    </div>
  )
}

export default ErrorElement