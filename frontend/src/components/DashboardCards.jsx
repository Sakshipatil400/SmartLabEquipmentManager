function DashboardCards({ title, count, color }) {

    return (

        <div className="col-md-3 mb-3">

            <div className={`card text-white bg-${color}`}>

                <div className="card-body text-center">

                    <h5>{title}</h5>

                    <h2>{count}</h2>

                </div>

            </div>

        </div>

    );

}

export default DashboardCards;