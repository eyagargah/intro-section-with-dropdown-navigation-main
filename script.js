openMenu()
{
    let burger = document.querySelector('.burger')
    let links = document.querySelector('.links')
    if(links?.classList.contains("open")){
      links.classList.remove('open')
      links.classList.add('close')
    }else {
      links?.classList.add('open')
      links?.classList.remove('close')
    }
  } 