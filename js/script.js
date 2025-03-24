$(function () {

  const subNav = $('.sub-nav-wrap')
  const mainNav = $('.main-nav li a')
  const header = $('header')//schOpen
  const schOpenBtn = $('.sch-open-btn')
  const schCloseBtn = $('.sch-c-btn')
  
  const subList = $('.sub-list')
  
  
  //body  .mob-mOpen
  // .btn-m-menu  .addClass()
  const body = $('body')
  const btnMmenu = $('.btn-m-menu')
  const subNavBtn=$('.sub-nav>li>span.blind')




  function mobReset(){
    subList.removeAttr('style')
    subNavBtn.parent('li').removeClass('on')
  }


  function dskReset(){
    subNav.removeAttr('style')
    header.removeClass('schOpen')
  }

  subNavBtn.on('click',function(){

    if($(this).parent('li').hasClass('on')){
      $(this).parent('li').removeClass('on')
      $(this).siblings('.sub-list').slideUp()

    }else{

      $(this)
      .parent('li')
      .addClass('on')
      .siblings()
      .removeClass('on')
      .children('.sub-list')
      .slideUp()


      $(this).siblings('.sub-list').slideDown()
    }
  })




  btnMmenu.on('click', (e) => {
    e.preventDefault()
    body.toggleClass('mob-mOpen')
  })


  $(window).on('resize load', () => {
    let winWidth = window.innerWidth

    if (winWidth < 1024) {
      dskReset()

    }

    if(winWidth>=1024){
      mobReset()
    }

    console.log(winWidth)

  })






  schCloseBtn.click(function (e) {
    e.preventDefault()
    // console.log('click');
    header.removeClass('schOpen')
    
  })
  schOpenBtn.click(function (e) {
    e.preventDefault()
    // console.log('click');
    header.addClass('schOpen')

  })



  mainNav.click(function () {

    subNav.stop().slideDown()
  })




  subNav.on('mouseleave', function () {

    if(window.innerWidth>=1024){

      setTimeout(function () {
        subNav.stop().slideUp()
      }, 500)
      
    }


  })



})//jquery end

// fixedTop
const fixedTopBtn = document.querySelector('.fixedTop')



window.addEventListener('scroll', () => {
  let scroll = window.scrollY

  console.log(scroll)

  if (scroll > 100) {
    fixedTopBtn.classList.add('On')
  } else {

    fixedTopBtn.classList.remove('On')
  }
})

fixedTopBtn.addEventListener('click', (e) => {
  e.preventDefault()

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

})


// depth5 tab
const dep5Tabs = document.querySelectorAll('.notice-media-wrap h2 span')
const dep5Contents = document.querySelectorAll('.content-wrap>ul')





dep5Tabs.forEach((tab, i) => {

  tab.addEventListener('click', () => {
    console.log(i);
    dep5Tabs.forEach((tab) => tab.classList.remove('on'))
    dep5Contents.forEach((content) => content.classList.remove('active'))

    tab.classList.add('on')
    dep5Contents[i].classList.add('active')
  })
})





const heroSlider = new Swiper(".hero-slider", {
  effect: 'fade',
  pagination: {
    el: ".hero-slider .swiper-pagination",
    clickable: true, // 페이지네이션 클릭 가능하도록 설정

  },
  loop: true
});


const newsSlider = new Swiper(".news-slider", {
  direction: "vertical",
  navigation: {
    nextEl: ".news-slider .swiper-button-next",
    prevEl: ".news-slider .swiper-button-prev",
    clickable: true, // 페이지네이션 클릭 가능하도록 설정

  },
});


// in slider
const programSlider = new Swiper(".program-slider", {
  autoplay: true,
  pagination: {
    el: ".program-slider .swiper-pagination",
  },
});
const promotionSlider = new Swiper(".promotion-slider", {
  autoplay: true,
  pagination: {
    el: ".promotion-slider .swiper-pagination",
  },
});
const clipSlider = new Swiper(".clip-slider", {
  autoplay: true,
  pagination: {
    el: ".clip-slider .swiper-pagination",
  },
});
const gallerySlider = new Swiper(".gallery-slider", {
  autoplay: true,
  pagination: {
    el: ".gallery-slider .swiper-pagination",
  },
});
const serviceSlider = new Swiper(".service-slider", {
  autoplay: true,
  pagination: {
    el: ".service-slider .swiper-pagination",
  },
});
