import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const FunkoService = {
    async getFunkos() {
        let response = await apiClient.get("/funkos");
        let allFunkos = response.data;
        return allFunkos;
    },
    async getFunko(id) {
        let response = await apiClient.get("/funkos/" + id);
        let funko = response.data;
        return funko;
    },
    async submitFunko(newFunko){
        await apiClient.post("/funkos", newFunko)
    },
    async deleteFunko(id){
        await apiClient.delete("/funkos/" + id)
    },
    async updateFunko(id, updatedFunko){
        await apiClient.patch("/funkos/" + id, updatedFunko)
    }
}

export default FunkoService;