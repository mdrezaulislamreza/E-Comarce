


let selectItem = document.getElementById('select-items');
let cuponFild = document.getElementById('cupon-input-filed');
let totalPrice = document.getElementById('select-price');
let hendelCupon = document.getElementById('hendel-cupon');
let bayNowButton = document.getElementById('bay-now');
let discountFiled = document.getElementById('discount-filed');
let finalTotalPrice = document.getElementById('final-result');
let sum = 0;

function addToCard(target){
    const getItemName = target.childNodes[3].childNodes[11].innerText;
    const getNumber = target.childNodes[3].childNodes[13].innerText;
    let getPriceNumber = parseFloat(getNumber);
    // console.log(getNumber)
    let li = document.createElement('li');
    li.innerText = getItemName;
    selectItem.appendChild(li);
    sum = sum + getPriceNumber;
    totalPrice.innerText = sum.toFixed(2);

    if(sum>=200){
        cuponFild.removeAttribute('disabled');
        hendelCupon.removeAttribute('disabled');
    }
    if(sum>=0){
        bayNowButton.removeAttribute('disabled')
   
    }
 
}
function applyCupon(){

    const provwsString = totalPrice.innerText;
    const provwsNumber = parseFloat(provwsString);
   
    if(cuponFild.value.toUpperCase()==="SELL200"){
        function discountPrice(totalPrice){
            return(provwsNumber*20)/100;
        }
        // console.log('Rezaul Islam');
    }
     else{
        alert('Don`t Mach Copun Code')
     }

     const totalDiscountPrice = discountPrice(provwsNumber);
     discountFiled.innerText = totalDiscountPrice.toFixed(2);
     const finalTotal = provwsNumber - totalDiscountPrice;
     finalTotalPrice.innerText = finalTotal;
    //  console.log(finalTotal)
}

