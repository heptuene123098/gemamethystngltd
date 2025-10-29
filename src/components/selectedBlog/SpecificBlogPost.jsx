import NavBar from "../Home/NavBar";
import MoreInsights from "./moreBlogs";
import Footer from "../Home/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { blogspostlong } from "../../constants";
import { useEffect, useState } from "react";

const SpecificBlogPost = () => {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params]);

  useEffect(() => {
    const postId = params.id;

    const storedPost = localStorage.getItem("blog");

    if (storedPost) {
      const blog = JSON.parse(storedPost);
      if (blog.id === postId) {
        setPost(blog);
      } else {
        // If the post in localStorage doesn't match, fetch from the list
        const blogFromList = blogspostlong.find((post) => post.id === postId);
        if (blogFromList) {
          localStorage.setItem("blog", JSON.stringify(blogFromList));
          setPost(blogFromList);
        }
      }
    } else {
      const blogFromList = blogspostlong.find((post) => post.id === postId);
      if (blogFromList) {
        localStorage.setItem("blog", JSON.stringify(blogFromList));
        setPost(blogFromList);
      }
    }
  }, [params.id]);

  const openPDF = () => {
    if (post && post.pdfUrl) {
      window.open(post.pdfUrl, "_blank");
    }
  };

  return (
    <main className="relative ">
      <header className=" h-[8rem] bg-black">
        <NavBar />
      </header>
      {post ? (
        <>
          <section className="relative flex flex-col gap-16 w-[80%] mx-auto mb-[3rem] tablet:w-[90%] phoneP:w-full phoneP:p-1.5 phoneP:gap-8">
            <button
              onClick={() => navigate("/blog")}
              className="text-base rounded-lg  hover:bg-webpurple absolute top-2 hover:text-white transition-all duration-500 border border-black p-2   cursor-pointer self-start mt-auto font-normal text-black/70 max-laptop:text-base max-tablet:text-sm"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <article className=" py-[4rem] border-b border-black flex flex-col gap-10 tablet:gap-5 phoneL:py-[2rem] phoneP:gap-3 ">
              <header className="flex flex-col gap-4">
                <h1 className="text-[40px] font-light text-black/80 laptop:text-3xl phoneL:text-2xl phoneP:text-xl">
                  {post.title}
                </h1>
                <div className="text-sm font-normal text-black/50 flex flex-col gap-2 tablet:gap-0 tablet:text-xs">
                  <h3>Gemamethystng</h3>
                  <h3>25 Mar 2025 · Thought Leadership Articles</h3>
                </div>
              </header>
              <div className="flex flex-col gap-10 phoneL:gap-5">
                <div className="w-full h-[40rem] laptop:h-[35rem] tablet:h-[30rem] phoneL:h-[25rem] phoneP:h-[20rem]">
                  <img
                    src={post.img}
                    alt="img text"
                    className="w-full h-full  object-cover"
                  />
                </div>
                <div className="flex font-normal flex-col gap-4 text-black/80 text-lg tablet:text-base phoneL:text-sm phoneP:text-xs">
                  <p> {post.body?.[0].introduction}</p>
                  <div className="flex flex-col gap-4">
                    <h2>{post.body?.[0].subHeader}</h2>
                    <ul className="list-disc pl-4 ">
                      {post.body?.[0].sublists.map((item, index) => {
                        return (
                          <li key={index} className="ml-4">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p>{post.body?.[0].concultion}</p>
                </div>
              </div>
              <div className="">
                <button
                  onClick={openPDF}
                  className="text-base rounded-lg  hover:bg-webpurple hover:text-white transition-all duration-500 border border-black p-2 cursor-pointer self-start mt-auto font-normal text-black/70 max-laptop:text-base max-tablet:text-sm"
                >
                  Read More
                  <i className="fa-solid ml-2 text-xs fa-arrow-right"></i>
                </button>
              </div>
            </article>
            <article>
              <header className="flex flex-col gap-3 tablet:gap-4">
                <h1 className="text-[40px] font-light text-black uppercase tablet:text-3xl phoneL:text-2xl phoneP:text-xl">
                  Share This Article
                </h1>
                <div className="flex gap-4 phoneL:gap-2">
                  <button className="flex items-center bg-[#1877F2] text-white px-4 py-2 rounded-lg font-semibold tablet:px-3 tablet:py-2 tablet:text-xs phoneL:px-2 phoneL:py-2 phoneP:text-[10px]  phoneP:px-2 phoneP:py-1.5 ">
                    <i className="fa-brands fa-facebook-f mr-2 tablet:text-xs phoneP:text-[10px]"></i>{" "}
                    Share
                  </button>

                  <button className="flex items-center bg-[#1DA1F2] text-white px-4 py-2 rounded-lg font-semibold tablet:px-3 tablet:py-2 tablet:text-xs phoneL:px-2 phoneL:py-2  phoneP:text-[10px]  phoneP:px-2 phoneP:py-1 ">
                    <i className="fa-brands fa-twitter mr-2"></i> Share
                  </button>

                  <button className="flex items-center bg-[#0A66C2] text-white px-4 py-2 rounded-lg font-semibold tablet:px-3 tablet:py-2 tablet:text-xs phoneL:px-2 phoneL:py-2  phoneP:text-[10px]  phoneP:px-2 phoneP:py-1 ">
                    <i className="fa-brands fa-linkedin-in mr-2"></i> Share
                  </button>
                </div>
              </header>
            </article>
          </section>
          <div className=" my-[3rem] phoneP:my-[2rem]">
            <MoreInsights />
          </div>
        </>
      ) : (
        <p> Post Not Found...</p>
      )}

      <Footer />
    </main>
  );
};

export default SpecificBlogPost;
