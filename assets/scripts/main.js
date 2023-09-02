const bio = document.querySelector('.bio'),
  lid = document.querySelector('#open'),
  burst = document.querySelector('#burst-lower'),
  thinkingLabel = document.querySelector('footer label'),
  thinkingCheckbox = document.querySelector('#thinking'),
  delta = 0.2,
  root = document.querySelector(':root')

let scrolled, moved, last

thinkingLabel.innerHTML = 'Start thinking!'
bio.addEventListener('scroll', () => {
  scrolled = true
})
window.addEventListener('mousemove', moveHandler)
thinkingCheckbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    thinkingLabel.innerHTML = 'Stop thinking!'
  } else {
    thinkingLabel.innerHTML = 'Start thinking!'
  }
})

setInterval(() => {
  if (scrolled) {
    scrollHandler()
    scrolled = false
  }
}, 250)

function scrollHandler() {
  let scrollPercentage = Math.abs(bio.scrollTop / (bio.scrollHeight - bio.clientHeight))
  if (last - scrollPercentage > 0) {
    lid.style.display = 'block'
    burst.style.display = 'none'
  } else {
    lid.style.display = 'none'
    burst.style.display = 'block'
  }
  last = scrollPercentage
}

function moveHandler(event) {
  let offsetX = ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 2
  let offsetY = ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 2
  root.style.setProperty('--cx', 50 + 5 * offsetX + 'vw')
  root.style.setProperty('--cy', 50 + 5 * offsetY + 'vh')
  root.style.setProperty('--px', offsetX + 'vw')
  root.style.setProperty('--py', offsetY + 'vh')
}
