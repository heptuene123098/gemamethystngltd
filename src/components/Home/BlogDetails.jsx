function BlogDetails() {
  return (
    <div className="blog_details flex items-center gap-2 shadow-lg rounded-lg w-fit bg-white p-2 absolute top-[43%] left-[15%] laptop:top-[47%] tablet:top-[43%] tablet:left-[10%] phoneL:static phoneL:mb-3 phoneL:w-full justify-center">
      <div className="date flex gap-2 items-center tablet:gap-1">
        <i className="fa-solid fa-calendar-days text-webpurple phoneP:text-[14px]"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] tablet:text-[10px] tablet:leading-[15px] phoneP:text-[10px] phoneP:leading-[12px]">
          sept. 23, 2020
        </p>
      </div>
      <div className="admin flex gap-2 items-center text-webpurple">
        <i className="fa-solid fa-user phoneP:text-[14px]"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] tablet:text-[10px] tablet:leading-[15px] phoneP:text-[10px] phoneP:leading-[12px]">
          Admin
        </p>
      </div>
      <div className="chat_bubble flex gap-2 items-center text-webpurple">
        <i className="fa-solid fa-comment phoneP:text-[15px] "></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] tablet:text-[10px] tablet:leading-[15px] phoneP:text-[10px] phoneP:leading-[12px]">
          3
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;
