document.querySelector('#search').addEventListener('click',function(){
    let departure = document.querySelector('#departure').value;
    let arrival = document.querySelector('#arrival').value;
    let date = document.querySelector('#date').value;
    let price = document.querySelector('#')
    document.querySelector('#resultat').innerHTML = '';
       fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then( response => response.json())
        .then(data =>{
            document.querySelector('#resultat').innerHTML += 
            if (document.querySelector('#recherche') = ''){
                document.querySelector('#recherche').innerHTML = ' <img id="train" src="./images/train.png" />'
                '<div class="bordure" id="btrain"></div><p>No trip found</p>'
            }else{
            for(let elem of array)
        elem = [departure, arrival, ]
        }
        })
   
})