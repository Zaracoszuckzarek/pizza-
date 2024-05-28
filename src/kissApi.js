export async function getCurrentPizzasInfo(){
    const response = await fetch("/api/pizzas")
    if(!response.ok){
        throw{
            message:"We are baking new nice Pizzas for use.Please try later"
        }
    }
    const data = await response.json()
    return data.pizzas
}