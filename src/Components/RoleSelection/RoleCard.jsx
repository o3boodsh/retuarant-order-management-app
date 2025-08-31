import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const RoleCard = (props) => {
    let navigate = useNavigate();
    let onClickHandler = () => {
        navigate(`/${(props.type)}`, { replace: false });
    }

    return (

        <Fragment>
            <div className="col-md-6 mb-4" >
                <div className="card role-card text-center p-4" >
                    <div className="card-body">
                        <div className={`role-icon text-${props.color}`}>
                            <i className={`fas ${props.icon}`}></i>
                        </div>
                        <h3>{props.title}</h3>
                        <p className="text-muted">{props.description}</p>
                    </div>
                    <div>
                        <button className="button" onClick={onClickHandler}><span>Let's Go </span></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RoleCard;