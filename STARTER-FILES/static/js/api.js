import { mostrarHTML } from "./html.js"

export async  function conection(city){
    // const API = 'http://api.weatherstack.com/current?access_key=c42df8df799b1f4740b2055d2396b44a&query='
    // const url = API + city
    // console.log(url)
    // const res = await  fetch(url) // obtiene la respuesta
    // const data = await res.json() // convierte la respuesta en json

    let data={
        "request": {
          "type": "City",
          "query": "Cajamarca, Peru",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Cajamarca",
          "country": "Peru",
          "region": "Cajamarca",
          "lat": "-7.167",
          "lon": "-78.517",
          "timezone_id": "America/Lima",
          "localtime": "2022-12-10 20:54",
          "localtime_epoch": 1670705640,
          "utc_offset": "-5.0"
        },
        "current": {
          "observation_time": "01:54 AM",
          "temperature": 7,
          "weather_code": 353,
          "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
          ],
          "weather_descriptions": [
            "Light rain shower"
          ],
          "wind_speed": 5,
          "wind_degree": 115,
          "wind_dir": "ESE",
          "pressure": 1017,
          "precip": 0.3,
          "humidity": 94,
          "cloudcover": 60,
          "feelslike": 6,
          "uv_index": 1,
          "visibility": 10,
          "is_day": "no"
        }
      }

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






