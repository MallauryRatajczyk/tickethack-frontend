function timeTrip(date) {
    let newDate = new Date(date);
    console.log(typeof newDate);
    console.log(newDate);
    let dday = new Date();
    let diffdate = newDate - dday;
    diffdate = new Date(diffdate);

    let day = diffdate.getUTCDate()
    let hour = diffdate.getHours()
    let minutes = diffdate.getMinutes()
    if (minutes) {
        if (minutes != 1) {
            minutes = `${minutes} minutes`
        } else {
            minutes = `${minutes} minute`
        }
    }
    if (hour) {
        if (hour != 1) {
            hour = `${hour} heures`
        } else {
            hour = `${hour} heure`
        }
    }
    if (day) {
        if (day != 1) {
            day = `${day} jours`
        } else {
            day = `${day} jour`
        }
    }
    return (`Départ dans ${day}, ${hour} et ${minutes}`);
}



let id = "66f2daa2d24cc1fa339458a8";
fetch(`http://localhost:3000/users/${id}/`).then(response => response.json())
    .then(data => {
        let panier = data.data.booking;
        if (panier) {
            document.getElementById('carts').innerHTML = "<h3>My bookings</h3>"
            for (let elem of panier) {
                document.getElementById('carts').innerHTML += `
                            <div class="trajetscart">
                            ${elem.departure}>${elem.arrival}
                            ${elem.date} 
                            ${elem.price}
                            ${timeTrip(elem.date)}
                            </div>`
            }
        }
    })