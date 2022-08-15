

console.log("hiii");
function getFavs()
{
    let favList = [];
    const inputs = document.querySelectorAll('input');

    for (const input of inputs)
    {
        if(input.checked == true)
        {
            favList.push(input.parentNode.textContent);
            
        }
        
    }
    document.querySelector('.favorites').textContent = favList.join(' ');
}
   let button = document.querySelector('button');
   button.addEventListener('click',getFavs);



console.log("exit");
/*
<!DOCTYPE html>
<html lang="en-US">

<body>

    <link rel="stylesheet" href="index.css">


    <label><input type="checkbox" />Ice cream</label>
<label><input type="checkbox" />Pizza</label>
<label><input type="checkbox" />Tacos</label>
<label><input type="checkbox" />Meatloaf</label>

<label><input type="checkbox" />Brocolli</label>

<button>Display Your Favorites</button>

<div class="favorites"></div>
<script src="result.js" async></script>

</body>
      </html>
      */