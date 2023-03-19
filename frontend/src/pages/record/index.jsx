import React, { useEffect, useState } from 'react'
import ToTop from '../../assets/svg/component_scroll.svg'

import Bg from '../../assets/svg/anh.svg'
import San from '../../assets/svg/san.svg'
import Knife from '../../assets/svg/icon_knife.svg'
import Coffee from '../../assets/svg/coffee.svg'

import mainPhoto1 from '../../assets/images/mainPhoto1.png'
import mainPhoto2 from '../../assets/images/mainPhoto2.png'
import mainText from '../../assets/images/mainText.png'
const MyPage = () => {
  const [data, setData] = useState()
  const [filler, setFiller] = useState({ page: 1, limit: 8, string: 'all' })

  const fetchData = () => {
    if (filler.page === 1) {
      setData(
        Array(filler.limit).fill({
          date: `0${filler?.string}.21.Morning`,
          image: San,
        }),
      )
    } else {
      setData((prev) => [
        ...prev,
        ...Array(filler.limit).fill({
          date: `0${filler.string}.21.Morning`,
          image: San,
        }),
      ])
    }
  }

  useEffect(() => {
    fetchData()
  }, [filler])

  const filter = (value) => {
    setFiller((prev) => ({ ...prev, string: value, page: 1 }))
  }

  const loadMore = () => {
    setFiller((prev) => ({ ...prev, page: prev + 1 }))
  }

  return (
    <div className="m-auto max-w-[960px] pb-[64px] relative">
      <div className="flex items-center">
        <div className="w-[45%] h-[265px] relative">
          <img src={mainPhoto1} alt="" className="w-full h-full object-cover" />
          <img
            src={mainText}
            alt=""
            className="w-[181px] h-[181px] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className="bg-black600 pl-[53px] pr-[98px] py-[16px]">
          <img
            src={mainPhoto2}
            alt=""
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
      <div className="flex gap-[74px] justify-center my-[24px]">
        <div
          className="w-[100px] h-[100px] cursor-pointer relative"
          onClick={() => filter(1)}
        >
          <img
            src={Bg}
            alt=""
            className="w-[100%] h-[100%] absolute top-0 left-0"
          />
          <div className="relative z-50 flex flex-col items-center h-[100%] justify-center">
            <img src={Knife} alt="" className="w-[45px] h-[45px] " />
            <span className="text-white">Morning</span>
          </div>
        </div>
        <div
          className="w-[100px] h-[100px] cursor-pointer relative"
          onClick={() => filter(1)}
        >
          <img
            src={Bg}
            alt=""
            className="w-[100%] h-[100%] absolute top-0 left-0"
          />
          <div className="relative z-50 flex flex-col items-center h-[100%] justify-center">
            <img src={Knife} alt="" className="w-[45px] h-[45px] " />
            <span className="text-white">Lunch</span>
          </div>
        </div>
        <div
          className="w-[100px] h-[100px] cursor-pointer relative"
          onClick={() => filter(2)}
        >
          <img
            src={Bg}
            alt=""
            className="w-[100%] h-[100%] absolute top-0 left-0"
          />
          <div className="relative z-50 flex flex-col items-center h-[100%] justify-center">
            <img src={Knife} alt="" className="w-[45px] h-[45px] " />
            <span className="text-white">Dinner</span>
          </div>
        </div>
        <div
          className="w-[100px] h-[100px] cursor-pointer relative"
          onClick={() => filter(3)}
        >
          <img
            src={Bg}
            alt=""
            className="w-[100%] h-[100%] absolute top-0 left-0"
          />
          <div className="relative z-50 flex flex-col items-center h-[100%] justify-center">
            <img src={Coffee} alt="" className="w-[34px] h-[40px] " />
            <span className="text-white">Snack</span>
          </div>
        </div>
      </div>
      <div className="flex my-[10px] mb-[28px]">
        <div className="grid grid-cols-4 gap-[8px] w-[100%]">
          {data?.map((value, index) => (
            <div key={index} className="h-[241.53px] relative cursor-pointer">
              <img src={value.image} alt="" className="w-[100%] h-[100%]" />
              <span className="absolute left-0 bottom-0 p-[8px] bg-yellow300 text-white">
                {value?.date}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-[56px] w-[296px] m-auto flex items-center justify-center bg-gradient-to-t from-yellow300 to-orange400  cursor-pointer rounded text-white"
        onClick={loadMore}
      >
        記録をもっと見る
      </div>
      <img
        src={ToTop}
        alt=""
        className="fixed right-[calc(10vw/2)] top-[50%] cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      />
    </div>
  )
}

export default MyPage
