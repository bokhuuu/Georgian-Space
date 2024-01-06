import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormCountStorage from "../hooks/useFormCountStorage";
import { motion } from "framer-motion";
import "./ContributionForm.css";

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
  attachments?: FileList;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be at most 15 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  category: yup.string().required("Category is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(250, "Message must be at most 250 characters"),
  attachments: yup.mixed(),
});

const ContributionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, submitCount },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { formCount, setFormCount } = useFormCountStorage();

  const onSubmit = (data: FormData) => {
    console.log(data, "is submitted");

    setFormCount(
      (prevCount) => (prevCount == undefined ? (prevCount = 0) : prevCount) + 1
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset, submitCount]);

  return (
    <>
      <form
        className="contribution-form d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "var(--text-primary)" }}
      >
        <label className="mb-1">Name</label>
        <input {...register("name")} className="mb-1" placeholder="Name..." />
        <p>{errors.name?.message}</p>

        <label className="mb-1">Email</label>
        <input {...register("email")} className="mb-1" placeholder="Email..." />
        <p>{errors.email?.message}</p>

        <label className="m1-2">Category</label>
        <select {...register("category")} className="mb-2">
          <option value="">---</option>
          <option value="history">History</option>
          <option value="geography">Geography</option>
          <option value="culture">Culture</option>
          <option value="cuisine">Cuisine</option>
          <option value="wine">Wine</option>
          <option value="landmarks">Landmarks</option>
          <option value="nightlife">Nightlife</option>
        </select>
        <p>{errors.category?.message}</p>

        <label className="mb-1">Message</label>
        <textarea
          {...register("message")}
          className="mb-1"
          placeholder="Share your message (e.g., interesting facts, insights, images, and videos)"
        />
        <p>{errors.message?.message}</p>

        <input
          className="mb-1"
          type="file"
          {...register("attachments")}
          accept="image/*,video/*"
          multiple
        />

        <div className="form-footer d-flex justify-content-between ">
          <div className="submissions-count mt-3 mt-md-3">
            Contributions:
            <span
              className="contributions-counter ms-1"
              style={{
                borderStyle: "groove",
                borderRadius: 5,
                padding: "6px",
              }}
            >
              {formCount}
            </span>
          </div>

          <motion.button
            className="btn mt-2"
            type="submit"
            variants={buttonVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 12px rgb(255,255,255)",
              boxShadow: "0px 0px 12px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                repeat: 2,
                repeatType: "mirror",
              },
            }}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </>
  );
};

export default ContributionForm;
