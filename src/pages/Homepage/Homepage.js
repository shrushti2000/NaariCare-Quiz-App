import React, { useContext } from 'react'
import './Homepage.css'
import heroImg from '../../assets/hero-img1.png'
import category1 from '../../assets/makeup-category-img.jpg'
import category2 from '../../assets/skincare.jpg'
import category3 from '../../assets/hair-category-img.jpg'
import category4 from '../../assets/period-img.jpg'

const Homepage = () => {

  return (
    <>
      <div className='hero-section flex-hz'>
        <img className='hero-img' src={heroImg} />
        <div className='hero-text flex-vt'>
          <p className='hero-text-primary'>Explore your knowledge on Beauty,Makeup,Skincare and Menstrual Health!</p>
          <p className='hero-text-secondary'>Take our quiz now!!!</p>
          <button class="btn btn-primary">Play Quiz</button>
        </div>
      </div>
      <div className='category-section flex-vt flex-wrap'>
        <h3 className='section-title'>Categories</h3>
        <div className='categories-container flex-hz'>
          <div className='category flex-vt' >
            <img className="category-img" src={category1} />
            <div className='category-name'><p className='text-md'>Makeup quiz</p></div>
          </div>
          <div className='category flex-vt' >
            <img className="category-img" src={category2} />
            <div className='category-name'><p className='text-md'>Skincare Quiz</p></div>
          </div>
          <div className='category flex-vt' >
            <img className="category-img" src={category3} />
            <div className='category-name'><p className='text-md'>Hair Quiz</p></div>
          </div>
          <div className='category flex-vt' >
            <img className="category-img" src={category4} />
            <div className='category-name'><p className='text-md'>Menstrual Hygiene Quiz</p></div>
          </div>
        </div>
      </div>
     </>
  )
}

export default Homepage