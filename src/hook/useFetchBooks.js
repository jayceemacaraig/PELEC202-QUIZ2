import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBooks = (search, page, category) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: search,
          startIndex: (page - 1) * 20,
          maxResults: 20,
        },
      })
      .then((response) => {
        const items = response.data.items || [];

        const searchResult = [
          ...items.filter((item) => {
            const info = item.volumeInfo;
            
            if (category === "Title") {
              return info.title?.toLowerCase().startsWith(search.toLowerCase());
            } else if (category === "Author") {
              return info.authors?.[0]?.toLowerCase().startsWith(search.toLowerCase());
            } else if (category === "Date") {
              return info.publishedDate?.toLowerCase().startsWith(search.toLowerCase());
            }
            return false;
          }),
          ...items.filter((item) => {
            const info = item.volumeInfo;
            if (category === "Title") {
              return !info.title?.toLowerCase().startsWith(search.toLowerCase());
            } else if (category === "Author") {
              return !info.authors?.[0]?.toLowerCase().startsWith(search.toLowerCase());
            } else if (category === "Date") {
              return !info.publishedDate?.toLowerCase().startsWith(search.toLowerCase());
            }
            return true;
          }),
        ];

        setBooks(searchResult);
        setTotalPage(response.data.totalItems);
        setLoading(false);
        console.log(items)
      })
      .catch(() => setLoading(false));
  }, [search, page, category]);

  return { books, loading, totalPage };
};

export default useFetchBooks;
