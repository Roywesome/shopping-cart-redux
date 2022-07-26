import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <NavContainer>
      <nav className="nav" id="nav">
        <h2 className="nav__logo">FASHION.</h2>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Store
            </Link>
          </li>
          <li className="nav__item">
            <a href="https://github.com/roywesome" target="_blank">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <Link to="cart" className="nav__link">
              Cart
            </Link>
          </li>
        </ul>

        <a href="#nav" className="nav__hamburguer">
          <img className="nav_icon" src="src/assets/menu.png" alt="" />
        </a>
        <a href="#" className="nav__close">
          <img className="nav_icon" src="src/assets/close.webp" alt="" />
        </a>
      </nav>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
margin: 0;
padding: 0;

a{
    text-decoration: none;
}

.nav{
    --state-close: scale(0);
    --state-hamburguer: scale(1);
    --state-menu: translate(-100%);

    margin: 0 10%;
    padding: 20px 0;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(2, max-content)
}

.nav:target{
    --state-menu: translate(0);
    --state-close: scale(1);
    --state-hamburguer: scale(0);

}

.nav__logo{
    font-size: 2rem;
    z-index: 2;
    color: red;
}

.nav__hamburguer,
.nav__close{
    cursor: pointer;
    grid-column: -1/-2;
    grid-row: 1/2;
    transition:.4s transform;
    z-index: 2;
}


.nav__hamburguer{
    transform: var(--state-hamburguer)
}

.nav__close{
    transform: var(--state-close)
}


.nav__links{
    display: flex;
    align-items: center;
    background-color: #333;
    position: absolute;
    top:-25px;
    bottom:-25px;
    left:0;
    right:0;
    padding: 0;
    font-size: 1.5rem;

    display: grid;
    align-content: center;
    gap: 2em;
    padding-left: 5%;
    z-index: 1;

    transform: var(--state-menu)

}

.nav_icon{
    width: 40px;
}

.nav__item{
    list-style: none;
}

.nav__link{
    color: blue;
    text-decoration: none;
}


@media (min-width:768px){
    .nav{
        --state-hamburguer: scale(0);
        --state-menu: translate(0);
    
    .nav:target{
        --state-close: scale(0);
    
    }

    .nav__links{
        padding: 0;
        background-color: unset;
        position: unset;
        gap: 1.5em;
        transform: unset;
        grid-auto-flow: column;

        grid-column: -2/-1;
        grid-row: 1/2;
    }

    .nav__link{
        font-size: 1.5rem;

    }
}


`;
