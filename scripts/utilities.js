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

function showElementById(elementId) {
  if (count == 4) {
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
  }
}

// for coupon input, apply btn,
function grandTotalPrice() {
  // console.log('apply btn connect');
  const inputValue = document.getElementById('couppon_input_fild');
  const inputStr = inputValue.value;

  // console.log(inputStr);

  if (inputStr === 'NEW 15') {
    console.log('15%');
    hideElementById('hide-input-class');
  } else if (inputStr === 'couple 20') {
    console.log('20%');
    hideElementById('hide-input-class');
  } else {
  }
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  const hide = element.classList.add('hidden');
}
