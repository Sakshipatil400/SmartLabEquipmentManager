import api from "../api/axios";

export const getEquipment = () => api.get("/equipment");

export const getEquipmentById = (id) => api.get(`/equipment/${id}`);

export const addEquipment = (data) => api.post("/equipment", data);

export const updateEquipment = (id, data) =>
    api.put(`/equipment/${id}`, data);

export const deleteEquipment = (id) =>
    api.delete(`/equipment/${id}`);

export const searchEquipment = (name) =>
    api.get(`/equipment/search?name=${name}`);

export const filterEquipment = (status) =>
    api.get(`/equipment/filter?status=${status}`);