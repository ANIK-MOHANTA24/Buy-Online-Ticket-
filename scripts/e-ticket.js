// *********step-1: get a array for all set btn************************
const allSeatButton = document.getElementsByClassName('kbd-lg');
// console.log(kbdSeatButton);

let count = 0;
let available = 40;
for (const btn of allSeatButton) {
  // console.log(btn);

  btn.addEventListener('click', function (e) {
    // console.log(count, 'Yeaa! seat sclect korci');

    //**step-1: for seat count/available seat ************/
    count = count + 1;
    if (count <= 4) {
      setInnerText('seat-count', count);
    }

    available = available - 1;
    setInnerText('available-count', available);
    //**step-2: append by Seat Economy Price ************/
    // step-1: get innerText Name & Price
    console.log(e.target.innerText);
    const seatName = e.target.innerText;
    const seatPrice =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[7].childNodes[3].childNodes[7].childNodes[3].innerText;
    // console.log(typeof seatPrice);
    // step-2: get position & create child & set child innerText
    const selectPosition = document.getElementById('selected_position');
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    p1.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economy';
    const p3 = document.createElement('p');
    p3.innerText = seatPrice;
    // step-3: append child
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    li.classList.add('flex');
    li.classList.add('gap-12');

    selectPosition.appendChild(li);

    // console.log(selectPosition);

    //******Step-3: set total BDT Price */
    // const totalPrice = document.getElementById('total_price').innerText;

    // const convertTotalPrice = parseInt(totalPrice);

    // const sum = convertTotalPrice + parseInt(seatPrice);
    // // console.log(typeof sum);
    // setInnerText('total_price', sum);

    totalCost('total_price', seatPrice);

    //***step-4: couppon button disable*****/
    showElementById('disabledId');

    //******Step-5: set Grand total BDT Price */
    // const grandTotalPrice =
    //   document.getElementById('grand_total_price').innerText;

    // const convertGrandTotalPrice = parseInt(grandTotalPrice);

    // const grandSum = convertGrandTotalPrice + parseInt(seatPrice);
    // // console.log(typeof grandSum);
    // setInnerText('grand_total_price', grandSum);

    totalCost('grand_total_price', seatPrice);

    //
    const elementName = document.getElementById('label-name').innerText;
    const elementNumber = document.getElementById('label-num').innerText;
    const elementEmail = document.getElementById('label-email').innerText;
    if (
      elementName === String &&
      elementNumber === Number &&
      elementEmail === String
    ) {
      // const element = document.getElementById(elementId);
      // element.removeAttribute('disabled');
      console.log('ami parbo');
    }
  });
}
