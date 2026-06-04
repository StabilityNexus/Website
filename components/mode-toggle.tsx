"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    
    if (newTheme === "dark") {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return <div className="size-9" /> // Placeholder
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  )
}
