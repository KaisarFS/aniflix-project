import { useParams } from "react-router-dom"
import Pagination from "../../components/elements/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { getCompletedAnime } from "../../Hooks/Api/index.js";
import Loading from "../../components/layouts/Loading/Loading.jsx";
import Title from "../../components/elements/Title/Title.jsx";
import Card from "../../components/elements/Card/Card.jsx";

const Completed = () => {
    const {page} = useParams();
    const [completedAnime, setCompletedAnime] = useState([]);

    useEffect(() => {
        async function completedAnime() {
            try {
                const result = await getCompletedAnime(page);
                setCompletedAnime(result);
            } catch (error) {
                console.log(error)
            }
        }

        completedAnime()
    }, [page])

    return(
        <>
            {
                completedAnime.status === "success" ? (
                    (<main className="px-5 md:px-10 lg:px-16 my-14">
                    <Title>Completed Anime List</Title>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 px-6">
                    {
                        completedAnime.animeList.map((data, index) => {
                            return(
                                <Card
                                    key={index}
                                    imgUrl={data.thumb}
                                    href={`/anime/${data.id}`}
                                    title={data.title}
                                    episode={data.episode.replace("Episode", " Episode")}
                                    rating={`☆ ${data.score}`}
                                />
                            )
                        })
                    }
                    </div>
                    <Pagination currentPage={parseInt(page) || 1} totalPages={completedAnime.maxPage} destination="completed" />
                </main>)
                ) : <Loading />
            }
            </>
    )
}

export default Completed;