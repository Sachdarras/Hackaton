import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import CompanyCard from "./CompanyCard";

function CompanyCarousel() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/entreprise")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCompanies(response.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderCompany = (company) => (
    <CompanyCard key={company.id} company={company} />
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Carousel items={companies} renderItem={renderCompany} />;
}

export default CompanyCarousel;
