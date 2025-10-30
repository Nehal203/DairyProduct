import { useMemo, useState } from "react";
import blogItems from "./Blogitems";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

const Blog = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil((blogItems?.length || 0) / ITEMS_PER_PAGE) || 1;

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return blogItems.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="blog" className="pt-28">
      <div className="w-full bg-[#39251A] text-white">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <h3 className="text-2xl tracking-wide">Blog</h3>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-200 rounded-xl shadow-lg"
              >
                <Link to={`/blog/${item.id}`}>
                  <div>
                    <img src={item.image} alt="" className="w-full h-64 object-cover" />
                  </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                  <div className="flex items-center gap-2">
                    <p className="w-10 h-10 rounded-full bg-[#FDC040] text-white flex items-center justify-center">
                      <UserIcon className="w-6 h-6" />
                    </p>
                    <p>Posted by {item.author}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="w-10 h-10 rounded-full text-black flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6" />
                    </p>
                    <p>{item.date}</p>
                  </div>
                </div>
                <div className="p-2">
                  <Link to={`/blog/${item.id}`} className="hover:underline">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                  </Link>
                </div>
                <div className="p-2">
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="mt-4 mb-4">
                  <Link
                    to={`/blog/${item.id}`}
                    className="inline-block text-underline/2 text-black font-semibold px-5 py-2 hover:underline "
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 mb-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`px-3 py-2 rounded-md border ${
                  p === page ? "bg-[#FDC040] text-black border-[#FDC040]" : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages}
              className="px-4 py-2 rounded-md bg-[#39251A] text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Blog;
