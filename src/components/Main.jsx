import React from 'react'
import './Styles/main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

function Main() {
  return (
    <main id='main' className='main z-0'>
    <PageTitle page={'Dashboard'} />
    <Dashboard />
    </main>
  )
}

export default Main