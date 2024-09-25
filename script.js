document.querySelector('#search').addEventListener('click',function(){
    let departure = document.querySelector('#departure').value;
    let arrival = document.querySelector('#arrival').value;
    let date = document.querySelector('#date').value;
    document.querySelector('#resultat').innerHTML = '';
       fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then( response => response.json())
        .then(data =>{
            console.log(data.data);
            if(data.data){
                document.querySelector('#resultat').innerHTML = ' <img id="train" src="./images/notfound.png" />'
                '<div class="bordure" id="btrain"></div><p>No trip found</p>'
            }
        else{
             for(let elem of array)
         elem =  fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}/${price}`),
        document.querySelector('#resultat').innerHTML += `<p>${departure} ${arrival} ${date} ${price}</p><p>Book</p>`
        
         }
         })
   
})
