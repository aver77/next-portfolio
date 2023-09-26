import { useTranslations } from "next-intl";

import getCompaniesData from "./defaultData";
import Company from "./company";
import AboutMe from "./aboutMe";

import styles from "./styles.module.scss";

const MainInfo = () => {
    const t = useTranslations("home");

    const companies = getCompaniesData(t);

    return (
        <div className={styles.container}>
            <AboutMe />
            {companies.map((companyData, index) => (
                <Company key={"_" + index + companyData.companyName} {...companyData} />
            ))}
        </div>
    );
};
export default MainInfo;
