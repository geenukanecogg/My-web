const video1 = document.getElementById("projectvideo1");
const video2 = document.getElementById("projectvideo2");
const video3 = document.getElementById("projectvideo3");
const hoversign = document.querySelector(".hover-sing");

// sidebar eliments //

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');



const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoversign.classList.add("active")
  })
  video.addEventListener("mouseout", function () {
    video.pause();
     hoversign.classList.remove("active")
  })
})


// sidebar eliments //

menu.addEventListener("click", function(){
  sidebar.classList.remove("close-sidebar")
  sidebar.classList.add("open-sidebar")

})

close.addEventListener("click", function(){
  sidebar.classList.remove("open-sidebar")
  sidebar.classList.add("close-sidebar")
})

