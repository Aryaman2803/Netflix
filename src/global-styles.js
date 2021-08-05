import { createGlobalStyle } from 'styled-components'
import 'normalize.css'
export const GlobalStyles = createGlobalStyle`
html,body{
    font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    scroll-behavior: smooth;
    background-color:black;
    color:white;
    font-size:16px;
    
}
`
