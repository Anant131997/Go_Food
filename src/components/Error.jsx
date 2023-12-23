import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-page">
            <h1 className="error-heading">Oops !</h1>
            <h2>Something went wrong !!</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error;