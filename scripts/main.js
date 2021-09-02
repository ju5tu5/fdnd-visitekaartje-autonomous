'use strict'

document.head.appendChild(Object.assign(document.createElement('style'), {
  textContent: Array(15).fill(null)
    .map(firefly => Object.assign(document.createElement('span'), { className: 'firefly' }))
    .map((firefly, i) => {
      firefly.animate(
        Array(random(12) + 16).fill(null).map(step => {
          return { transform: 'translateX(' + (random(100) - 50) + 'vw) translateY(' + (random(100) - 50) + 'vh) scale(' + (random(75) / 100 + 0.25) + ')' }
        }), {
          id: 'drift' + i,
          duration: random(10000) + 80000,
          direction: 'alternate',
          easing: 'ease',
          iterations: Infinity
        })
      document.querySelector('body').appendChild(firefly)
    })
    .reduce((css, firefly, i) => {
      return (css || '') + `
.firefly:nth-of-type(${i})::before {
  animation-duration: ${random(10) + 8 + 's'};
}
.firefly:nth-of-type(${i})::after {
  animation-duration: ${random(10) + 8 + 's'}, ${random(6000) + 5000 + 'ms'};
  animation-delay: 0ms, ${random(8000)) + 500 + 'ms'};
}
    `
    })
}))

function random(int) {
  return parseInt(Math.random() * int)
}