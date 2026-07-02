
import { deleteEquipment } from "../services/equipmentService";
function EquipmentTable({ equipment , onEdit}) {

    async function handleDelete(id) {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this equipment?"
    );

    if (!confirmDelete) return;

    try {

        await deleteEquipment(id);

        alert("Equipment Deleted Successfully");

        window.location.reload();

    }

    catch (error) {

        console.log(error);

        alert("Unable to delete equipment");

    }

}
    return (

        <table className="table table-bordered table-hover">

            <thead className="table-dark">

                <tr>

                    <th>Name</th>

                    <th>Type</th>

                    <th>Quantity</th>

                    <th>Status</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    equipment.map(item => (

                        <tr key={item.EquipmentId}>

                            <td>{item.EquipmentName}</td>

                            <td>{item.EquipmentType}</td>

                            <td>{item.Quantity}</td>

                            <td>{item.Status}</td>

                            <td>

                                <button
    className="btn btn-warning btn-sm me-2"
    onClick={() => onEdit(item)}
>

    Edit

</button>

                                <button
    className="btn btn-danger btn-sm"
    onClick={() => handleDelete(item.EquipmentId)}
>
    Delete
</button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default EquipmentTable;