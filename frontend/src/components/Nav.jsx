import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/svg/logo.svg'
import Aw from '../assets/svg/aw.svg'
import Menu from '../assets/svg/icon_menu.svg'
import Edit from '../assets/svg/edit.svg'
import Waning from '../assets/svg/waning.svg'
import IconClose from '../assets/svg/icon_close.svg'

const Nav = () => {
  const menuData = [
    {
      path: '/record',
      name: '自分の記録',
    },
    {
      path: '/',
      name: '体重グラフ',
    },
    {
      path: '/',
      name: '目標',
    },
    {
      path: '/',
      name: '選択中のコース',
    },
    {
      path: '/healthy',
      name: 'コラム一覧',
    },
    {
      path: '/',
      name: '設定',
    },
  ]
  const [visible, setVisible] = useState(false)
  const wrapperRef = useRef(null)
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })
  return (
    <div className=" bg-black500 ">
      <ul className="max-w-[960px] m-auto flex gap-[30px] h-[64px] items-center justify-between relative">
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
            <div className="relative">
              <img src={Waning} alt="" />
              <span className="absolute top-0 right-0 text-[10px] text-white px-1 rounded-full bg-orange500">
                1
              </span>
            </div>
            お知らせ
          </NavLink>
          <img
            src={Menu}
            alt=""
            className="ml-[35px] cursor-pointer"
            onClick={() => setVisible(!visible)}
          />
          {visible && (
            <div
              className="absolute top-[63px] right-[-115px] z-50"
              ref={wrapperRef}
            >
              <div className="flex justify-end">
                <img
                  src={IconClose}
                  alt=""
                  className="bg-black cursor-pointer"
                  onClick={() => setVisible(!visible)}
                />
              </div>
              <div className=" bg-gray400 flex flex-col w-[280px]">
                {menuData.map((item, index) => (
                  <NavLink
                    key={index}
                    className="px-[32px] py-[23px] text-white border-b-[2px] border-borderLine last:border-b-0 border-opacity-[0.2] text-[18px]"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Nav
