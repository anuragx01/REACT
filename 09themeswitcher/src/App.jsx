import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from "./components/Card";


function App() {
// Initialize theme from localStorage or default to "light"
const [themeMode,setThemeMode] = useState(() => {
  // Check localStorage first, then default to "light"
  const savedTheme = localStorage.getItem("theme")
  return savedTheme || "light"
})

 const lightTheme = () => {
  setThemeMode("light")
 }

 const darkTheme = () => {
  setThemeMode("dark")
 }

 // Apply theme class to HTML element whenever themeMode changes
 useEffect(() => {
  const root = document.documentElement
  // Remove both classes first to ensure clean state
  root.classList.remove("light", "dark")
  // Add the current theme class
  root.classList.add(themeMode)
  
  // Store theme in localStorage for persistence
  localStorage.setItem("theme", themeMode)
 }, [themeMode])


  return (
    <ThemeProvider value = {{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-200">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
