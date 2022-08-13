import { useState, useEffect } from "react"

const useParallax = (ref, index) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const parallaxHandler = (e) => {
        const speed = 0.5
        const forLeaf = index
        let positionX = 0,
            positionY = 0
        let coordXprocent = 0,
            coordYprocent = 0
        const parallaxWidth = ref.current.offsetWidth
        const parallaxHeight = ref.current.offsetHeight

        const coordX = e.pageX - parallaxWidth / 2
        const coordY = e.pageY - parallaxHeight / 2

        coordXprocent = (coordX / parallaxWidth) * 100
        coordYprocent = (coordY / parallaxHeight) * 100

        let distX = coordXprocent - positionX
        let distY = coordYprocent - positionY

        positionX = positionX + distX * speed
        positionY = positionY + distY * speed

        setX(positionX / forLeaf)
        setY(positionY / forLeaf)
    }

    useEffect(() => {
        if (!ref.current) return
        ref.current.addEventListener("mousemove", parallaxHandler)
        return () => {
            ref.current.removeEventListener("mousemove", parallaxHandler)
        }
    }, [])

    return [x, y]
}

export default useParallax
