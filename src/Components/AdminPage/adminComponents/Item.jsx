import { Fragment } from "react";

const Item = (props) => {

    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card item card">
                    <img src={props.image} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <span></span>{"$" + props.price}
                        </h6>
                        <span>
                            {props.category}
                        </span>
                        <hr />

                        {/* <Link >
                        HERE WE CAN ADD ITEM DETAILS PAGE TO LET THE ADMIN EDIT AND REMOVE {BUT LATER NOT NOW ;)}
                    </Link> */}

                    </div>
                </div>
            </div>
        </Fragment>


    );
}
export default Item