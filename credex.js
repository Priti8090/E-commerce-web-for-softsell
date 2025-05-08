 // Contact form frontend validation + dummy submit
 document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      document.getElementById('formMessage').classList.remove('hidden');
      form.reset();
    }
  });

  // Dark mode toggle
 let body=document.querySelector('.manu');
 let btn_dark=document.querySelector('.mode-btn-dark');
 let btn_light=document.querySelector('.mode-btn-light');
 let why=document.querySelector('.why');
 let contect=document.querySelector('.contect');
 let terminal=document.querySelector('.terminal');
 let terminal2=document.querySelector('.terminal2');
 let header=document.querySelector('.header');

 btn_light.addEventListener('click',()=>{
    body.style.backgroundColor='rgb(255, 255, 255)';
    body.style.color='rgb(4, 4, 4)';
    why.style.backgroundColor=' rgb(233, 233, 231)';
    contect.style.backgroundColor=' rgb(233, 233, 231)';
    terminal.style.backgroundColor=' rgb(233, 233, 231)';
    terminal.style.boxShadow='1px 1px 30px rgb(63, 63, 63)';
    terminal.style.border='2px solid rgb(117, 117, 117)';
    terminal2.style.backgroundColor=' rgb(233, 233, 231)';
    terminal2.style.boxShadow='1px 1px 30px  rgb(63, 63, 63)';
    terminal2.style.border='2px solid rgb(117, 117, 117)';
    header.style.backgroundColor='  rgb(17, 101, 212)';
 });
 btn_dark.addEventListener('click',()=>{
    body.style.backgroundColor=' rgb(3, 28, 60)';
    body.style.color='rgb(221, 221, 241)';
    why.style.backgroundColor='rgb(7, 45, 99)';
    contect.style.backgroundColor='rgb(7, 45, 99)';
    terminal.style.backgroundColor='rgb(7, 45, 99)';
    terminal.style.boxShadow='1px 1px 30px rgb(33, 8, 157)';
    terminal.style.border='2px solid rgb(33, 8, 157)';
    terminal2.style.backgroundColor='rgb(7, 45, 99)';
    terminal2.style.boxShadow='1px 1px 30px rgb(33, 8, 157)';
    terminal2.style.border='2px solid rgb(33, 8, 157)';
    header.style.backgroundColor='  rgb(7, 45, 99)';
 });
