import { useEffect, useState } from "react";

import { getEquipment } from "../services/equipmentService";

import EquipmentTable from "../components/EquipmentTable";

import { searchEquipment, filterEquipment } from "../services/equipmentService";

import EquipmentForm from "../components/EquipmentForm";

function Equipment() {

    const [equipment, setEquipment] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    useEffect(() => {

        loadEquipment();

    }, []);

    async function loadEquipment() {

        try {

            const response = await getEquipment();

            setEquipment(response.data);

        }

        catch (error) {

            console.log(error);

        }

    }

    async function handleSearch(value) {

    setSearch(value);

    if (value === "") {

        loadEquipment();

        return;

    }

    const response = await searchEquipment(value);

    setEquipment(response.data);

}

async function handleFilter(value) {

    setStatus(value);

    if (value === "") {

        loadEquipment();

        return;

    }

    const response = await filterEquipment(value);

    setEquipment(response.data);

}
  const [showForm, setShowForm] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
    return (

        <div className="container mt-5">

            <h2 className="mb-4">

                Equipment Management

            </h2>

            <div className="row mb-3">

    <div className="col-md-4">

        <input
            type="text"
            className="form-control"
            placeholder="Search Equipment..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
        />

    </div>

    <div className="col-md-3">

        <select
            className="form-select"
            value={status}
            onChange={(e) => handleFilter(e.target.value)}
        >

            <option value="">All Status</option>

            <option>Available</option>

            <option>In Use</option>

            <option>Maintenance</option>

        </select>

    </div>

    <div className="col-md-5 text-end">

        <button

    className="btn btn-primary"

    onClick={() => setShowForm(!showForm)}

>

    {showForm ? "Close Form" : "Add Equipment"}

</button>

    </div>

</div>
{

showForm && (

<EquipmentForm

editData={selectedEquipment}

onAdded={() => {

loadEquipment();

setShowForm(false);

setSelectedEquipment(null);


}}

 />

)

}

            <EquipmentTable

equipment={equipment}

onEdit={(item) => {

    setSelectedEquipment(item);

    setShowForm(true);

}}

/>

        </div>

    );

}

export default Equipment;