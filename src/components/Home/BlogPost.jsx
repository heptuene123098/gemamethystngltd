import BlogDetails from "./BlogDetails";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

function BlogPost({ title, img, des, roomId }) {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <div
      onClick={() => navigate(`/blog/${roomId}`)}
      data-aos="fade-up"
      className="blog_post  flex flex-col gap-4  overflow-hidden w-[20rem] relative shadow-[0px_4px_24px_-16px_rgba(0,0,0,0.15)] rounded-md laptop:w-[19rem] tablet:w-[15rem] phoneL:w-[78%] phoneP:w-[90%]"
    >
      <BlogDetails />
      <div className="blog_post_img ">
        <img src={img} alt="blog_post_img" className="w-full" />
      </div>
      <div className="blog_post_content flex flex-col gap-5 py-9 laptop:gap-4 tablet:gap-2 phoneP:pt-4 phoneP:gap-2">
        <header>
          <h1 className=" font-bold text-[20px] leading-[30px] text-webpurple text-center uppercase laptop:text-[18px] laptop:leading-[24px] tablet:text-[15px] tablet:leading-[20px] phoneP:text-[13px] phoneP:leading-[15px]">
            {title}
          </h1>
        </header>
        <p className="text-[16px] leading-[28.8px] font-normal text-[#999999] text-center laptop:text-[14px] laptop:leading-[19.6px] tablet:text-[12px] tablet:leading-[15px] phoneP:text-[10px] phoneP:leading-[15px]">
          {des}
        </p>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default BlogPost;
