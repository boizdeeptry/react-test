import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/svg/logo.svg'
import Aw from '../assets/svg/aw.svg'
import Menu from '../assets/svg/icon_menu.svg'
import Edit from '../assets/svg/edit.svg'
import Waning from '../assets/svg/waning.svg'

const Nav = () => {
  return (
    <div className=" bg-black500 ">
      <ul className="max-w-[960px] m-auto flex gap-[30px] h-[64px] items-center justify-between">
        <NavLink to="/" className="nav-link text-white">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="flex gap-[30px] h-[64px] items-center">
          <NavLink
            to="/record"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow300 nav-link flex items-center gap-[12px]'
                : 'nav-link text-white flex items-center gap-[12px]'
            }
          >
            <img src={Edit} alt="" />
            自分の記録
          </NavLink>
          <NavLink
            to="/challenge"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow300 nav-link flex items-center gap-[12px]'
                : 'nav-link text-white flex items-center gap-[12px]'
            }
          >
            <img src={Aw} alt="" />
            チャレンジ
          </NavLink>
          <NavLink
            to="/question"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow300 nav-link flex items-center gap-[12px]'
                : 'nav-link text-white flex items-center gap-[12px]'
            }
          >
            <img src={Waning} alt="" />
            お知らせ
          </NavLink>
          <img src={Menu} alt="" className="ml-[35px]" />
        </div>
      </ul>
    </div>
  )
}

export default Nav
