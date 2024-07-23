import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function My_app(){
//     return(
//         <div>
//             <h1>Custom React</h1>
//         </div>
//     )
// }

// const ReactElement={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:'click me to visit google',
// }

// const AnotherElement=(
//     <a href="https://google.com" target="_blank">Visit Google</a>
// )

const ReactElementinvite=React.createElement(
    'a',
    {target:"",href:""},
    'click me google',
    another_user,
)

// const another_user="chaiop";
// const Reactelement=React.createElement(
//     'a',
//     {href:'https://google.com',target:'_blank'},
//     'click me to google',
//     another_user //varaible
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    // <My_app/>
    // My_app()
    // ReactElement
    // AnotherElement
    // Reactelement
)
