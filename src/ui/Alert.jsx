import React, {useEffect, useState} from 'react'
import './Alert.css'

export default function Alert({alert, header, body, open}) {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    function toggleOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`alert ${alert} ${isOpen ? 'block' : 'hidden'}`}
             role="alert">
            <div className="flex pr-10">
                <div className="py-1">
                    <svg className={`${alert === 'success' ? 'fill-blue' : 'fill-[red]'} h-6 w-6 text-teal-500 mr-4`} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                    </svg>
                </div>
                <div>
                    <p className="font-bold">{header}</p>
                    <p className="text-sm">{body}</p>
                </div>
            </div>
            <button className='x-button' onClick={toggleOpen}>x</button>
        </div>
    )
}