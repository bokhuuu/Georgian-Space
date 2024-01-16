import { useImageURL } from "../hooks/useImageURL";

const Discovery = () => {
  const { imageURL, error } = useImageURL("food/khinkali.jpg");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {imageURL ? (
        <img
          src={imageURL}
          alt="khinkali"
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default Discovery;
