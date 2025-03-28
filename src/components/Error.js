import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Custom Error Page</h1>
      <p>
        {err.status} : {err.statusText}
      </p>
    </>
  );
};

export default Error;
