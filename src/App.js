import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Content from './Components/Content'
import Menu from './Components/Menu'
import Header from './Components/Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
        <Menu />
        <Header />

      </BrowserRouter>

    </div>

  )
}