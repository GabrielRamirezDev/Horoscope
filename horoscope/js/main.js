
let monthElement = document.getElementById('mth')
let dayElement = document.getElementById('dy')
console.log(dayElement);
function findSign(){
let day=parseInt(dayElement.value);
let month=parseInt(monthElement.value);
let output= document.getElementById('response')

  if(day>=20 && month ===1 || day<=18 && month ===2 ){
    output.innerText="Aquarius"
  }


  else if (day>=19 && month ===2 || day<=20 && month ===3) {
    output.innerText='Pisces';
  }

  else if (day>=21 && month ===3 || day<=19 && month ===4) {
    output.innerText='Aries';
  }

  else if (day>=20 && month ===4 || day<=20 && month ===5) {
    output.innerText='Taurus';
  }

  else if (day>=21 && month ===5 || day<=20 && month ===6) {
    output.innerText='Gemini';
  }

  else if (day>=21 && month ===6 || day<=22 && month ===7) {
    output.innerText='Cancer';

  }
  else if (day>=23 && month ===7 || day<=22 && month ===8) {
    output.innerText='Leo';
  }

  else if (day>=23 && month ===8 || day<=22 && month ===9) {
    output.innerText='Virgo';
  }

  else if (day>=23 && month ===9 || day<=21 && month ===10) {
    output.innerText='Libra';
  }

  else if (day>=22 && month ===10 || day<=21 && month ===11) {
    output.innerText='Scorpio';
  }

  else if (day>=22 && month ===11 || day<=21 && month ===12) {
    output.innerText='Sagittarius';
  }

  else if (day>=22 && month ===12 || day<=19 && month ===1) {
    output.innerText='Capricorn';
  }
}
document.getElementById("submitDate").onclick=findSign;
