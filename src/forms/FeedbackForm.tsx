import { useForm } from "react-hook-form";

const FeedbackForm = () => {
  const { register } = useForm();

  return (
    <form>
      <div>
        <label>Name</label>
        <input {...register("name")} />
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
      </div>

      <div>
        <label>Feedback</label>
        <input {...register("feedback")} />
      </div>
    </form>
  );
};

export default FeedbackForm;
