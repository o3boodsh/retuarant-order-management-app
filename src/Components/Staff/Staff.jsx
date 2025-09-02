
const Staff = (props) => {

    return (
        <>
            <div className="col-md-4">
                <div className="card item card">
                    <div className="card-body">
                        <h5 className="card-title">{props.id}</h5>
                        <p className="card-text">{props.name}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <span></span>{props.category}
                        </h6>
                        <hr />

                        {/* <Link >
                        HERE WE CAN ADD ITEM DETAILS PAGE TO LET THE ADMIN EDIT AND REMOVE {BUT LATER NOT NOW ;)}
                    </Link> */}

                    </div>
                </div>
            </div>
        </>


    );
}
export default Staff