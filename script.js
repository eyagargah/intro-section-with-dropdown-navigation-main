let dropBtn = document.querySelectorAll('.dropBtn')
let dropDownContent = document.querySelectorAll('.dropdown-content')


dropBtn.forEach(function(item){
  item.addEventListener('click', function(){
    
    console.log(item.childNodes[1])

  })
})
