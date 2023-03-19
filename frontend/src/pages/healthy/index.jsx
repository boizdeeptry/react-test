import React, { useEffect, useState } from 'react'
import { recommendContent, recommendTitle } from '../../constants/dataRecommend' // mock data
import {
  RecommendContent,
  RecommendWrapper,
  StyledImg,
  Text,
  Title,
  Wrapper,
  WrapperColumn,
  WrapperContent,
  WrapperContentImage,
  WrapperTags,
} from './styled'
import ToTop from '../../assets/svg/component_scroll.svg'
import Button from '../../components/Button'

const Healthy = () => {
  const [filter, setFilter] = useState('column')
  const [defaultValue, setDefaultValue] = useState(8)

  const [recommendData, setRecommendData] = useState(recommendContent) // fake data

  const showMoreItems = () => {
    setDefaultValue((preValue) => preValue + 4)
  }

  const handleChangeFilter = (value) => {
    const result = recommendContent.filter((item) => item.value === value) // don't have api filter
    setRecommendData(result)
  }

  useEffect(() => {
    handleChangeFilter(filter)
    setDefaultValue(8)
  }, [filter])

  return (
    <Wrapper className="pt-[56px] pb-[64px] w-full max-w-[960px] m-auto">
      {/* filter column */}
      <RecommendWrapper>
        {recommendTitle.map((item, index) => (
          <WrapperColumn key={index} onClick={() => setFilter(item.value)}>
            <Title>Recommended {item.title}</Title>
            <hr className="w-[40%] mx-auto mb-2 text-white" />
            <Text className="text-white">{item.content}</Text>
          </WrapperColumn>
        ))}
      </RecommendWrapper>
      {/* data after filter */}
      <RecommendContent>
        {recommendData.slice(0, defaultValue).map((item, idx) => (
          <WrapperContent key={idx}>
            <WrapperContentImage>
              <StyledImg
                src={item.images}
                alt={item.images}
                className="w-full h-full object-cover"
              />
              <Text className="bg-yellow300 text-white px-2 py-1 absolute left-0 bottom-0 text-[15px]">
                {item.date} {item.time}
              </Text>
            </WrapperContentImage>
            <Text className="w-full max-w-[234px] text-[15px] text-textColor mb-2 block">
              {item.content}
            </Text>
            <WrapperTags className="">
              {item.tags.map((value) => (
                <Text className="text-orange400 text-xs" key={value.id}>
                  #{value.title}
                </Text>
              ))}
            </WrapperTags>
          </WrapperContent>
        ))}
      </RecommendContent>
      {/* load more button */}
      <Button onClick={showMoreItems}>コラムをもっと見る</Button>
      <StyledImg
        src={ToTop}
        alt=""
        className="fixed right-[calc(8vw/2)] top-[65%] cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      />
    </Wrapper>
  )
}

export default Healthy
