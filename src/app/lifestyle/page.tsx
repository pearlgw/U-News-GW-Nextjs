import { getNewsSearch } from "@/api"
import Article from "@/components/article";
import { removeDuplicateData } from "@/utils";

const Lifestyle = async () => {
    const newsLifestyle = await getNewsSearch("lifestyle");
    const filterArticles = removeDuplicateData(newsLifestyle)
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

export default Lifestyle
