import { useParams } from "react-router-dom"
import Pagination from "../../components/elements/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { getOngoingAnime } from "../../Hooks/Api/index.js";
import Loading from "../../components/layouts/Loading/Loading.jsx";
import Title from "../../components/elements/Title/Title.jsx";
import Card from "../../components/elements/Card/Card.jsx";

const Ongoing = () => {
    const {page} = useParams();
    const [ongoingAnime, setOngoingAnime] = useState([]);

    useEffect(() => {
        async function ongoingAnime() {
            try {
                const result = await getOngoingAnime(page);
                setOngoingAnime(result);
            } catch (error) {
                console.log(error)
            }
        }

        ongoingAnime()
    }, [page])

    return(
        <>
            {
                ongoingAnime.status === "success" ? (
                    (<main className="px-5 md:px-10 lg:px-16 my-14">
                    <Title>Ongoing Anime List</Title>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 px-6">
                    {
                        ongoingAnime.animeList.map((data, index) => {
                            return(
                                <Card
                                    key={index}
                                    imgUrl={data.thumb}
                                    href={`/anime/${data.id}`}
                                    title={data.title}
                                    episode={data.episode}
                                    rating={data.day_updated}
                                />
                            )
                        })
                    }
                    </div>
                    <Pagination currentPage={parseInt(page) || 1} totalPages={ongoingAnime.maxPage} destination="ongoing" />
                </main>)
                ) : <Loading />
            }
            </>
    )
}

export default Ongoing;