import React from 'react'

export function ContactPage() {
    return (
        <div className='w-[60%] mx-auto' style={{fontFamily: 'Montserrat'}}>
            <div className='w-[30%] border border-[lightGray] rounded-[3px] my-10 py-7 px-7 min-w-[250px]'>
                <p className='font-[700] text=[16px] leading-[20px] tracking-[0.15em]'>КОНТАКТИ</p>
                <div className='h-0 border my-2'></div>
                <div>
                    <p className='font-[400] text-[14px] leading-[15px] my-5 flex'>
                        <img src="/src/images/contacts/phone.svg" alt=""/>
                        <span className='ml-2'>(+380) 995-166-544</span>
                    </p>
                </div>
                <div>
                    <a href="mailto:kulykov.o@student.sumdu.edu.ua"
                       className='font-[400] text-[14px] leading-[15px] my-5 flex'>
                        <img src="/src/images/contacts/email.svg" alt=""/>
                        <span className='ml-2'>e_tech@shop.com</span>
                    </a>
                </div>
                <div>
                    <p className='flex gap-2 mt-5 ml-6'>
                        <a href='https://instagram.com' target='_blank' className=''>
                            <img src="/src/images/contacts/socials/instagram.svg" alt="Instagram"/>
                        </a>
                        <a href='https://telegram.org' target='_blank'>
                            <img src="/src/images/contacts/socials/telegram.svg" alt="Telegram"/>
                        </a>
                        <a href='https://facebook.com' target='_blank'>
                            <img src="/src/images/contacts/socials/facebook.svg" alt="Facebook"/>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage