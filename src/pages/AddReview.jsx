const AddReview = () => {
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;
    const newReview = {
      image,
      title,
      description,
      rating,
      publishingYear,
      genre,
      email,
      name,
    };
    console.log(newReview);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add New Review
      </h2>

      <form onSubmit={handleAddReview}>
        {/* Game Cover Image URL */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Game Cover Image URL
            </span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Enter the game cover image URL"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Game Title */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Game Title
            </span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter the game title"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Review Description
            </span>
          </label>
          <textarea
            name="description"
            placeholder="Write a detailed review of the game"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Rating (1-5)
            </span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Enter a rating from 1 to 5"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Publishing Year */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Publishing Year
            </span>
          </label>
          <input
            type="number"
            name="publishingYear"
            placeholder="Enter the publishing year (e.g., 2024)"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Genre Dropdown */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">Genre</span>
          </label>
          <select
            name="genre"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
            <option value="Strategy">Strategy</option>
          </select>
        </div>

        {/* User Email (Read-Only) */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              User Email
            </span>
          </label>
          <input
            type="email"
            name="email"
            readOnly
            className="mt-2 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* User Name (Read-Only) */}
        <div className="mb-6">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              User Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            readOnly
            className="mt-2 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 btn btn-neutral rounded-md"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
