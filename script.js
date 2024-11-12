function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;
}

document.getElementById('orderButton').addEventListener('click', function(){
    const selecteditems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            selecteditems.push(checkbox.value);
        }
    });

    if(selecteditems.length === 0){
        alert("Please select atleast one item");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;

    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');

    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, getRandomTime())
    });

    promise.then(function(){
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

        switch(foodToShow){
            case 'Burger':
                foodImage.src= 'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947731e984753a943e3068_Double%20Whopper.png'
                break;
            case 'Fries':
                foodImage.src = 'https://images.openfoodfacts.org/images/products/200/000/012/9217/front_en.3.full.jpg'
                break;
            case 'Drink':
                foodImage.src = 'https://burgerking.com.my/upload/image/Product/140/lime%20fizz.png'
                break;
            default:
                foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }

        foodImage.style.display = 'block';
        orderButton.disabled = false;
    });
});