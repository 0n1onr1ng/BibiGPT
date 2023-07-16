import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
        <Header />
        <div className='mt-24 px-4 lg:px-16 flex flex-col items-center justify-center'>
        <div className="prose">
            <h1>About Me</h1>
            <p>扫描下方二维码添加客服微信哦</p>
            <a target="_blank" rel="noopener noreferrer">
                <Image src="/wechat.jpg" alt="logo" className="animate-bounce" width={256} height={256} />
            </a>
        </div>
        </div>
       
        <Footer />
        </>

    )
}

export default page