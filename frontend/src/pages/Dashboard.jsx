import { useEffect, useState } from "react";

import DashboardCards from "../components/DashboardCards";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

        TotalEquipment: 0,

        Available: 0,

        InUse: 0,

        Maintenance: 0

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const response = await getDashboard();

            setDashboard(response.data);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Dashboard

            </h2>

            <div className="row">

                <DashboardCards
                    title="Total Equipment"
                    count={dashboard.TotalEquipment}
                    color="primary"
                />

                <DashboardCards
                    title="Active"
                    count={dashboard.Active}
                    color="success"
                />

                <DashboardCards
                    title="Under Maintenance"
                    count={dashboard.UnderMaintenance}
                    color="warning"
                />

                <DashboardCards
                    title="Decommissioned"
                    count={dashboard.Decommissioned}
                    color="danger"
                />

            </div>

        </div>

    );

}

export default Dashboard;