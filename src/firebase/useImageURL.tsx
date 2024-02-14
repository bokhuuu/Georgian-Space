import { useState, useEffect } from "react";
import { storage } from "./firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

export const useImageURL = (imagePath: string) => {
  const [fetchedImageURL, setFetchedImageURL] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const imageRef = ref(storage, imagePath);

    getDownloadURL(imageRef)
      .then((url) => {
        setFetchedImageURL(url);
      })
      .catch((err) => {
        setError(err);
      });
  }, [imagePath]);

  return { fetchedImageURL, error };
};
