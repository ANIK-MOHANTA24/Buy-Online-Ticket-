// console.log('update code');

//for innerText seat
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);

  setInnerText(id, sum);
}

// function grandTotalPrice() {
//   const totalPrice = document.getElementById('total_price').innerText;
//   const convertTotalPrice = parseInt(totalPrice);
//   const convertTotalPrice = parseInt(totalPrice);
//   setInnerText('grand_total_price', convertTotalPrice);
// }

function showElementById(elementId) {
  if (count == 4) {
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
  }
}
