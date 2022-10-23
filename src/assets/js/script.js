const $sliderControl=document.querySelector('.slider-control');
const $subSliderControl=document.querySelector('.sub-slider-control');
const $subBottomControlNav=document.querySelector('.sub-bottom-control-nav');
const $newProductsControl=document.querySelector('.new-products-control');
const $newProductsNavbar=document.querySelector('.last-new-products-navbar');

const $mostSoldControl=document.querySelector('.most-sold-control');
const $mostSoldControlNavbar=document.querySelector('.most-sold-contol-navbar');
const footerTopItems=document.querySelectorAll('#footer-top-control h4');

footerTopItems.forEach((item) => {
  item.addEventListener("click",()=>{
    const icon=item.querySelector("i");
    icon.classList.toggle("icon-next");
    icon.classList.toggle("icon-down-arrow");

    const afterP=item.parentNode.querySelector("p");
    if(afterP){
      afterP.classList.toggle("hidden");
      afterP.classList.toggle("flex");
    }
    
    const afterUl=item.parentNode.querySelector("ul");
    if(afterUl){
      afterUl.classList.toggle("hidden");
      afterUl.classList.toggle("flex");
    }
  
  })
});

$($sliderControl).slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000
});



 $($subBottomControlNav).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: $subSliderControl,
  
});
$($subSliderControl).slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: $subBottomControlNav,
  dots: false,
  focusOnSelect: true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $('.subLeftArrow'),
  nextArrow: $('.subRightArrow'),
  responsive:[
    {
      breakpoint:425,
      settings:{
        slidesToShow:1,
        slidesToScroll:1
      }
    }
  ]
});

$($newProductsNavbar).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: $newProductsControl,
});

$($newProductsControl).slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: $subBottomControlNav,
  dots: false,
  focusOnSelect: true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $('.subNewLeftArrow'),
  nextArrow: $('.subNewRightArrow'),
  responsive:[
    {
      breakpoint:426,
      settings:{
        slidesToShow:1,
        slidesToScroll:1
      }
    },
    {
      breakpoint:769,
      settings:{
        slidesToShow:2,
        slidesToScroll:1

      }
    },
    {
      breakpoint:1025,
      settings:{
        slidesToShow:3,
        slidesToScroll:1

      }
    }
  ]
});


$($mostSoldControlNavbar).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: $mostSoldControl,
});

$($mostSoldControl).slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: $mostSoldControlNavbar,
  dots: false,
  focusOnSelect: true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $('.subSoldLeftArrow'),
  nextArrow: $('.subSoldRightArrow'),
  responsive:[
    {
      breakpoint:426,
      settings:{
        slidesToShow:1,
        slidesToScroll:1
      }
    },
    {
      breakpoint:769,
      settings:{
        slidesToShow:2,
        slidesToScroll:1

      }
    },
    {
      breakpoint:1025,
      settings:{
        slidesToShow:3,
        slidesToScroll:1

      }
    }
  ]
});