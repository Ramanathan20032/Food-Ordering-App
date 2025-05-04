import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="p-5">
      <h1 className="text-xl text-center font-bold mb-3">Custom Error Page</h1>
      <p className="text-lg text-center font-medium mb-3">
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
