import { useRouteError } from "react-router-dom";

const ErrorPage = function () {
    const { error } = useRouteError();
    return (
        <div>
            <h1> Error: {error} </h1>
        </div>
    )
}

export default ErrorPage;