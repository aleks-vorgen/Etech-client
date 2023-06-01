import React, {useState} from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

//TODO
export default function CartModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <button onClick={handleOpen}>
                <img src='/images/cart.svg' alt='cart.svg'/>
            </button>
            <Dialog open={open} id='DURAK' handler={handleOpen} className='absolute border border-black rounded-[3px] top-52 left-[50%]'
                    animate={{
                        mount: {scale: 1, y: 0},
                        unmount: {scale: 0.9, y: -100},
                    }}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    Lorem, ipsum dolor sit
                </DialogBody>
                <DialogFooter>
                    <button onClick={handleOpen} className="mr-1">
                        <span>Cancel</span>
                    </button>
                    <button onClick={handleOpen}>
                        <span>Confirm</span>
                    </button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}