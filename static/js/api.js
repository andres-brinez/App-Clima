import { mostrarHTML } from "./html.js"

export async  function conection(city){
    const API = 'http://api.weatherstack.com/current?access_key=c42df8df799b1f4740b2055d2396b44a&query='
    const url = API + city
    const res = await  fetch(url) // obtiene la respuesta
    const data = await res.json() // convierte la respuesta en json

    return  data

}

conection('cajamarca').then
    (        
        data => {guardarDatos(data)}
        
    )

 export  function guardarDatos(datos){
    const informacion={
        'ciudad':datos.request.query,
        'temperatura':datos.current.temperature,
        'descripcion':datos.current.weather_descriptions[0],
        'img':datos.current.weather_icons[0],
        'viento':datos.current.wind_speed,
        'humedad':datos.current.humidity,
    }
    mostrarHTML(informacion)
    return informacion
}






