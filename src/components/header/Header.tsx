import { useTranslation } from "react-i18next";
import LanguageToggler from "../../translation/LanguageToggler.tsx";
import { languageList } from "../../translation/languageList.ts";
import ThemeToggler from "../../styles/theme/ThemeToggler.tsx";
import Brand from "./Brand.tsx";
import { motion } from "framer-motion";

const headerVariants = {
  initiation: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
    transition: { type: "spring", delay: 1.3, staggerChildren: 0.3 },
  },
};

const Header = () => {
  const { t } = useTranslation();
  const { toggleTheme } = ThemeToggler();

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-8">
          <Brand />
        </div>
        <motion.div
          className=" header-icons col-6 col-md-4 d-flex align-items-center mb-3"
          variants={headerVariants}
          initial="initiation"
          animate="animation"
        >
          <div className="header-icons d-flex align-items-center ms-4 mt-1">
            <button
              onClick={toggleTheme}
              style={{ borderRadius: "50%", marginLeft: 15 }}
            >
              tt
            </button>
            <LanguageToggler languageList={languageList} />
            {t("header")}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
