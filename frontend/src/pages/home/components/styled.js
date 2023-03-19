import styled from 'styled-components'
import tw from 'twin.macro'

export const WrapperColumn = styled.div`
  ${tw`flex items-center gap-[48px] mb-[56px]`}
`

export const ColumnStyled = styled.div`
  ${tw`py-[24px] px-[20px] bg-yellow300 w-[288px] h-[288px] relative`}
`

export const StyledImg = styled.img`
  ${tw`w-full h-full object-cover bg-black500`}
`
export const ColumnContent = styled.div`
  ${tw`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center gap-3 w-full max-w-[240px]`}
`

export const WrapperDiary = styled.div`
  ${tw`mt-[88px]`}
`
