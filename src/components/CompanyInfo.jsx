import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyInfo = ({ info }) => (
    <div className="w-full p-4 md:w-100 bg-hergo-blue rounded-lg">
      <FontAwesomeIcon
        icon={info.icon}
        class="w-10 h-10 mb-2 p-2 text-center text-white rounded-full shadow-lg bg-hergo-red rounded-full"
      />
      <h6 className="text-base md:text-[1.5em] lg:text-[1.5em] font-extrabold mb-1 text-white leading-tight">
        {info.title}
      </h6>
      <p className="mb-4 text-md text-white" style={{ minHeight: "4em" }}>
        {info.description}
      </p>
    </div>
);

export default CompanyInfo;
