import React from 'react'
import Layout from './layout/Layout'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div>
      <Layout>
        <SideBar />
        <MainContent/>
      </Layout>

      <h1 className='text-center text-blue-900'>Hello world</h1>
    </div>
  )
}

export default App