import React from "react";
import Cards from "./Cards";
import FeatureHighlights from "./FeatureHighlights";
import EvidenceCard from "./EvidenceCard";

const Home: React.FC = () => {
  return (
    <div className="container pt-5 mt-5 mb-5">
      <div className="row">
        <div className="col-12 mb-4">
          <EvidenceCard quarter="Q3" progress={25} />
        </div>
      </div>

      <div className="row">
        <div className="col-12"></div>
      </div>

      <Cards />
      <FeatureHighlights />
    </div>
  );
};

export default Home;
