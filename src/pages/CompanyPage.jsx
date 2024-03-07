import { useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companyId } = useParams();
  const foundCompany = props.companies.find((oneCompany) => {
    return oneCompany._id === String(companyId);
  });
  return (
    <div>
      <h1>Company Profile</h1>
      {!foundCompany && <h3>Company not found!</h3>}
      {foundCompany && (
        <>
          <p>{foundCompany.name}</p>
          <p>{foundCompany.description}</p>
          <p>{foundCompany.website}</p>
        </>
      )}
    </div>
  );
}

export default CompanyPage;
