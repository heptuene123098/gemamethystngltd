import BlogPost from "./BlogPost";
import { blogspostlong } from "../../constants";
import Newsletter from "./Newsletter";
function Blog() {
  return (
    <section className="blog_section relative    h-[130vh] pt-20 flex flex-col gap-10 laptop:gap-4 laptop:h-[110vh] phoneL:h-auto phoneL:pt-14 phoneL:pb-[15rem]">
      <header className=" flex flex-col   gap-2 items-center">
        <h3 className=" text-[13px] leading-[9px] text-webpurple font-semibold uppercase">
          Our Blog
        </h3>
        <h1 className="text-[34px] leading-[47.5px] tracking-[3px] uppercase font-bold">
          RECENT POST
        </h1>
      </header>
      <div className="blog_section component flex items-center justify-between w-[75%]  mx-auto  laptop:w-[95%] tablet:w-[96%] phoneL:flex-col phoneL:gap-8">
        {blogspostlong.slice(0, 3).map((blog, index) => {
          return (
            <BlogPost
              key={index}
              title={blog.title}
              img={blog.img}
              roomId={blog.id}
              des={blog.description}
            />
          );
        })}
      </div>
      <Newsletter />
    </section>
  );
}

export default Blog;
