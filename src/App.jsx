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
    </div>
  )
}

export default App