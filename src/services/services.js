import api from "../api/api";

const services = {
    getAll: async() => {
        const response = await api.get('/laptop')
    }
}