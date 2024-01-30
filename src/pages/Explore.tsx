import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();

  return <div>{t("content")}</div>;
};

export default Explore;
