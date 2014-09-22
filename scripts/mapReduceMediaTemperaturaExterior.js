db.weather.mapReduce(
function(){ 
    emit(this.Time.split(" ")[0],this.Outdoor_Temperature)
    },
function(key, values){ 
    return Array.sum(values)/values.length
    },
{ out: "mediaTemperaturaExterior"})

