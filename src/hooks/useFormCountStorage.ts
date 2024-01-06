import useLocalStorage from "use-local-storage";

const useFormCountStorage = () => {
  const [formCount, setFormCount] = useLocalStorage("formCount", 1);

  return {
    formCount,
    setFormCount,
  };
};

export default useFormCountStorage;
