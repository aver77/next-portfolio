const getContactInfo = (t: any) => {
    return [
        {
            title: t("tel"),
            description: "+7-915-543-85-25"
        },
        {
            title: t("mail"),
            description: "aser-14@bk.ru"
        },
        {
            title: t("address"),
            description: t("addressLocation")
        },
        {
            title: t("linkedIn"),
            description: "Linkedin.com",
            link: "https://www.linkedin.com/in/nikita-averochkin-761917276/"
        }
    ];
};

const getSkillsInfo = () => {
    return [
        "HTML / CSS / Figma",
        "JavaScript / Typescript",
        "React.js / Redux / MobX / Zustand",
        "Vue.js / VueX",
        "Sass / CSS in JS / tailwind",
        "Ant Design / Material UI",
        "Jest / Playwright",
        "Webpack / Vite",
        "REST API / GraphQL / Postman / Swagger",
        "Clean architecture / Design patterns",
        "NodeJs / Express / MongoDB / RabbitMQ",
        "Docker / Docker-compose / Microservices",
        "Agile / Scrum / Kanban"
    ];
};

const getEducationInfo = (t: any) => {
    return [
        {
            year: "2019-2023",
            title: t("institution"),
            description: t("institutionDirection")
        }
    ];
};

const getLanguagesInfo = (t: any) => {
    return [t("english"), t("russian")];
};

export { getSkillsInfo, getContactInfo, getLanguagesInfo, getEducationInfo };
