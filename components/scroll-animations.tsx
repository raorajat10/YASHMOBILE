"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".slide-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}
