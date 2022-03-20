import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div class="navigation-container flex-hz">
        <div class="navigation-item-1">
          <h5 class="lib-name-1">NaariCare <span class="lib-name-2">Quiz</span></h5>
        </div>
        <div class="navigation-item-3 flex-hz">
          <Link className="category-link" to="/"> <button class="btn btn-primary" >Home</button></Link>
        </div>
      </div>
    </>
  )
}

export default Header