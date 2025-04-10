import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayOut = () => {
  return (
   <>
    <header>
        <Nav />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <Footer />
    </footer>
   </>
  )
}

export default MainLayOut
