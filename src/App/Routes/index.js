import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from 'App/Layouts'
import { Home } from 'App/Containers'

export default function index() {
  return (
    <Routes>
        <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
    </Routes>
  )
}
