import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>TOY BARI - {title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
