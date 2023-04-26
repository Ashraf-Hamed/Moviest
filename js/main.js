
const Movie = [
  {
      id : 1,
      title : "Sayen (2023)",
      category : "Action",
      img :"img/movie-1.jpg",
      btn : "play-page.html",
     


  },
  {
    id : 2,
    title : "The Legacy of the Bones (2019)",
    category : "Drama / Extement",
    img :"img/movie-2.jpg",
    btn : "../index.html",
   
},

{
  id : 3,
  title : "المداح أسطوره العشق",
  category : "Action",
  img :"المداح/المداح.jpg",
  btn : "../elmdah.html",
 


},
{
  id : 4,
  title : "Eternals",
  category : "Action",
  img :"img/movie-4.jpg",
  btn : "../index.html",



},
{
  id : 5,
  title : "القط ذو الحذاء: الأمنية الأخيرة",
  category : "Cartoon",
  img :"../img/Puss-in-Boots-The-Last-Wish-لن-يعرض-في-الكويت-1670165285996.jpeg",
  btn : "../index.html",



},
{
  id : 6,
  title : "Ratatouille",
  category : "Cartoon",
  img :"../img/cartoon2.webp",
  btn : "../rate.html",



},
{
  id : 7,
  title : "the super mario bros. movie (2023)",
  category : "Cartoon",
  img :"../img/cartoon3.jpg",
  btn : "../index.html",


},
{
  id : 8,
  title : "كيره و الجن ",
  category : "Arabic",
  img :"../kira/kiraboster.jpg",
  btn : "../kira.html",
 


},
{
  id : 9,
  title : "(2022) بحبك",
  category : "Arabic",
  img :"../img/arabic2.jpg",
  btn : "../index.html",
 


},
{
  id : 10,
  title : "عمهم",
  category : "Arabic",
  img :"../img/arabic3.jpg",
  btn : "../aohom.html",
 


},
{
  id : 11,
  title : "Creed III",
  category : "Action",
  img :"../img/all.jpg",
  btn : "../index.html",
 


},
{
  id : 12,
  title : "65 (2023)",
  category : "Action",
  img :"../img/all2.jpg",
  btn : "../index.html",
 


},
 
];



const movieContent = document.querySelector(".movie-content");
const filterBtns = document.querySelectorAll(".filter-btn");


window.addEventListener('DOMContentLoaded' , ()=> {
  displaymenuItem(Movie)
});


filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id
    const movieCategory = Movie.filter(function(movieItem){
      if(movieItem.category === category) {
        return movieItem ;
      }  
  })

  if(category === "All") {
    displaymenuItem(Movie)
  } 
  else{
    displaymenuItem(movieCategory)
}

})

});





function displaymenuItem (movieItem) {
  let displayMovie = movieItem.map(function(part) {
    


    return ` <div class="movie-box">
                     <img src= ${part.img} alt=${part.title} class="move-box-img">
                  <div class="box-txt">
                      <h2 class="movie-title">${part.title}</h2>
                      <span class="movie-type">${part.category}</span>
                      <a href=${part.btn} class="watch-btn play-btn">
                          <i class="bx bx-right-arrow"></i>
                      </a>
                  </div>
              </div> 
    
    `
    
  });
  
  displayMovie = displayMovie.join("")
  movieContent.innerHTML = displayMovie ;
  
}







var swiper = new Swiper(".popular-content", {
  sliderPerView:1,
  spaceBetween: 10,
  
  autoplay: {
    delay: 755500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    280:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320 :{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480 :{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640 :{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768 :{
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992 :{
      slidesPerView: 4,
      spaceBetween: 20,
    },
  
  }

});






let playBtn = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closeBtn = document.querySelector('.close-btn');
let myVideo = document.querySelector('#myvideo');


playBtn.addEventListener('click', () => {
  video.classList.add('showVideo');
  myVideo.play()

})

closeBtn.addEventListener('click', () => {
  video.classList.remove('showVideo');
  myVideo.pause()
})




















