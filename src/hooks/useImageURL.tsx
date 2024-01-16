import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

// Custom hook to retrieve an image URL from Firebase Storage
export const useImageURL = (imagePath: string) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const imageRef = ref(storage, imagePath);

    getDownloadURL(imageRef)
      .then((url) => {
        setImageURL(url);
      })
      .catch((err) => {
        setError(err);
      });
  }, [imagePath]); // Only re-run the effect if imagePath changes

  return { imageURL, error };
};
