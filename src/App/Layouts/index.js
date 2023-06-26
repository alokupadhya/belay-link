import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppNavigation } from 'App/Components/Common'

export default function Layouts() {
  return (
    <>
        <AppNavigation/>
        <Outlet/>
    </>
  )
}
