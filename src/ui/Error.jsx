import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate=useNavigate();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  );
}

export default Error;
