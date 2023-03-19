import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-black500 ">
      <div className="h-[128px] m-auto flex max-w-[960px] items-center gap-[45px] text-white text-[16px]">
        <span className="text-[11px] cursor-pointer">会員登録</span>
        <span className="text-[11px] cursor-pointer">運営会社</span>
        <span className="text-[11px] cursor-pointer">利用規約</span>
        <span className="text-[11px] cursor-pointer">
          個人情報の取扱について
        </span>
        <span className="text-[11px] cursor-pointer">
          特定商取引法に基づく表記
        </span>
        <span className="text-[11px] cursor-pointer">お問い合わせ</span>
      </div>
    </div>
  )
}

export default Footer
