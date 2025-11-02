import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import blogItems from "./Blogitems";
import { CalendarIcon, UserIcon, TagIcon, MagnifyingGlassIcon, ShareIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.aside 
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
          }
        }
      }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-lg border p-6"
        variants={item}
        whileHover={{ x: 5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          <h4 className="font-semibold text-2xl">Search News</h4>
        </div>
        <div className="flex">
          <motion.input 
            className="flex-1 border rounded-l-md px-3 py-2 outline-none" 
            placeholder="Search here..."
            whileFocus={{ borderColor: '#FACC15' }}
          />
          <motion.button 
            className="bg-[#FACC15] text-white px-4 rounded-r-md"
            whileHover={{ backgroundColor: '#39251A' }}
            whileTap={{ scale: 0.95 }}
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
      <motion.div 
        className="bg-white rounded-xl shadow-lg border p-6"
        variants={item}
        whileHover={{ x: 5 }}
      >
        <h4 className="font-semibold text-2xl mb-4">Popular Category</h4>
        <ul className="space-y-2 text-sm text-black">
          <li>Farm-Fresh Curd</li>
          <li>Fresh Cow Paneer</li>
          <li>Organic Ghee</li>
          <li>Lactose-Free Dairy</li>
        </ul>
      </motion.div>
      <motion.div 
        className="bg-white rounded-xl shadow-lg border p-6"
        variants={item}
        whileHover={{ x: 5 }}
      >
        <h4 className="font-semibold text-2xl mb-4">Follow Us</h4>
        <div className="flex gap-3">
<<<<<<< HEAD
          <a href="" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaInstagram /></a>
          <a href="" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaFacebook /></a>
          <a href="" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaLinkedin /></a>
=======
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaInstagram /></a>
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaFacebook /></a>
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaLinkedin /></a>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
        </div>
      </motion.div>
      <motion.div 
        className="bg-white rounded-xl shadow-lg border p-6"
        variants={item}
        whileHover={{ x: 5 }}
      >
        <h4 className="font-semibold text-2xl mb-4">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {["Paneer","curd","Ghee","ice cream","milk","butter","Organic"].map((t, i) => (
            <motion.span 
              key={t} 
              className="text-sm px-3 py-1 bg-[#39251A] text-white rounded-full border cursor-pointer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: i * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, backgroundColor: '#FACC15', color: '#000' }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="bg-white rounded-xl shadow-lg border p-6"
        variants={item}
        whileHover={{ x: 5 }}
      >
        <h4 className="font-semibold text-2xl mb-4">Feeds</h4>
        <ul className="space-y-3 text-sm">
          {blogItems.slice(0,5).map((b, i) => (
            <motion.li 
              key={b.id} 
              className="flex gap-4 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.img 
                src={b.image} 
                alt="" 
                className="w-16 h-16 object-cover rounded"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <div>
                <Link to={`/blog/${b.id}`} className="font-medium hover:underline">{b.title}</Link>
                <p className="text-gray-500 text-xs">{b.date}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.aside>
  );
};

const Blogdetails = () => {
  const { id } = useParams();
  const postId = Number(id);
  const post = useMemo(() => blogItems.find(b => b.id === postId) || blogItems[0], [postId]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "#39251A",
    color: "#fff"
  };

  return (
    <motion.section 
      className="pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full bg-[#39251A] text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div className="lg:col-span-2 space-y-6" variants={container}>
            <motion.div 
              className="bg-white rounded-xl shadow-lg border overflow-hidden"
              variants={item}
              whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <motion.img 
                src={post.image} 
                alt="" 
                className="w-full h-72 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              />
              <motion.div 
                className="p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h1 
                  className="text-2xl md:text-3xl font-semibold"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {post.title}
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-full bg-[#FDC040] text-white flex items-center justify-center">
                      <UserIcon className="w-5 h-5" />
                    </span>
                    <p>Post by {post.author}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5" />
                    </span>
                    <p>{post.date}</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-7">
                  {post.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <motion.div 
                  className="bg-[#FFF4ED] border rounded-xl p-5 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <p className="italic">"{post.quote}"</p>
                </motion.div>
                {post.extraImage && (
                  <motion.img 
                    src={post.extraImage} 
                    alt="" 
                    className="w-full h-64 object-cover rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                  />
                )}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <TagIcon className="w-5 h-5" />
                      <span className="font-medium">Related Tags</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <ShareIcon className="w-5 h-5" />
                      <span className="font-medium">Social Share</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <motion.div className="flex flex-wrap gap-2">
                      {(post.tags || []).map((t, i) => (
                        <motion.span 
                          key={t} 
                          className="text-sm px-3 bg-[#39251A] text-white py-1 rounded-full border cursor-pointer"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: 0.5 + (i * 0.1),
                            type: 'spring',
                            stiffness: 100
                          }}
                          whileHover={{ scale: 1.1, backgroundColor: '#FACC15', color: '#000' }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div className="flex gap-2">
<<<<<<< HEAD
                      {[
                        { href: 'https://www.linkedin.com/company/yourcompany', icon: <FaLinkedin /> },
                        { href: 'https://instagram.com/youraccount', icon: <FaInstagram /> },
                        { href: 'https://facebook.com/youraccount', icon: <FaFacebook /> },
                      ].map((s, i) => (
                        <motion.a
                          key={i}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open ${s.href}`}
=======
                      {[<FaLinkedin/>,<FaInstagram />,<FaFacebook />].map((s, i) => (
                        <motion.span 
                          key={s} 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                          className="w-9 h-9 rounded-full text-white bg-[#FACC15] grid place-items-center cursor-pointer"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.6 + (i * 0.1),
                            type: 'spring',
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            backgroundColor: '#39251A'
                          }}
                        >
<<<<<<< HEAD
                          {s.icon}
                        </motion.a>
=======
                          {s}
                        </motion.span>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-[#FFF4ED] rounded-xl shadow-lg border p-6 flex gap-4 items-center"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <img src="/images/user1.png" alt="" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-3xl">Billy</h4>
                <p className="text-md font-semibold text-black">Senior Director</p>
                <p className="text-black text-md font-medium mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali,</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg border p-6 space-y-6"
              variants={item}
            >
              <h4 className="font-semibold">2 Comments</h4>
              {[{n:"Roseanne Williams",d:"Dec 8, 2024"},{n:"Samantha Nicolan",d:"Jan 2, 2025"}].map((c,i)=>(
                <div key={i} className="flex items-start gap-4">
                  <img src="/images/user2.png" alt="" className="w-14 h-14 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{c.n}</p>
                        <p className="text-xs text-gray-500">{c.d}</p>
                      </div>
                      <button className="px-4 py-1 rounded-full bg-[#FACC15] text-white text-sm">Reply</button>
                    </div>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg border p-6 space-y-4"
              variants={item}
            >
              <h4 className="font-semibold">Leave a Comment</h4>
              <textarea className="w-full border rounded-md p-3 min-h-32" placeholder="Write your comment..." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="border rounded-md p-3" placeholder="Your name" />
                <input className="border rounded-md p-3" placeholder="Your e-mail" />
                <input className="border rounded-md p-3" placeholder="Your topic" />
              </div>
              <motion.button 
                className="px-5 py-2 text-white bg-[#FACC15] rounded-full font-semibold"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Post Comment
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <Sidebar />
          </motion.div>
        </div>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/blog" 
            className="text-sm text-gray-600 hover:underline flex items-center gap-2 w-fit"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ←
            </motion.span>
            Back to Blog
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Blogdetails;

