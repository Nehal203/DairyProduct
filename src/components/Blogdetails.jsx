import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import blogItems from "./Blogitems";
import { CalendarIcon, UserIcon, TagIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, ShareIcon } from "@heroicons/react/24/outline";
// import { iconwhatsapp } from "./icons";
import { FaBeer, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          <h4 className="font-semibold text-2xl">Search News</h4>
        </div>
        <div className="flex">
          <input className="flex-1 border rounded-l-md px-3 py-2 outline-none" placeholder="Search here..." />
          <button className="bg-[#FACC15] text-white px-4 rounded-r-md"><MagnifyingGlassIcon className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow border p-6">
        <h4 className="font-semibold text-2xl mb-4">Popular Category</h4>
        <ul className="space-y-2 text-sm text-black">
          <li>Farm-Fresh Curd</li>
          <li>Fresh Cow Paneer</li>
          <li>Organic Ghee</li>
          <li>Lactose-Free Dairy</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow border p-6">
        <h4 className="font-semibold text-2xl mb-4">Follow Us</h4>
        <div className="flex gap-3">
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaInstagram /></a>
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaFacebook /></a>
          <a className="w-9 h-9 rounded-full bg-[#FACC15] text-white grid place-items-center"><FaLinkedin /></a>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow border p-6">
        <h4 className="font-semibold text-2xl mb-4">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {["Paneer","curd","Ghee","ice cream","milk","butter","Organic"].map(t => (
            <span key={t} className="text-sm px-3 py-1 bg-[#39251A] text-white rounded-full border">{t}</span>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow border p-6">
        <h4 className="font-semibold text-2xl mb-4">Feeds</h4>
        <ul className="space-y-3 text-sm">
          {blogItems.slice(0,5).map(b => (
            <li key={b.id} className="flex gap-4 mb-4">
              <img src={b.image} alt="" className="mb-8 w-16 h-16 object-cover rounded" />
              <div>
                <Link to={`/blog/${b.id}`} className="font-medium hover:underline">{b.title}</Link>
                <p className="text-gray-500 text-xs">{b.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const Blogdetails = () => {
  const { id } = useParams();
  const postId = Number(id);
  const post = useMemo(() => blogItems.find(b => b.id === postId) || blogItems[0], [postId]);

  return (
    <section className="pt-28">
      <div className="w-full bg-[#39251A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <h3 className="text-2xl tracking-wide">Blog</h3>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow border overflow-hidden">
              <img src={post.image} alt="" className="w-full h-72 object-cover" />
              <div className="p-6 space-y-4">
                <h1 className="text-2xl md:text-3xl font-semibold">{post.title}</h1>
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
                <div className="bg-[#FFF4ED] border rounded-xl p-5 text-gray-700">
                  <p className="italic">“{post.quote}”</p>
                </div>
                {post.extraImage && (
                  <img src={post.extraImage} alt="" className="w-full h-64 object-cover rounded-xl" />
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
                    <div className="flex flex-wrap gap-2">
                      {(post.tags || []).map(t => (
                        <span key={t} className="text-sm px-3 bg-[#39251A] text-white py-1 rounded-full border">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {[<FaLinkedin/>,<FaInstagram />,<FaFacebook />].map(s => (
                        <span key={s} className="w-9 h-9 rounded-full text-white bg-[#FACC15] grid place-items-center">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF4ED] rounded-xl shadow border p-6 flex gap-4 items-center">
              <img src="/images/user1.png" alt="" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-3xl">Billy</h4>
                <p className="text-md font-semibold text-black">Senior Director</p>
                <p className="text-black text-md font-medium mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali,</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow border p-6 space-y-6">
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
            </div>

            <div className="bg-white rounded-xl shadow border p-6 space-y-4">
              <h4 className="font-semibold">Leave a Comment</h4>
              <textarea className="w-full border rounded-md p-3 min-h-32" placeholder="Write your comment..." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="border rounded-md p-3" placeholder="Your name" />
                <input className="border rounded-md p-3" placeholder="Your e-mail" />
                <input className="border rounded-md p-3" placeholder="Your topic" />
              </div>
              <button className="px-5 py-2 text-white bg-[#FACC15] rounded-full font-semibold">Post Comment</button>
            </div>
          </div>
          <Sidebar />
        </div>
        <div className="mt-8">
          <Link to="/blog" className="text-sm text-gray-600 hover:underline">Back to Blog</Link>
        </div>
      </div>
    </section>
  );
};

export default Blogdetails;

