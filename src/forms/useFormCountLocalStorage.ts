import useLocalStorage from "use-local-storage";

const useFormCountLocalStorage = () => {
  const [formCount, setFormCount] = useLocalStorage("formCount", 1);

  return {
    formCount,
    setFormCount,
  };
};

export default useFormCountLocalStorage;
