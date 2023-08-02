
const button = document.getElementById('turnSunColorsBlack');


button.addEventListener('click', () => {
   
   const sunColors = document.querySelectorAll('.rot, .orange, .gelb');

   
   sunColors.forEach((sunColor) => {
      sunColor.style.color = 'black';
   });
});