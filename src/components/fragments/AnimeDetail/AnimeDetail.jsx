import React from 'react';

const AnimeDetail = (props) => {
    const {children} = props;

    return(
        <div className="lg:col-span-2 bg-bg-aniflix-2 bg-opacity-55 h-full w-full py-10 px-6 z-[2]">
            {children}
        </div>
    )
}

export default AnimeDetail;