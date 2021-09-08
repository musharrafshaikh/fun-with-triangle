//queryselector of area
const areaInputs=document.querySelectorAll('.areaInput');
const areaBtn=document.querySelector('#areaButton');
const outputEl=document.querySelector('#output');

//functions of area

function calculateProductOfSides(a,b){

   const productOfSides=(a*b);
   console.log(productOfSides);
   return productOfSides;
}

function calculatearea(){

    const productOfSides=calculateProductOfSides(Number(areaInputs[0].value),Number(areaInputs[1].value),3);
    const area=0.5*productOfSides;
    outputEl.innerText="The Area is ="+ area;
 }
 
 if(areaBtn)
 {
    areaBtn.addEventListener("click",calculatearea);
 }