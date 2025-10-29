import BlogPost from "./BlogPost2";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Search from "./search";
function BlogList({
  filteredBlog,
  handlesearch,
  searchQuery,
  currentindex,
  setsurrentindex,
}) {
  const [page, setPage] = useState(4);
  const [searchdisplay, setsearchdisplay] = useState(false);
  const handleScreen = () => {
    if (window.innerWidth < 400) {
      setPage(2);
      setsearchdisplay(true);
    } else {
      setPage(4);
      setsearchdisplay(false);
    }
  };

  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
  // Pagination settings

  const totoalItem = filteredBlog.length;
  const pageCount = Math.ceil(totoalItem / page);
  // Handle page clicks
  const handlePageClick = (data) => {
    setsurrentindex(data.selected);
  };
  const startIndex = currentindex * page;
  const endIndex = startIndex + page;
  const currentitems = filteredBlog.slice(startIndex, endIndex);

  return (
    <section className="">
      {searchdisplay && (
        <div className="pb-3">
          <Search searchQuery={searchQuery} handlesearch={handlesearch} />
        </div>
      )}
      <div className="grid grid-cols-2 gap-8  w-fit phoneL:gap-1 phoneP:grid-cols-1 place-items-center   ">
        {currentitems.map((blog, index) => {
          return (
            <BlogPost
              roomId={blog.id}
              key={index}
              title={blog.title}
              img={blog.img}
              des={blog.description}
            />
          );
        })}
      </div>
      <div className="text-center w-full">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={", ..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center space-x-2 mt-6 
                      phoneL:space-x-1 phoneL:text-sm 
                      phoneP:flex-wrap phoneP:gap-2 phoneP:text-xs"
          pageClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 
                 phoneL:px-3 phoneL:py-1 
                 phoneP:px-2 phoneP:py-1"
          activeClassName="bg-webpurple text-white border-blue-600"
          previousClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                     phoneL:px-3 phoneL:py-1
                     phoneP:px-2 phoneP:py-1"
          nextClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                 phoneL:px-3 phoneL:py-1
                 phoneP:px-2 phoneP:py-1"
          breakClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer
                  phoneL:px-3 phoneL:py-1 
                  phoneP:px-2 phoneP:py-1"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </section>
  );
}

BlogList.propTypes = {
  filteredBlog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlesearch: PropTypes.func.isRequired,
  setfilteredBlog: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setsearchQuery: PropTypes.func.isRequired,
  blogspostlong: PropTypes.array.isRequired,
  currentindex: PropTypes.number.isRequired,
  setsurrentindex: PropTypes.func.isRequired,
};

export default BlogList;
