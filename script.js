document.querySelector('#search').addEventListener('click', function () {
    let departure = document.querySelector('#departure').value;
    let arrival = document.querySelector('#arrival').value;
    let date = document.querySelector('#date').value;
    document.querySelector('#resultat').innerHTML = '';
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then(response => response.json())
        .then(data => {
            if (!data.data) {
                document.querySelector('#resultat').innerHTML = `<img id="train" src="./images/notfound.png" />
                <div class="bordure" id="btrain"></div><p>No trip found</p>`
            } else {
                for (let i = 0; i < 10; i++) {
                    let elem = data.data[i]
                    console.log(elem._id)
                    let date = new Date(elem.date)
                    date = `${date.getHours()}:${date.getMinutes()}`;
                    document.querySelector('#resultat').innerHTML += `<div class="elemResultat">${elem.departure} >${elem.arrival} ${date} ${elem.price}€
                    <button id=${elem._id} class="bookbutton">Book</button>
                    </div>`
                }

            }
        })
        .finally(() => bookTrajet())
});


function bookTrajet() {
    console.log("Inbook traject function")
    let allBookButton = document.querySelectorAll(".bookbutton");
    for (let elem of allBookButton) {
        console.log("dans le for", elem);
        elem.addEventListener('click', function () {
            let id = "66f2daa2d24cc1fa339458a8";
            let trips = this.id;
            console.log("bouton appuye")
            fetch(`http://localhost:3000/users/cart/${id}/${trips}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    document.location.href = "cart.html";
                })
        })
    }
}





