// var i = 0;
// var txt = '                                    Cardoso';
// var speed = 50;

// function typeWriterLeft() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, 3500)

//   }
// }
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed)

//   }
// }

// $(document).ready(function () {
//   $(window).on('load', function () {

//     function Preloader() {
//       setTimeout(() => {
//         document.getElementById('preloader').style.display = 'none';
//         document.getElementById('home').style.display = 'block';
//       }, 3500);
//     }

//     if (!sessionStorage.getItem('doNotShow')) {
//       sessionStorage.setItem('doNotShow', true);
//       Preloader();
//       typeWriterLeft()
      
//     } else {
//       setTimeout(() => {
//         document.getElementById('preloader').style.display = 'none';
//         document.getElementById('home').style.display = 'block';
//       }, 1000);
//       typeWriter()
//     }

//   });

// });