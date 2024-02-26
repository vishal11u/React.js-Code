import React from 'react'

function ImageUpload({ handleButtonClick, imageFile, fileInputRef, handleImageChange }) {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='h-[19.9vh] shadow border w-[7.5vw] overflow-hidden'>
                    <button onClick={handleButtonClick} style={{ cursor: 'pointer', padding: '6.2px' }}>
                        {imageFile ? (
                            <>
                                <img className='' src={URL.createObjectURL(imageFile)} alt="Uploaded" style={{ maxWidth: '100px' }} />
                                <img className='h-6 pt-1 mx-auto z-10' src='https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsnormal_93488.png' alt='' />
                            </>
                        ) : (
                            <>
                                <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" className=' border' alt="Dummy Person" style={{ width: '100px', height: '100px', marginBottom: '5px' }} />
                                <p className='text-sm'>+Upload</p>
                            </>
                        )}
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
            </div>
        </>
    )
}

export default ImageUpload;