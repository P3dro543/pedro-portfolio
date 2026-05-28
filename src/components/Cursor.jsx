import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0

    let ringX = 0
    let ringY = 0

    let raf

    function onMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY

      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    function animate() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      raf = requestAnimationFrame(animate)
    }

    function onMouseEnterInteractive() {
      dot.classList.add('hovered')
      ring.classList.add('hovered')
    }

    function onMouseLeaveInteractive() {
      dot.classList.remove('hovered')
      ring.classList.remove('hovered')
    }

    const interactives = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    )

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    window.addEventListener('mousemove', onMouseMove)

    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)

      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })

      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}