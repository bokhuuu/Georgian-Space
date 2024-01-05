import { useForm } from "react-hook-form";

const ContributionForm = () => {
  const { register } = useForm();

  return (
    <form
      className="d-flex flex-column"
      style={{ color: "var(--text-primary)" }}
    >
      <label className="mb-2">Name</label>
      <input {...register("name")} className="mb-2" />

      <label className="mb-2">Email</label>
      <input {...register("email")} className="mb-2" />

      <label className="mb-2">Select a Category</label>
      <select {...register("category")} className="mb-2">
        <option value="" disabled>
          ---
        </option>
        <option value="history">history</option>
        <option value="geography">geography</option>
        <option value="culture">culture</option>
        <option value="cuisine">cuisine</option>
        <option value="wine">wine</option>
        <option value="landmarks">landmarks</option>
        <option value="nightlife">nightlife</option>
      </select>

      <label className="mb-2">Contribution</label>
      <textarea {...register("contribution")} className="mb-2" />

      <input
        className="mb-2"
        type="file"
        {...register("contribution")}
        accept="image/*,video/*"
        multiple
      />
      <div className="d-flex justify-content-end ">
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContributionForm;
