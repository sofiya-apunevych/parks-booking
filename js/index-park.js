var services = document.querySelector('#services');

services.addEventListener('click', function (e) {
  var target = e.target;
  if (target.classList.contains('btn')) {
    var serviceItem = target.parentNode;
    var open = target.dataset.open === 'true';
    target.dataset.open = !open;
    if (open) {
      target.innerText = 'Read more';
      serviceItem.classList.remove('open');
    } else {
      target.innerText = 'Read less';
      serviceItem.classList.add('open');
    }
  }
});

/*
function textMoreLess() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('moreLessBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}
*/
/*



document
  .querySelectorAll('.menu-item')
  .forEach((el) => document.addEventListener('click', menuItemClicked));

function menuItemClicked(ev) {
  const menuItem = ev.target;
  menuItem.classList.toggle('selected');
}

*/

/*






function hidenTextFunction() {
    var x = document.getElementById("melburn-park-part");
    if (window.getComputedStyle(x).visibility === "hidden") {
      x.style.display = "none";
    }
  }
*/

/*

function hidenTextFunctionM(){
    // Find the element
      x=document.getElementById("melburn-park-part");
     //Option 1: Change the style attribute directly
      x.style.display="none";

  }
  
function VisibleTextFunctionM(){
    // Find the element
      x=document.getElementById("melburn-park-part");
    //Option 1: Change the style attribute directly
       x.style.display="block";

  }


  function hidenTextFunctionL(){
    // Find the element
      x=document.getElementById("london-park-part");
     //Option 1: Change the style attribute directly
      x.style.display="none";

  }
  
function VisibleTextFunctionL(){
    // Find the element
      x=document.getElementById("london-park-part");
    //Option 1: Change the style attribute directly
       x.style.display="block";

  }




  function hidenTextFunctionB(){
    // Find the element
      x=document.getElementById("barcelona-park-part");
     //Option 1: Change the style attribute directly
      x.style.display="none";

  }
  
function VisibleTextFunctionB(){
    // Find the element
      x=document.getElementById("barcelona-park-part");
    //Option 1: Change the style attribute directly
       x.style.display="block";

  }

  function hidenTextFunctionS(){
    // Find the element
      x=document.getElementById("san-paulo-park-part");
     //Option 1: Change the style attribute directly
      x.style.display="none";

  }
  
function VisibleTextFunctionS(){
    // Find the element
      x=document.getElementById("san-paulo-park-part");
    //Option 1: Change the style attribute directly
       x.style.display="block";

  }

  function hidenTextFunction(){
    // Find the element
      x=document.getElementById("new-York-park-part");
     //Option 1: Change the style attribute directly
      x.style.display="none";

  }
  
function VisibleTextFunction(){
    // Find the element
      x=document.getElementById("new-York-park-part");
    //Option 1: Change the style attribute directly
       x.style.display="block";

  }




*/
