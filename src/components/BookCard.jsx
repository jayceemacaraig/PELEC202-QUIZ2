const BookCard = ({ item }) => {
    const info = item.volumeInfo;
  
    return (
      <div className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover: transition">
        <div className="w-32 h-48 flex-shrink-0 bg-blue-100 overflow-hidden m-2">
          <img
            src={
              info.imageLinks?.thumbnail ||
              "https://via.placeholder.com/100x150?text=No+Image"
            }
            alt={info.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
  
        <div className="p-4 flex flex-col w-full">
          <div>
            <h2 className="text-xl w-4/5 font-semibold line-clamp-2 text-blue-800">
              {info.title}
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Author:</span>{" "}
              {info.authors?.join(", ") || "Unknown"}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Published:</span>{" "}
              {info.publishedDate || "Unknown"}
            </p>
          </div>
          <div className="mt-3">
            <a
              href={info.previewLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium text-sm"
            >
              View Book →
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookCard;
  