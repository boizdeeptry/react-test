import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import api from '../../../config/axios'
import { WrapperDiary } from './styled'

const MyDiary = () => {
  const [dataDiary, setDataDiary] = useState([])
  const [pages, setPages] = useState(1)
  const defaultPerPage = 10
  const handleGetDiary = async () => {
    const result = await api.get(
      `/diary?date=2023-03-18&page=${pages}&limit=${defaultPerPage}`,
    )
    setDataDiary((preData) => [...preData, ...result?.data?.docs])
  }
  useEffect(() => {
    handleGetDiary()
  }, [pages])
  const handleLoadMore = () => {
    setPages(pages + 1)
  }
  return (
    <WrapperDiary>
      <span className="uppercase text-[18px] mb-[10px] block">My diary</span>
      <div className="flex items-center gap-[12px] flex-wrap mb-[30px]">
        {dataDiary?.map((item) => (
          <div
            key={item?._id}
            className="flex flex-col gap-2 p-4 border-[2px] border-borderColor w-[231px] h-[231px]"
          >
            <span className="w-[60%] text-[18px]">
              {moment(item?.createdAt).format('YYYY-MM-DD HH:mm')}
            </span>
            <span className="w-full text-[14px]">{item?.description}</span>
          </div>
        ))}
      </div>
      <Button onClick={handleLoadMore}>自分の日記をもっと見る</Button>
    </WrapperDiary>
  )
}

export default MyDiary
