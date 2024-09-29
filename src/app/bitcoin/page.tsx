import { getNewsSearch } from "@/api"
import Article from "@/components/article";
import { removeDuplicateData } from "@/utils";

const Bitcoin = async () => {
    const newsBitcoin = await getNewsSearch("bitcoin");
    const filterArticles = removeDuplicateData(newsBitcoin)
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

export default Bitcoin
