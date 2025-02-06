import React from 'react'
import { Outlet } from 'react-router-dom'

import {Footer,Nav} from '../components/All.components'

function Root() {
  return (
    <>
    <div className=" h-[100vh] max-w-[1920px]">
    <Nav/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Root