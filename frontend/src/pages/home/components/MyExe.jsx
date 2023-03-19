import React, { useEffect, useState } from 'react'
import api from '../../../config/axios'
import Dot from '../../../assets/svg/dot.svg'
import InfiniteScroll from 'react-infinite-scroll-component'
const MyExe = () => {
  const [data, setData] = useState([])
  const [pages, setPages] = useState(1)
  const defaultPerPage = 10
  const handleGetExercise = async () => {
    const result = await api.get(
      `/exercise?date=2023-03-18&page=${pages}&limit=${defaultPerPage}`,
    )
    setData((preData) => [...preData, ...result?.data?.docs])
  }
  const loadMore = () => {
    setPages(pages + 1)
  }
  useEffect(() => {
    handleGetExercise()
  }, [pages])

  return (
    <div className="h-[264px] px-[16px] py-[24px] bg-textColor mt-[56px]">
      <div className="flex gap-8">
        <h2 className="text-[18px] text-white mb-2 block">
          MY <br /> EXERCISE
        </h2>
        <h2 className="text-[18px] text-white ml-[16px]">2021.05.21</h2>
      </div>
      <div className="h-[calc(264px-80px)]  overflow-auto">
        <InfiniteScroll
          dataLength={data?.length}
          next={loadMore}
          hasMore={true}
          height={184}
        >
          <div className="grid grid-cols-2 gap-x-[42px] w-[100%] ">
            {data?.map((value, index) => (
              <div
                key={index}
                className="cursor-pointer flex justify-between border-b-[1px] border-gray400"
              >
                <div className="flex">
                  <img src={Dot} alt="" className="w-[5px] h-[22px] mr-[8px]" />
                  <div className="flex flex-col">
                    <span className=" text-white">{value?.description}</span>
                    <span className=" text-yellow300">{value?.energy}kcal</span>
                  </div>
                </div>
                <span className=" text-yellow300">{value?.totalTime} min</span>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default MyExe
