function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    var arrTime = time.split(":");
    if (arrTime.length < 3 || time === "" ){
        return false;
    }
    if (Number(arrTime[0]) > 23 || Number(arrTime[1]) > 59 || Number(arrTime[2].slice(0,2)) > 59 )  {
        return false;
    } 
    if (Number(arrTime[0]) === 12 && arrTime[2].includes("PM")) {
        return arrTime[0] + ":" + arrTime[1] + ":" + arrTime[2].slice(0, 2)
    }
    if (Number(arrTime[0]) === 12 && arrTime[2].includes("AM")) {
        return "00" + ":" + arrTime[1] + ":" + arrTime[2].slice(0, 2)
    }
    if (arrTime[0] != 12 && arrTime[2].includes("AM")) {
        return arrTime[0] + ":" + arrTime[1] + ":" + arrTime[2].slice(0, 2)
    }
    if (arrTime[0] != 12 && arrTime[2].includes("PM")) {
       // var hours = Number(arrTime[0]) + 12
        return  String(Number(arrTime[0]) + 12)+ ":" + arrTime[1] + ":" + arrTime[2].slice(0, 2)
    }}
/*if (time.length < 10 || time === "") {
    return false;
}
let [hours, minutes, seconds ] = time.split(":")
let ampm= seconds[2] + seconds[3]
console.log (seconds[2])
seconds= seconds[0] + seconds[1]

if (Number(hours) > 23 || Number(minutes) > 59 || Number(seconds) > 59) {
    return false;
}

if (ampm ==="AM"){
    hours = hours === "12" ? "00" : hours;
} else { hours = hours === "12" ? hours : parseInt(hours) + 12 };
return `${hours}:${minutes}:${seconds}`
}*/



module.exports = {
    timeConversion
}
