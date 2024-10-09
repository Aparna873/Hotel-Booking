import React from 'react'

export const Card = () => {
    return (
        <>
            <div className='flex p-10 text-white'>
                <span className='flex flex-col  bg-slate-600 p-12 rounded-lg'>
                    <h1 className='flex flex-row font-bold font-sans text-2xl mb-4'>
                        Welcome to Your Perfect Getaway
                    </h1>
                    <p>
                        Escape the ordinary and discover an extraordinary stay at our hotel.
                        Whether you're looking for a peaceful retreat, a luxurious escape, or a family-friendly vacation, we have everything you need to make your stay unforgettable.
                        Relax in our spacious rooms, savor gourmet dining, and enjoy personalized services that cater to your every need.
                        Your comfort is our priority, and your satisfaction is our mission.
                    </p>
                </span>
            </div>
            <div className='flex p-10 text-white'>
                <span className='flex flex-col  bg-slate-600 p-12 rounded-lg'>
                    <h1 className='flex flex-row font-bold font-sans text-2xl mb-4'>
                        Discover Your Perfect Escape
                    </h1>
                    <p>
                        Imagine waking up to the sound of gentle waves lapping against the shore, or the sight of majestic mountains bathed in the morning sun.
                        Whether you're looking for a serene getaway or an adventure-filled trip, finding the perfect place to stay makes all the difference.
                        Our carefully curated selection of hotels offers everything from cozy, budget-friendly lodgings to luxury resorts, ensuring there's something for everyone.
                        Let us help you discover the ideal retreat where you can relax, recharge, and experience a journey to remember.
                        Your perfect escape is just a click away, so why wait?
                    </p>
                </span>
            </div>

        </>
    );
}
