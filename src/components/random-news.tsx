import { getNewsSearch } from "@/api"
import { removeDuplicateData } from "@/utils"
import RandomArticle from "./random-article";

const RandomNews = async () => {
    const randomNews = await getNewsSearch('random news');
    const filterArticles = removeDuplicateData(randomNews);
    return (
        <div className="mt-4 w-[450px]">
            <h1 className="pl-2 text-2xl font-bold underline">Random News</h1>
            {filterArticles.map((article, idx) => (
                <div key={`${article?.title}-${idx}`}>
                    <RandomArticle data={article} />
                </div>
            ))}
        </div>
    )
}

export default RandomNews
