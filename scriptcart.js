function sum(obj) {
    let somme = 0;
    for (let elem of obj.cart) {
        somme += elem.price
        console.log(somme)
    }
    return somme;
}

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

function Purchase() {
    let allDeleteButton = document.querySelectorAll(".bookbutton");
    for (let elem of allDeleteButton) {
        console.log("dans le for", elem);
        elem.addEventListener('click', function () {
            let id = "66f2daa2d24cc1fa339458a8";
            let trips = this.id;
            console.log("bouton appuye")
            fetch(`http://localhost:3000/users/cart/${id}/${trips}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    document.location.href = "cart.html";
                })
        })
    }
}


let id = "66f2daa2d24cc1fa339458a8";
fetch(`http://localhost:3000/users/${id}/`).then(response => response.json())
    .then(data => {
        console.log(data)
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
            document.getElementById('carts').innerHTML += `<div id="PurchaseArea">Total : ${sum(data.data)} euros
            <button id="Purchase">Purchase</button>
            </div>`
        }
        deleteTrajetCart()
    })


