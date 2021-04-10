function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const card = document.querySelector('.main-card');

rotateCard.addEventListener('mousemove', function(e) {
  move(e.clientX, e.clientY);
})

function move(x, y){
  let wh = window.innerHeight / 2,
  ww = window.innerWidth / 1.25;

  rotateCard.style.setProperty('--mouseY', (y - wh) / 15 + "deg")
  rotateCard.style.setProperty('--mouseX', (x - ww) / 15 + "deg")
}

let activeTab = tabs.querySelector('li.active')

tabs.addEventListener('click', function(e) {
  if(e.target.closest('li') && !e.target.classList.contains('active')) {
    e.target.classList.toggle('active');
    activeTab.classList.remove('active');
    activeTab = e.target;
  }
})