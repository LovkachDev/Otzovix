
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let modal = document.getElementById('modal');
let body = document.getElementById('body');
function openModal()
{
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
}
function closeModal()
{
    modal.style.display = 'none';
    body.style.overflow = 'scroll';
}