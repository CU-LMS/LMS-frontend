import "./HOCcomponent.css"
import Spinner from 'react-bootstrap/Spinner';

const LoadingPage = () => {
    return(
        <>
        <div className="un-auth-con">
            <div className="un-auth-wrap">
                <Spinner/>
            </div>
        </div>
        </>
    )
}

export default LoadingPage