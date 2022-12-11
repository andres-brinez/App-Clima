// obtiene la fecha actual


// muestra la información en html
export function mostrarHTML(datos){
    const dayInfo=dia()

    // campos del dia
    const day=  document.getElementById('day')
    day.textContent= dayInfo[0]

    const dayweek=document.getElementById('dayweek')
    dayweek.textContent= dayInfo[1]

    document.getElementById('img-wheater').setAttribute('src',datos['img'])
    document.getElementById('description').textContent=datos['descripcion']
    document.getElementById('temp').textContent=datos['temperatura']+'°'
    document.getElementById('p-humidity').textContent=datos['humedad']+'°'
    document.getElementById('p-wind-speed').textContent=datos['viento']


}


function dia(){
    const date = new Date()
    const day = date.getDay() // devuelve un numero que indica la posición del dia en el dayweek
    const dayNum= date.getDate() // obtiene el dia actual en  numeor
    const dayweek = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    let dia = [dayNum,dayweek[day]]
    return dia
}