import React, { useEffect, useState } from 'react'
import ToTop from '../../assets/svg/component_scroll.svg'

import Bg from '../../assets/svg/anh.svg'

import mainPhoto1 from '../../assets/images/mainPhoto1.png'
import mainPhoto2 from '../../assets/images/mainPhoto2.png'
import mainText from '../../assets/images/mainText.png'
import Button from '../../components/Button'
import { filterData, menuData } from '../../constants/menuData'
const Home = () => {
  const [data, setData] = useState(menuData)
  const [filler, setFiller] = useState('')
  const [defaultPerPage, setDefaultPerPage] = useState(8)

  const handleGetData = () => {
    const result = menuData.filter((item) => item.value === filler)
    setData(result)
  }

  useEffect(() => {
    handleGetData()
  }, [filler])

  const loadMore = () => {
    setDefaultPerPage((preValue) => preValue + 4)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[540px] h-[312px] relative">
          <img src={mainPhoto1} alt="" className="w-full h-full object-cover" />
          <img
            src={mainText}
            alt=""
            className="w-[181px] h-[181px] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className="bg-black600 pl-[53px] pr-[98px] h-[312px] py-[16px]">
          <img src={mainPhoto2} alt="" className="w-full h-full object-fill" />
        </div>
      </div>
      <div className="m-auto max-w-[960px] pb-[64px] relative">
        <div className="flex gap-[74px] justify-center my-[24px]">
          {filterData.map((item, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] cursor-pointer relative"
              onClick={() => setFiller(item.value)}
            >
              <img
                src={Bg}
                alt=""
                className="w-[100%] h-[100%] absolute top-0 left-0"
              />
              <div className="relative z-50 flex flex-col items-center h-[100%] justify-center">
                <img src={item.images} alt="" className="w-[45px] h-[45px] " />
                <span className="text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex my-[10px] mb-[28px]">
          <div className="grid grid-cols-4 gap-[8px] w-[100%]">
            {data.length
              ? data.slice(0, defaultPerPage)?.map((value, index) => (
                  <div
                    key={index}
                    className="h-[241.53px] relative cursor-pointer"
                  >
                    <img
                      src={value.images}
                      alt=""
                      className="w-[100%] h-[100%]"
                    />
                    <span className="absolute left-0 bottom-0 p-[8px] bg-yellow300 text-white">
                      {`${value?.date} ${value.title}`}
                    </span>
                  </div>
                ))
              : menuData?.slice(0, defaultPerPage).map((value, index) => (
                  <div
                    key={index}
                    className="h-[241.53px] relative cursor-pointer"
                  >
                    <img
                      src={value.images}
                      alt=""
                      className="w-[100%] h-[100%]"
                    />
                    <span className="absolute left-0 bottom-0 p-[8px] bg-yellow300 text-white">
                      {`${value?.date} ${value.title}`}
                    </span>
                  </div>
                ))}
          </div>
        </div>
        <Button
          className="h-[56px] w-[296px] m-auto flex items-center justify-center bg-gradient-to-t from-yellow300 to-orange400  cursor-pointer rounded text-white"
          onClick={loadMore}
        >
          記録をもっと見る
        </Button>
        <img
          src={ToTop}
          alt=""
          className="fixed right-[calc(10vw/2)] top-[50%] cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        />
      </div>
    </>
  )
}

export default Home
