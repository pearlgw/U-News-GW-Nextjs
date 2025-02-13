import { getNewsSearch } from "@/api"
import Article from "@/components/article";
import { removeDuplicateData } from "@/utils";

const Business = async () => {
    const newsBusiness = await getNewsSearch("business");
    const filterArticles = removeDuplicateData(newsBusiness)
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

export default Business
