import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// ScrollToTop synchronizes the browser viewport with React Router navigation.
const ScrollToTop = () => {

  const { pathname } = useLocation()

  // Whenever the pathname changes, begin the new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // This component performs a side effect only and renders no visible markup.
  return null
}

export default ScrollToTop
