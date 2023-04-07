let dropBtn = document.querySelectorAll('.dropBtn')
let dropDownContent = document.querySelectorAll('.dropdown-content')


dropBtn.forEach(function(item){
  item.addEventListener('click', function(){
    item.parentElement.lastElementChild.style.display ="block"
  })
})
