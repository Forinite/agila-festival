import {feedFilterBtnList, feedList} from "@/app/constants";
import Feed from "@/app/components/ui/feed";
import SearchForm from "@/app/components/ui/SearchForm";

const MediaFeed: React.FC = () => {
    return (
        <section id="media" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                        Cultural <span className="text-red-500">Highlights</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience the vibrant moments, traditional dances, colorful parades, and cultural celebrations that make Ijega Festival unforgettable
                    </p>
                </div>
                <div className={`flex flex-wrap justify-center gap-3 mb-8 px-32` } >
                    <SearchForm />
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <button
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-colors bg-red-500 text-white  hover:text-gray-100 cursor-pointer hover:bg-red-600 border '}`}
                    >
                        All Moments
                    </button>
                    {feedFilterBtnList.map((item, index) => (
                        <button
                            key={item}
                            className={`px-4 py-2 rounded-full font-medium cursor-pointer text-sm transition-colors bg-red-500' text-white'  'bg-white text-gray-700 hover:bg-gray-100 border`}
                        >
                            #{item}
                        </button>
                    ))}
                </div>

                <div className="masonry-grid columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {feedList.map((item, index) => (
                        <div key={`${item.title}-${index}`} className="masonry-item break-insie-avoid group cursor-pointer mb-4">
                            <Feed feedInfo={item} />
                        </div>
                    ))}
                </div>

                {feedList.length > 8 && (
                    <div className="text-center mt-12">
                        <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
                            Load More Moments
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MediaFeed;
