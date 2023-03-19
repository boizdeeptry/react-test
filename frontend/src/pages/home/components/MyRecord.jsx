import React from 'react'
import { ColumnContent, ColumnStyled, StyledImg, WrapperColumn } from './styled'
import LineChart from '../chart/index'
import imagesRecord1 from '../../../assets/images/imagesRecord1.png'
import imagesRecord2 from '../../../assets/images/imagesRecord2.png'
import imagesRecord3 from '../../../assets/images/imagesRecord3.png'

const MyRecord = () => {
  const dataColumn = [
    {
      images: imagesRecord1,
      title: 'Body record',
      content: '自分のカラダの記録',
    },
    {
      images: imagesRecord2,
      title: 'My exercise',
      content: '自分の運動の記録',
    },
    {
      images: imagesRecord3,
      title: 'My diary',
      content: '自分の日記',
    },
  ]
  return (
    <>
      <WrapperColumn>
        {dataColumn.map((item, index) => (
          <ColumnStyled key={index}>
            <StyledImg src={item.images} alt="" />
            <ColumnContent>
              <span className="text-yellow300 uppercase text-[25px] font-normal">
                {item.title}
              </span>
              <span className="bg-orange400 text-white text-[14px] px-2 py-1 w-[60%] block m-auto">
                {item.content}
              </span>
            </ColumnContent>
          </ColumnStyled>
        ))}
      </WrapperColumn>

      <LineChart />
    </>
  )
}

export default MyRecord
