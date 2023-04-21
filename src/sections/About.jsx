import CompanyAbout from "../components/CompanyAbout";
import CompanyInfo from "../components/CompanyInfo";

const About = () => (
  <section id="about" className="bg-gray-100">
    
    <div className="mt-5 grid grid-cols-2 justify-items-center"><CompanyInfo /></div>
    

    <div className="mt-5 grid grid-cols-2 justify-items-center"><CompanyAbout /></div>   
  </section>
)
export default About;