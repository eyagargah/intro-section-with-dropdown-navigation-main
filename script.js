let dropBtn = document.querySelectorAll('.dropBtn')
let menu = document.querySelector('.menu');


dropBtn.forEach(function(item){
  item.addEventListener('click', function(){
    if ( item.parentElement.lastElementChild.classList.contains('hide')){
      //show dropdown menu
      item.parentElement.lastElementChild.classList.remove('hide')
      item.parentElement.lastElementChild.classList.add('show')
      //toggle arrows
      item.childNodes[1].classList.remove('hide')
      item.childNodes[1].classList.add('show')

      item.childNodes[3].classList.remove('show')
      item.childNodes[3].classList.add('hide')

    }else {
      item.parentElement.lastElementChild.classList.remove('show')
      item.parentElement.lastElementChild.classList.add('hide')

      item.childNodes[1].classList.remove('show')
      item.childNodes[1].classList.add('hide')

      item.childNodes[3].classList.remove('hide')
      item.childNodes[3].classList.add('show')
    }
  })
})

menu.addEventListener('click',function(){
  menu.parentElement.classList.toggle('open');
  document.body.classList.toggle('nav-open');
})



