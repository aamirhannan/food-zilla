import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    // console.log(err.data);
    return(
        <>
            <h1>OOPs</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.data}</h2>
        </>
    )
}

export default Error;