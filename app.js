//  <input type="number" id="numTemp"> 
//  <input type="submit" id="btn"></input>
//   <div id="result">RESULT</div>

// function calculateTemp(){
//     const numTemp = document.getAnimations("numTemp").value;
//     const select = document.getElementById("select").value;

// const celToFah = (para) => {
//     const fah_value = para + 5;
//     return fah_value;
// }
// const fahToCel = (para) => {
//     const cel_value = para + 10;
//     return cel_value;
// }

// result = document.getElementById("result");
// let final_value;

// if(select.value == "celcius"){
//     final_value= celToFah(numTemp);
//     result.innerHTML= `=${final_value} farenheit`
// }
// else{
    
//     final_value=fahToCel(numTemp);
//     result.innerHTML=`${final_value} celcius`
// }
// }

const calculateTemp = () => {
    const numTemp = document.getElementById("numTemp").value;
    const numSelected = document.getElementById("select");
    const valueTemp = numSelected.options[numSelected.selectedIndex];
    const result = document.querySelector("#result h2");

   

   const celTofah = (para) => {
      const first_val = Math.round((para * 9/5)+32);
      return first_val;
   }
   const fahTocel = (para) => {
      const second_val = Math.round((para - 32)*5/9);
      return second_val;
   }


 if(valueTemp.value == "cel"){
    const value1 = celTofah(numTemp);
    result.innerHTML = `= ${value1}° farenheit`;

 } else {
     const value2 = fahTocel(numTemp);
     result.innerHTML = `= ${value2}° celcius`;
 }

}