import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormCountLocalStorage from "./useFormCountLocalStorage";
import { motion } from "framer-motion";
import "./Form.css";
import { useTranslation } from "react-i18next";
import submitIcon from "../assets/icons/submitIcon.png";

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

const Form = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, submitCount },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { formCount, setFormCount } = useFormCountLocalStorage();

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
        className="form d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="mb-1">{t("form.0.name")}</label>
        <input
          {...register("name")}
          className="mb-1"
          placeholder={t("form.0.name")}
        />
        <p>{errors.name?.message}</p>

        <label className="mb-1">{t("form.0.email")}</label>
        <input
          {...register("email")}
          className="mb-1"
          placeholder={t("form.0.email")}
        />
        <p>{errors.email?.message}</p>

        <label className="">{t("form.0.category")}</label>
        <select {...register("category")} className="mb-2">
          <option value="">---</option>
          <option value="nature">{t("form.0.category_nature")}</option>
          <option value="culture">{t("form.0.category_culture")}</option>
          <option value="wine">{t("form.0.category_wine")}</option>
          <option value="cuisine">{t("form.0.category_cuisine")}</option>
        </select>
        <p>{errors.category?.message}</p>

        <label className="mb-1">{t("form.0.message")}</label>
        <textarea
          {...register("message")}
          className="mb-1"
          placeholder={t("form.0.message_placeholder")}
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
          <div className="form-contribution mt-3 mt-md-3">
            {/* {t("form.0.submission_count")} */}
            <div
              className="form-count ms-1 d-flex justify-content-center align-items-center"
              style={{
                borderStyle: "groove",
                borderRadius: 10,
                width: 48,
                height: 45,
                marginTop: -4,
              }}
            >
              {formCount}
            </div>
          </div>

          <motion.button
            className=" mt-2"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 20px rgb(255,255,255)",
              boxShadow: "0px 0px 20px rgb(255,255,255)",
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            style={{
              backgroundImage: `url(${submitIcon})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "50px",
              height: "50px",
              // border: "none",
              borderRadius: "10%",
            }}
          >
            {/* {t("form.0.submit_button")} */}
          </motion.button>
        </div>
      </form>
    </>
  );
};

export default Form;
