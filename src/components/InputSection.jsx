import React from 'react'

const InputSection = ({category, inputRef, setSearch, setCategory}) => {

    const categoryFunction = (data) => {
        return data === category
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300";
      };

  return (
    <div className="max-w-5xl mx-auto p-6 flex gap-5">
    <input
      type="text"
      placeholder={`Search Books by ${category} ...`}
      ref={inputRef}
      className="border border-blue-400 p-2 rounded w-full outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      onClick={() => setSearch(inputRef.current.value)}
      className={`px-4 rounded font-semibold transition bg-blue-600 text-white w-1/5 hover:bg-white hover:text-black border-3 border-blue-600`}
    >
      Search
    </button>
    <div className="flex flex-col items-center">
      <h1 className="text-slate-500 mb-2">Search by</h1>
      <div className="flex flex-row gap-3">
        <button
          onClick={() => setCategory("Title")}
          className={`px-4 rounded font-semibold transition ${categoryFunction("Title")}`}
        >
          Title
        </button>
        <button
          onClick={() => setCategory("Author")}
          className={`px-4 rounded font-semibold transition ${categoryFunction("Author")}`}
        >
          Author
        </button>
        <button
          onClick={() => setCategory("Date")}
          className={`px-4 rounded font-semibold transition ${categoryFunction("Date")}`}
        >
          Date
        </button>
      </div>
    </div>
  </div>
  )
}

export default InputSection
