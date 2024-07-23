import React from 'react'
import './App.css'
import styled,{ThemeProvider} from 'styled-components'
import { GlobalStyle } from './styles/Globalstyle'

let favcolor="green"
//use of props
// const Button= styled.button`
// background-color:${(props)=>props.bg};

// &:hover{
// transform:translateY(-2px);
// }
// span{
// color:#fff;
// }
// &:after{
// content:"Plz"
// }
// &:before{
// content:"Yo"
// }`

//props by destructuring:
// const Button= styled.button`
// background-color:${({bg})=>bg};

// &:hover{
// transform:translateY(-2px);
// }
// span{
// color:#fff;
// }
// &:after{
// content:"Plz"
// }
// &:before{
// content:"Yo"
// }`

// use of ThemeProvider:
const Button= styled.button`
background-color:${({theme})=>theme.colors.bg};

&:hover{
transform:translateY(-2px);
}
span{
color:#fff;
}
&:after{
content:"Plz"
}
&:before{
content:"Yo"
}
@media(max-width:${({theme})=>theme.responsive.mobile}){}`

const Para= styled.p`
color:${favcolor};
&:hover{
color:pink;
}
`

const theme={
  colors:{
    textColor:"red",
    bg:"blue"
  },
  responsive:{
    mobile:"768px",
    tab:"998px",
  },
}
function App() {
  return(
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      {/* bg here is sent for props */}
   {/* <Button className="btn" bg="purple">Yo</Button> */}
   <Button>Diya
    <span>Namish<b>Khyati</b></span>
   </Button>
   <Para>Hi! I am Diya..</Para>
   </ThemeProvider>
    </>
  )
}

export default App
