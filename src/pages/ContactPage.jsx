import React from 'react'

export function ContactPage() {
    return (
        <div className='w-[1110px] mx-auto'>
            <div className='w-[30%] border border-[lightGray] rounded-[3px] my-10 py-7 px-7 min-w-[250px]'>
                <p className='font-[700] text=[16px] leading-[20px] tracking-[0.15em]'>КОНТАКТИ</p>
                <div className='h-0 border my-2'></div>
                <div>
                    <a href='tel:+380995166544'
                       className='font-[400] text-[14px] leading-[15px] my-5 flex'>
                        <img src="/public/images/contacts/phone.svg" alt=""/>
                        <span className='ml-2'>(+380) 995-166-544</span>
                    </a>
                </div>
                <div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kulykov.o@student.sumdu.edu.ua"
                       target="_blank"
                       className='font-[400] text-[14px] leading-[15px] my-5 flex'>
                        <img src="/public/images/contacts/email.svg" alt=""/>
                        <span className='ml-2'>silex@shop.app</span>
                    </a>
                </div>
                <div>
                    <a href='https://instagram.com'
                       target='_blank'
                       className='font-[400] text-[14px] leading-[15px] my-5 flex'>
                        <img src="/public/images/contacts/socials/instagram.svg" alt="Instagram"/>
                        <span className='ml-2'>silex.shop</span>
                    </a>
                </div>
                <div className='w-min'>
                    <a href='https://t.me/ALexus619'
                       target='_blank'
                       className='font-[400] text-[14px] leading-[15px] flex'>
                        <img src="/public/images/contacts/socials/telegram.svg" alt="Telegram"/>
                        <span className='ml-2'>silex_shop</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage