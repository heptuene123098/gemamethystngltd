import BlogPost from "../BlogPost2";
import { blogspostlong } from "../../constants";
import { useParams } from "react-router-dom";
function MoreInsights() {
  const param = useParams();
  const postId = param.id;
  const NewBlogList = blogspostlong.filter((blog) => blog.id !== postId);

  return (
    <section className="blog_section relative   pt-5 flex flex-col gap-10 laptop:gap-8  ">
      <header className=" flex flex-col   gap-2 w-[80%] mx-auto tablet:w-[90%] phoneL:gap-1 phoneP:w-full">
        <h3 className="text-[40px] font-light text-black tablet:text-3xl phoneL:text-2xl phoneP:text-xl">
          GET MORE INSIGHT
        </h3>
        <h1 className=" text-[13px] leading-[9px] text-webpurple font-medium uppercase phoneL:text-[11px] phoneP:text-[9px]">
          Check out these related articles.
        </h1>
      </header>
      <div className="blog_section component grid grid-cols-3   items-center justify-between w-[85%]   mx-auto  laptop:w-[95%] tablet:w-[75%] phoneL:w-[90%] tablet:grid-cols-1 tablet:gap-4 phoneL:grid-cols-1 phoneL:p-2  phoneL:gap-8">
        {NewBlogList.slice(0, 3).map((blog) => {
          return (
            <BlogPost
              key={blog.id}
              roomId={blog.id}
              title={blog.title}
              img={blog.img}
              des={blog.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MoreInsights;
