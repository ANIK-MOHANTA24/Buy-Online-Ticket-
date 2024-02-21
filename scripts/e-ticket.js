// function handelSelect() {
//   console.log('Select korci');
//   // document.getElementById();
// }
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
    available = available - 1;
    setInnerText('seat-count', count);
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
    let selectedContainer = selectPosition.appendChild(li);
    console.log(selectedContainer);

    //******Step-3: set total BDT Price */
    const totalPrice = document.getElementById('total_price').innerText;

    const convertTotalPrice = parseInt(totalPrice);

    const sum = convertTotalPrice + parseInt(seatPrice);
    // console.log(typeof sum);
    setInnerText('total_price', sum);
  });
}
