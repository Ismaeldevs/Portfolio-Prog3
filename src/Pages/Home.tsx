import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import {Props} from '../Types/props'

const Home = (props: Props) => {
  return (
    <>
      <Header {...props} />
      <Main />
      <Footer />
    </>
  )
}

export default Home
