// import { useTranslation } from "react-i18next";
// import LanguageToggler from "../../utils/LanguageToggler.tsx";
// import { languageList } from "../../configs/translation/languageList.ts";
// import ThemeToggler from "../../utils/ThemeToggler.tsx";
// import { motion } from "framer-motion";
// import ModalBox from "../modal/ModalBox.tsx";
import MainNav from "../nav/MainNav.tsx";
import logo from "../../assets/icons/Logo.jpg";
import Brand from "./Brand.tsx";

// const headerVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: { type: "spring", delay: 1.3, staggerChildren: 0.3 },
//   },
// };

const Header = () => {
  // const { t } = useTranslation();
  // const { toggleTheme } = ThemeToggler();

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-8">
          <img
            src={logo}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              marginBottom: 10,
              transform: "translate(0px, -17px)",
            }}
          />
          <Brand />
          <MainNav />
        </div>
        {/* <motion.div
          className=" header-icons col-6 col-md-4 d-flex align-items-center mb-3"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
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
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <ModalBox />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Header;
