// console.log('update code');

function setBackgroundColorById(elementId) {
  const element = document.getElementsByClassName(elementId);
  element.classList.add('bg-[#1DD100]');
}

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

function showElementById(elementId) {
  if (count === 4) {
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
  }
}

// for coupon input, apply btn,
function grandTotalPrice() {
  console.log('apply btn connect');
  const inputValue = document.getElementById('couppon_input_fild');
  const inputStr = inputValue.value;

  // console.log(inputStr);

  if (inputStr === 'NEW 15') {
    console.log('15%');
    hideElementById('hide-input-class');
    //************ */
    const grandTotalCost = document.getElementById('total_price').innerText;
    const convertGrandTotalCost = parseInt(grandTotalCost);
    console.log(convertGrandTotalCost);
    let discountPrice =
      convertGrandTotalCost - convertGrandTotalCost * (15 / 100);

    setInnerText('grand_total_price', discountPrice);
  } else if (inputStr === 'couple 20') {
    console.log('20%');
    hideElementById('hide-input-class');
    //************ */
    const grandTotalCost = document.getElementById('total_price').innerText;
    const convertGrandTotalCost = parseInt(grandTotalCost);
    console.log(convertGrandTotalCost);
    let discountPrice =
      convertGrandTotalCost - convertGrandTotalCost * (20 / 100);

    setInnerText('grand_total_price', discountPrice);
  }
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  const hide = element.classList.add('hidden');
}
// https://www.jschallenger.com/games/rush/
