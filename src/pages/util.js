import { redirect } from "react-router-dom"

export async function requiredAuth(){
    const isLoggedIn = true
    if(!isLoggedIn){
        redirect("/login")
    }
    return null
    
}