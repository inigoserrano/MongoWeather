db.weather.find().forEach(function(doc) { 
    var fecha = doc.Time.split(" ");
    var dia = fecha[0].split("-")[0];
    var mes = fecha[0].split("-")[1];
    var anio = fecha[0].split("-")[2];
    var hora = fecha[1].split(":")[0];
    var minuto = fecha[1].split(":")[1];
    doc.Time = new ISODate(anio+"-"+mes+"-"+dia+"T"+fecha[1]+":00.000Z");
    db.weather.save(doc); 
    })