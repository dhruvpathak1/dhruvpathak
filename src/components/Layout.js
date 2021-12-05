import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({children}) {
    return (
      <div>
        <Header />
        { children }
        <Footer />
      </div>
    )
}
