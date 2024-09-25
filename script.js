document.querySelector('#search').addEventListener('click', function () {
    let departure = document.querySelector('#departure').value;
    let arrival = document.querySelector('#arrival').value;
    let date = document.querySelector('#date').value;
    document.querySelector('#resultat').innerHTML = '';
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            if (!data.data) {
                document.querySelector('#resultat').innerHTML = `<img id="train" src="./images/notfound.png" />
                <div class="bordure" id="btrain"></div><p>No trip found</p>`
            } else {
                for (let elem of data.data) {
                    let date = new Date(elem.date)  
                    console.log(date);
                    date = `${date.getHours()}:${date.getMinutes()}`
                    console.log(date);
                    document.querySelector('#resultat').innerHTML += `<div class="elemResultat">${elem.departure} > ${elem.arrival}  ${date}  ${elem.price}€  
                    <button id=${elem._id} class="bookbutton">Book</button>
                    </div>`
                }

            }
        })
})

document.querySelector(".bookbutton").addEventListener('click', function () {
    let id = "66f2daa2d24cc1fa339458a8";
    let trips = "66f28cfc1d7d9baab4f02281";
    fetch(`http://localhost:3000/users/cart/${id}/${trips}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            document.location.href = "cart.html";
            fetch(`http://localhost:3000/users/${id}/`).then(response => response.json())
                .then(data => {
                    let panier = data.cart;
                    if (panier) {
                        document.getElementById('carts').innerHTML = ""
                        for (let elem of panier) {
                            document.getElementById('carts').innerHTML = `<h3>My cart</h3>
                            <div class="trajetscart">
                            ${elem.departure}>${elem.arrival}
                            ${elem.date} 
                            ${elem.price}
                            <button id="${id} class="supprimerTrajet">X</button>
                            </div>`
                        }
                    }

                })
            deleteTrajetCart()
        })
})


function deleteTrajetCart() {
    for (let i = 0; i < document.querySelectorAll('.supprimerTrajet').length; i++) {
        document.querySelectorAll('.supprimerTrajet')[i].addEventListener('click', function () {
            fetch(`http://localhost:3000/users/cart/${this.id}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(data => {
                    this.parentNode.remove();
                });
        })
    }
}

