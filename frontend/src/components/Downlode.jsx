/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { toast } from "react-hot-toast"
import { saveAs } from 'file-saver'

const Downlode = ({ imageUrl }) => {
    const handleDownload = async (url) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg'; // Change this to your preferred name
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (
        <>
            <div className=' hover:text-blue-700 hover:cursor-pointer bg-blue-700  px-2 py-1 rounded'
                onClick={() => handleDownload(imageUrl)}
            >
                <div className='h-10 w-[30px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                </div>
            </div>
        </>
    )
}

export default Downlode