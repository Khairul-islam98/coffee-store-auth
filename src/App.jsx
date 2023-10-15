
import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import BannerSecond from './components/Banner/BannerSecond/BannerSecond'
import vector from './assets/images/Vector.png'
import { Link } from 'react-router-dom'
import Social from './components/Social/Social'
import Footer from './components/Footer/Footer'
import headerImg from './assets/images/header.png'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div>
      <div>
        <Header></Header>
        <Banner></Banner>
        <BannerSecond></BannerSecond>
      </div>
      <div className='text-center mt-20'>
        <span>--- Sip & Savor ---</span>
        <h1 className='text-[#331A15] text-5xl font-rancho mt-2 mb-3'>Our Popular Products</h1>
          <Link to='/addcoffee'>
        <div className='relative flex justify-center items-center'>
            <button className="btn px-10 py-7 text-white font-rancho bg-[#E3B577]">Add Coffee</button>
            <img className='absolute mt-6 bg-cover ml-28' src={vector} alt="" />
        </div>
          </Link>
      </div>
      <div className='m-20'>
        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
            )
          }
        </div>
        <div>
          <Social></Social>
         
        </div>
      </div>
      <Footer></Footer>
      <div className="hero mx-auto lg:min-h-[50px]" style={{ backgroundImage: `url(${headerImg})` }}>
      <p className='flex justify-center items-center font-rancho text-lg text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App
