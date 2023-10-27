import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
    type:'a',
    props:{
        href:"httpps://google.com",
        target:'_blank'
    },
    children:'Click Me to visit Google'
}

const AnotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)
const areactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App/>
  
)
