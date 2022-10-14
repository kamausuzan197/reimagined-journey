import "./Success.css"
import Button from "../components/Button";

function Success() {
    const routeChange = () => {
        let path = "/home";
        window.location.href = path;
    }
    return (
        <div className="success">
            <div className="success-note">
                <div className="tick-icon">
                    <i className="fas fa-check"></i>
                </div>
                <h1 className="success-text">order Created Successfully</h1>
            </div>
            <Button
                onClick={routeChange}
                name="Go to Home"
                bgColor="blue"
                color="gray"
                padding="8px"
                radius="10px"
                fontSize='20px' />
        </div>
    )
}

export default Success