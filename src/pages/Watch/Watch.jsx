import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeDetails, getAnimeNews, getEpisodeDetails, getOngoingAnime } from "../../Hooks/Api";
import IframeVideo from "../../components/fragments/IframeVideo/IframeVideo";
import Aside from "../../components/fragments/Aside/Aside";
import AsideCard from "../../components/elements/AsideCard/AsideCard";
import Title from "../../components/elements/Title/Title";
import Loading from "../../components/layouts/Loading/Loading";
import Slider from "../../components/layouts/Slider/Slider";
import Card from "../../components/elements/Card/Card";
import Navigation from "../../components/elements/Navigation/Navigation";
import DetailCard from "../../components/elements/DetailCard/DetailCard";

const Watch = () => {
    const {slug} = useParams();

    const [epsData, setEpsData] = useState();
    const [newsAnimeData, setNewsAnimeData] = useState([]);
    const [ongoingAnime, setOngoingAnime] = useState([]);
    const [streamQuality, setStreamQuality] = useState('sd');
    const [animeData, setAnimeData] = useState();

    useEffect(() => {
        async function ongoingAnime() {
            try {
                const result = await getOngoingAnime(1);
                setOngoingAnime(result);
            } catch (error) {
                console.log(error);
            }
        }

        ongoingAnime()
    }, [])

    useEffect(() => {
        async function epsDetails() {
            try {
                const result = await getEpisodeDetails(slug);
                const animeDetailsResult = await getAnimeDetails(result.id);
                setEpsData(result);
                setAnimeData(animeDetailsResult);
            } catch (error) {
                console.log(error);
            }
        }

        epsDetails()
    }, [slug])

    useEffect(() => {
        async function animeNews() {
            try {
                const result = await getAnimeNews();
                setNewsAnimeData(result);
            } catch (error) {
                console.log(error);
            }
        }

        animeNews()
    }, [])

    return (
        <>
            {(epsData && animeData && newsAnimeData && ongoingAnime.status === "success") ? (
                <>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-7 py-7 px-3 md:px-7 bg-bg-aniflix text-white">
                    <div className="lg:col-span-7">
                        <div>
                            <h1 className="font-bold text-xl md:text-3xl py-3 px-3 mb-3">Nonton {epsData.title}</h1>
                            <IframeVideo 
                                title={epsData.title}
                                streamUrl={epsData.stream_link}
                                quality={streamQuality}
                            />
                            <Navigation 
                                prevSlug={epsData.prev_eps_slug}
                                nextSlug={epsData.next_eps_slug}
                                slug={epsData.id}
                            />
                            <div className="my-3 p-2 text-sm md:text-base border-aniflix border font-poppins">
                                <div className="flex gap-2 font-semibold items-center justify-center ">
                                    <p>Kualitas : </p>
                                    <button className={streamQuality === 'sd' ? `py-1 px-2 rounded-sm bg-aniflix` : `py-1 px-2 rounded-sm`} onClick={() => setStreamQuality('sd')}>SD 480p</button>
                                    <button className={streamQuality === 'hd' ? `py-1 px-2 rounded-sm bg-aniflix` : `py-1 px-2 rounded-sm`} onClick={() => setStreamQuality('hd')}>HD 720p</button>
                                </div>
                                <p className="text-center text-[11px] mt-2">*Kualitas HD tidak selalu ada karena limitasi akses ke server sumber</p>
                            </div>
                            <DetailCard
                                title={animeData.title}
                                poster={animeData?.thumb}
                                synopsis={animeData?.synopsis}
                                slug={animeData.anime_id}
                            />
                        </div>
                        <div className="my-6">
                            <Title>Rekomendasi Anime</Title>
                            <Slider>
                                {
                                    ongoingAnime.animeList.map((data, index) => {
                                        return(
                                            <div className="swiper-slide" key={index}>
                                                <Card
                                                    key={index}
                                                    imgUrl={data.thumb}
                                                    href={`/anime/${data.id}`}
                                                    title={data.title}
                                                    episode={data.episode}
                                                    rating="Baru"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="lg:col-span-3 mt-0 lg:mt-16 px-3">
                        <Title>Berita</Title>
                        <div className="bg-bg-aniflix-semi">
                            <Aside>
                                {
                                    newsAnimeData ? (newsAnimeData.slice(0, 5).map((data, index) => {
                                        return (
                                            <AsideCard
                                                key={index}
                                                imgUrl={data.thumbnail}
                                                title={data.title}
                                                href={data.url}
                                                topics={data.topics}
                                                uploaded={data.uploadedAt}
                                            />
                                        )
                                    })) : <p>Loading...</p>
                                }
                            </Aside>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Watch