// function handelSelect() {
//   console.log('Select korci');
//   // document.getElementById();
// }
// *********step-1: get a array for all set btn************************
const kbdSeatButton = document.getElementsByClassName('kbd-lg');
// console.log(kbdSeatButton);

let count = 0;
for (const btn of kbdSeatButton) {
  // console.log(btn);
  btn.addEventListener('click', function () {
    // console.log('boss sclect korci');
    count = count + 1;
    console.log(count, 'Yeaa! seat sclect korci');
    document.getElementById('card-count').innerText = count;
  });
}
