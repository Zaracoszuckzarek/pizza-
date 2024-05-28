
export async function getPizzasData(id){
    const url = id ? `/api/pizzas/${id}` : "/api/pizzas"
    const response = await fetch(url)
    if(!response.ok){
        throw{
            message: "Pizzas are not ready. Please try a bit later"
        }
    }
    const data = await response.json()
    return data.pizzas
}