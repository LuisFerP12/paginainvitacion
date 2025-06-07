import React, { useState, useEffect, useRef } from "react"

// Updated with actual event images
const images = [
  "/assets/images/064.webp",
  "/assets/images/070.webp", 
  "/assets/images/090.webp",
  "/assets/images/092.webp",
  "/assets/images/132.webp",
  "/assets/images/172.webp",
]

const IMAGE_CHANGE_INTERVAL = 4000 // Slower transition for better performance

export default function CountdownSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef(null)

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((src, index) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.onload = () => resolve(index)
          img.onerror = () => resolve(index) // Still resolve to avoid hanging
          img.src = src
        })
      })

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true)
      })
    }

    preloadImages()
  }, [])

  // Image slideshow effect - only start after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return

    const imageInterval = setInterval(() => {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      })
    }, IMAGE_CHANGE_INTERVAL)

    return () => clearInterval(imageInterval)
  }, [imagesLoaded])

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Calculate time to event
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-06-29T19:00:00')
    const currentTime = new Date()
    const difference = eventDate.getTime() - currentTime.getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (!isClient) return

    // Initialize countdown immediately after client mounts
    setCountdown(calculateTimeLeft())

    const countdownTimer = setInterval(() => {
      setCountdown(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(countdownTimer)
  }, [isClient])

  return (
    <div id="countdown" ref={sectionRef} className="countdown-section">
      {/* Background Image Slideshow - simplified */}
      <div
        className={`countdown-bg-slideshow ${
          !imagesLoaded ? 'countdown-bg-loading' : 'countdown-bg-loaded'
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />

      {/* Loading state overlay */}
      {!imagesLoaded && (
        <div className="countdown-loading-overlay">
          <div className="countdown-loading-content">
            <div className="countdown-spinner"></div>
            <p className="countdown-loading-text">Cargando...</p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="countdown-overlay">

        {/* Main Content */}
        <main className="countdown-main">
          {/* Event Branding */}
          <div className="countdown-branding">
            <span className="countdown-subtitle">
              ® EUFORIA PRESENTA
            </span>

            {/* Title with Drop Cap */}
            <div className="countdown-title-wrapper">
              <div className="countdown-title">
                <span className="countdown-title-text">ROM LEM 129</span>
              </div>
              {/* P aislada en su propio contenedor */}
              <div className="countdown-drop-cap-wrapper">
                <span className="countdown-drop-cap">P</span>
              </div>
            </div>
          </div>

          {/* Countdown Container */}
          <div className="countdown-timer">
            <div className="countdown-unit">
              <span className="countdown-number">
                {isClient ? String(countdown.days).padStart(2, "0") : "00"}
              </span>
              <span className="countdown-label">DÍAS</span>
            </div>

            <div className="countdown-colon">:</div>

            <div className="countdown-unit">
              <span className="countdown-number">
                {isClient ? String(countdown.hours).padStart(2, "0") : "00"}
              </span>
              <span className="countdown-label">HRS</span>
            </div>

            <div className="countdown-colon">:</div>

            <div className="countdown-unit">
              <span className="countdown-number">
                {isClient ? String(countdown.minutes).padStart(2, "0") : "00"}
              </span>
              <span className="countdown-label">MIN</span>
            </div>

            <div className="countdown-colon">:</div>

            <div className="countdown-unit">
              <span className="countdown-number">
                {isClient ? String(countdown.seconds).padStart(2, "0") : "00"}
              </span>
              <span className="countdown-label">SEG</span>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
} 