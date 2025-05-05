import React, { useState, useRef } from "react";
import BookCard from "./components/BookCard";
import useFetchBooks from "./hook/useFetchBooks";
import LoadingScreen from "./components/LoadingScreen";
import InputSection from "./components/InputSection";
import Hero from "./components/Hero";

function App() {
  const inputRef = useRef("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("react");
  const [category, setCategory] = useState("Title");

  const { books, loading, totalPage } = useFetchBooks(search, page, category);


  return (
    <div>
        <Hero />
      <InputSection category={category}  inputRef={inputRef} setSearch={setSearch} setCategory={setCategory} />

      <div className="bg-gray-50 p-10">
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {books.map((item, idx) => (
              <BookCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto p-6 flex gap-3 justify-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded w-30"
          disabled={loading}
        >
          Previous
        </button>
        <span className="font-medium content-center mx-10">
          Page {page} of {Math.ceil(totalPage / 16) || 1}
        </span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded w-30"
          disabled={loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
