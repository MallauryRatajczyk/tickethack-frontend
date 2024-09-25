function sum(obj) {
    let somme = 0;
    for (let elem of obj.cart) {
        somme += elem.price
    }
    return somme;
}


let id = "66f2daa2d24cc1fa339458a8";
fetch(`http://localhost:3000/users/${id}/`).then(response => response.json())
    .then(data => {
        let panier = data.data.cart;
        if (panier) {
            document.getElementById('carts').innerHTML = "<h3>My cart</h3>"
            for (let elem of panier) {
                document.getElementById('carts').innerHTML += `
                            <div class="trajetscart">
                            ${elem.departure}>${elem.arrival}
                            ${elem.date} 
                            ${elem.price}
                            <button id="${id} class="supprimerTrajet">X</button>

                            </div>`
            }
            document.querySelector('#ensemble').innerHTML += `<div id="PurchaseArea">Total : ${sum(data.data)} euros
            <button id="Purchase">Purchase</button>
            </div>`
        }
        Purchase()
    })


function Purchase() {
    let PurchaseButton = document.querySelector("#Purchase");
    PurchaseButton.addEventListener('click', function () {
        let id = "66f2daa2d24cc1fa339458a8";
        fetch(`http://localhost:3000/users/cart/${id}`)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                for (let elem of data) {
                    let trips = elem.cart;
                    console.log(trips)
                    fetch(`http://localhost:3000/users/booking/${id}/${elem._id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(response => response.json())
                }
            }).finally(document.location.href = "bookings.html")
    })
}

