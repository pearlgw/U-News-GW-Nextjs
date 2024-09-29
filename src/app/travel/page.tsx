import { getNewsSearch } from "@/api"
import Article from "@/components/article";
import { removeDuplicateData } from "@/utils";

const Travel = async () => {
    const newsTravel = await getNewsSearch("travel");
    const filterArticles = removeDuplicateData(newsTravel)
    return (
        <div className="w-[700px]">
            {filterArticles.map((article, idx) => (
                <div key={`${article?.title}-${idx}`}>
                    <Article data={article} />
                </div>
            ))}
        </div>
    )
}

export default Travel
