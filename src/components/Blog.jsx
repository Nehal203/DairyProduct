import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#FDC040", color: "#000" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section 
      id="blog" 
      className="pt-28"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div 
        className="w-full bg-[#39251A] text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <motion.h3 
            className="text-2xl tracking-wide"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Blog
          </motion.h3>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={page}
          >
            <AnimatePresence mode="wait">
              {currentItems.map((item) => (
              <motion.div
                key={item.id}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div className="overflow-hidden">
                  <Link to={`/blog/${item.id}`}>
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </motion.div>
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
                <motion.div className="p-2">
                  <Link to={`/blog/${item.id}`} className="hover:underline">
                    <motion.h2 
                      className="text-2xl font-semibold"
                      whileHover={{ color: '#FDC040' }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.h2>
                  </Link>
                </motion.div>
                <div className="p-2">
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <motion.div className="mt-4 mb-4">
                  <Link to={`/blog/${item.id}`}>
                    <motion.button
                      className="inline-block text-underline/2 text-black font-semibold px-5 py-2"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Read More
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-2 mt-10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <motion.button
                key={p}
                onClick={() => goToPage(p)}
                className={`px-3 py-2 rounded-md border ${
                  p === page ? "bg-[#FDC040] text-black border-[#FDC040]" : "bg-white text-gray-700 border-gray-300"
                }`}
                whileHover={{ scale: 1.1, backgroundColor: p === page ? "#FDC040" : "#f0f0f0" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {p}
              </motion.button>
            ))}
            <motion.button
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages}
              className="px-4 py-2 rounded-md bg-[#39251A] text-white disabled:opacity-50"
              whileHover={page < totalPages ? { 
                scale: 1.05, 
                backgroundColor: "#FDC040",
                color: "#000"
              } : {}}
              whileTap={page < totalPages ? { scale: 0.95 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Next
            </motion.button>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
};
export default Blog;
