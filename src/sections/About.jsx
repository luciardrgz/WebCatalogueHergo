import CompanyAbout from "../components/CompanyAbout";
import CompanyInfo from "../components/CompanyInfo";

const About = ({ companyInfo }) => (
  <section
    id="about"
    className="min-h-screen justify-center items-start gap-2 px-2 mt-10 grid grid-cols-1 lg:gap-10 lg:grid-cols-2"
  >
    <CompanyAbout />
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-10">
      {companyInfo && companyInfo.length > 0
        ? companyInfo.map((info) => <CompanyInfo info={info} />)
        : null}
    </div>
  </section>
);

export default About;
