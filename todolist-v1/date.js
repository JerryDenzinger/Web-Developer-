

// Aqui se usa la version corta con una funcion anonima y sin utilizar el modules. sino directamente exports 
exports.getDate = function (){ 
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}


module.exports.getDay = getDay;
function getDay() {
    const today = new Date();
    const options = {
        weekday: "long",
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}

