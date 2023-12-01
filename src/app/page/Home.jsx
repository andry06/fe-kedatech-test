import React from 'react'
import TopBar from '../component/TopBar'
import Section1 from '../component/Section1'
import About from '../component/About'
import Price2 from '../component/Price2'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div  >
        <div className="bg-[url('app/images/home-vector.png')] bg-no-repeat  bg-[length:21%] bg-left-top  " >
            <TopBar />
            <Section1 />
            <About />
            <Price2 />
            <Contact />
            <Footer /> 
        </div>
       
    </div>
  )
}

export default Home