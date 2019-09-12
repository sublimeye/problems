console.log('hxi')

function main() {
  //   move(progress, x)
  // }, frame)
  const element = document.querySelector('.square')
  console.dir(element)

  function move(progress: number) {
    // element.style.transform = `translate(${progress + 'px'}, 0)`
    element.style.left = progress + 'px'
  }

  function animate({
    duration,
    timing,
    draw,
  }: {
    duration: number
    timing: (fraction: number) => number
    draw: (progress: number) => void
  }) {
    const start = performance.now()
    requestAnimationFrame(function step(time) {
      let fraction = (time - start) / duration
      if (fraction > 1) fraction = 1

      const progress = timing(fraction)
      draw(progress)
      if (fraction < 1) requestAnimationFrame(step)
    })
  }

  animate({
    duration: 2000,
    timing: f => {
          return Math.pow(2, 10 * (f - 1)) * Math.cos(20 * Math.PI * 2.25 / 3 * f)
    },
    draw: p => move(p * 500),
  })
}

export default main()
