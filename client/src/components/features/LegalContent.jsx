import parser from "html-react-parser";
import LegalSkeleton from "../../skeleton/LegalSkeleton";
import FeatureStore from "../../store/FeaturesStore";
const LegalContent = ({ title }) => {
  const { LegalDataList } = FeatureStore();
  if (LegalDataList === null) {
    return <LegalSkeleton />;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h2 className="text-center mb-5 fw-semibold">{title}</h2>
            {parser(LegalDataList.description)}
          </div>
        </div>
      </div>
    );
  }
};

export default LegalContent;
