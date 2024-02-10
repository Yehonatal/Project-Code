import {useState} from "react"
export const useChooseTheme = () => {
  const [theme, setTheme] = useState("Dark")


  return {theme, setTheme}
}
