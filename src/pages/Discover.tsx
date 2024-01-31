const Discover = () => {
  return <div>Discover</div>;
};

export default Discover;

// import { useImageURL } from "../hooks/useImageURL";

// const Discover = () => {
//   const { imageURL, error } = useImageURL("food/khinkali.jpg");

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {imageURL ? (
//         <img
//           src={imageURL}
//           alt="khinkali"
//           style={{ width: 200, height: 200 }}
//         />
//       ) : (
//         <p>Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default Discover;
