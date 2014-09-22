db.weather.mapReduce(
function(){ 
    emit(this.Time.split(" ")[0],this.Outdoor_Temperature)
    },
function(key, values){ 
    return Math.max.apply(null,values)
    },
{ out: "maximaTemperaturaExterior"})

