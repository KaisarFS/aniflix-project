import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-aniflix justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[40%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">Selamat Datang di <span className="text-aniflix">Aniflix</span></h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left">Tonton anime favoritmu secara gratis dengan subtitle Indonesia di Aniflix! 🎬✨ Temukan beragam anime terbaru dan klasik yang bisa kamu nikmati kapan saja dan di mana saja. Dengan Aniflix, hiburan seru ada di genggamanmu. Yuk, rasakan pengalaman menonton anime yang tak terlupakan!  🐾🎉</p>
                </div>
                {/* <img src="yuna-kuma.png" alt="yuna kuma bear" className="w-[200px] hidden md:block" /> */}
                <img src="yuna-kuma.png" alt="yuna kuma bear" className="hidden md:block" style={{width: '300px'}}/>
            </div>
        </>
    )
}

export default Hero;