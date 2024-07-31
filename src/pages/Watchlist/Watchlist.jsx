import { useEffect, useState } from "react";
import { getAnimeDetails } from "../../Hooks/Api";
import Loading from "../../components/layouts/Loading/Loading";
import WatchlistCard from "../../components/fragments/WatchlistCard/WatchlistCard";
import Title from "../../components/elements/Title/Title";

const Watchlist = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getBookmarkData() {
            try {
                const result = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                const updatedBookmarks = await Promise.all(result.map(async (bookmark) => {
                    return await getAnimeDetails(bookmark);
                }));
                setBookmarks(updatedBookmarks);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        getBookmarkData();
    }, [bookmarks])

    return(
        <>
            {
                isLoading ? <Loading /> :
                (bookmarks.length > 0 ? (
                    <div className="my-10 mx-auto md:max-w-[70%] max-w-[90%] min-h-screen">
                        <Title>Watchlist</Title>
                        {bookmarks.map((anime, index) => (
                            <WatchlistCard
                                key={index}
                                title={anime.title}
                                href={`/anime/${anime.anime_id}`}
                                total_eps={anime.total_episode}
                                imgUrl={anime.thumb}
                                genres={anime.genre_list}
                                status={anime.status}
                                type={anime.type}
                                score={anime.score}
                            />
                        )).reverse()}
                    </div>
                ) : (
                    <div className="my-10 font-poppins mx-auto text-white md:max-w-[70%] max-w-[90%] h-[80vh]">
                        <Title>Watchlist</Title>
                        <p className="mt-8 text-center">No Bookmarks</p>
                    </div>
                ))
            }
        </>
    );
}

export default Watchlist;