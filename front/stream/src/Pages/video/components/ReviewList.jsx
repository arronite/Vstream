import { useState } from "react";
import { useDataProvider } from "../../../data/dataProvider";
import axios from "axios";
import { useSelector } from "react-redux";
export const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-1 cursor-pointer">
      {[...Array(5)].map((star, index) => (
        <svg
          key={index}
          onClick={() => setRating(index + 1)}
          className={`w-6 h-6 ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.111c.969 0 1.371 1.24.588 1.81l-3.33 2.42a1 1 0 00-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.538 1.118l-3.33-2.42a1 1 0 00-1.176 0l-3.33 2.42c-.783.57-1.838-.197-1.538-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.75 9.386c-.783-.57-.381-1.81.588-1.81h4.111a1 1 0 00.95-.69l1.286-3.959z" />
        </svg>
      ))}
    </div>
  );
};

// Component to display individual reviews
const Review = ({ user, rating, review, date }) => {
  const dateStamp = new Date(date);
  const year = dateStamp.getFullYear();
  const month = String(dateStamp.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateStamp.getDate()).padStart(2, "0");
  const fixedDate = `${year}-${month}-${day}`;
  return (
    <div className="p-6 mb-6 glass rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <div className="text-lg font-semibold text-blue-200">{user}</div>
        <div className="ml-auto text-sm text-gray-200">{fixedDate}</div>
      </div>
      <StarRating rating={rating} setRating={() => {}} />
      <p className="mt-2 text-gray-100">{review}</p>
    </div>
  );
};

// Component to add a new review
const AddReview = ({ videoId, reload }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setRating(0);
    setText("");
  };
  const { authorizedData: data } = useSelector((state) => state.userData.data);

  return (
    data && (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-100">
          Add Your Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              {data?.username}
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Rating
            </label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Review
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button
            onClick={async () => {
              axios
                .post("http://localhost:5892/reviews/post", {
                  videoId,
                  data,
                  rating,
                  text,
                })
                .then(() => {
                  reload();
                  console.log("reload");
                })
                .catch((error) => {
                  console.error("Error posting review:", error);
                });
            }}
            type="submit"
            className="px-4 py-2  bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    )
  );
};

// Main component to display the list of reviews and the add review form
const ReviewList = ({ videoId }) => {
  const { data, reload } = useDataProvider(
    `http://localhost:5892/reviews/${videoId}`
  );
  const reviewDisplay =
    data?.length > 0 ? (
      data?.map((review, index) => <Review key={index} {...review} />)
    ) : (
      <div className="text-slate-100">
        No Reviews to display be the first to write one
      </div>
    );
  return (
    <div className="w-full p-8 glass text-gray-900">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">
        User Reviews
      </h2>
      <AddReview videoId={videoId} reload={reload} />
      {reviewDisplay}
    </div>
  );
};

export default ReviewList;
