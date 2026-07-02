import { useState, useEffect } from "react";
import { addEquipment, updateEquipment } from "../services/equipmentService";

function EquipmentForm({ onAdded ,editData}) {
    
    const [formData, setFormData] = useState({

        EquipmentName: "",

        EquipmentType: "",

        Quantity: "",

        Status: "Available",

        PurchaseDate: ""

    });
   useEffect(() => {

    if (editData) {

        setFormData({

            EquipmentName: editData.EquipmentName,

            EquipmentType: editData.EquipmentType,

            Quantity: editData.Quantity,

            Status: editData.Status,

            PurchaseDate: editData.PurchaseDate
                ? editData.PurchaseDate.split("T")[0]
                : ""

        });

    }

}, [editData]);
    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

         if (editData) {

    await updateEquipment(editData.EquipmentId, {
        ...formData
    });

    alert("Equipment Updated Successfully");

}
else {

    await addEquipment(formData);

    alert("Equipment Added Successfully");

}

            setFormData({

                EquipmentName: "",

                EquipmentType: "",

                Quantity: "",

                Status: "Available",

                PurchaseDate: ""

            });

            onAdded();

        }

        catch (err) {

            console.log(err);

        }

    }

    return (

        <form onSubmit={handleSubmit} className="card p-4 mb-4">
<h4 className="mb-3">

    {editData ? "Edit Equipment" : "Add Equipment"}

</h4>

            <div className="mb-3">

                <label>Equipment Name</label>

                <input

                    type="text"

                    name="EquipmentName"

                    className="form-control"

                    value={formData.EquipmentName}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="mb-3">

                <label>Equipment Type</label>

                <input

                    type="text"

                    name="EquipmentType"

                    className="form-control"

                    value={formData.EquipmentType}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="mb-3">

                <label>Quantity</label>

                <input

                    type="number"

                    name="Quantity"

                    className="form-control"

                    value={formData.Quantity}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="mb-3">

                <label>Status</label>

                <select

                    name="Status"

                    className="form-select"

                    value={formData.Status}

                    onChange={handleChange}

                >

                    <option>Available</option>

                    <option>In Use</option>

                    <option>Maintenance</option>

                </select>

            </div>

            <div className="mb-3">

                <label>Purchase Date</label>

                <input

                    type="date"

                    name="PurchaseDate"

                    className="form-control"

                    value={formData.PurchaseDate}

                    onChange={handleChange}

                    required

                />

            </div>

           <button className="btn btn-success">

    {editData ? "Update Equipment" : "Save Equipment"}

</button>

        </form>

    );

}

export default EquipmentForm;