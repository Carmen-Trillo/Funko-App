import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const FunkhoService = {
    async getFunkhos() {
        let response = await apiClient.get("/funkhos");
        let allFunkhos = response.data;
        return allFunkhos;
    },
    async getFunkho(id) {
        let response = await apiClient.get("/funkhos/" + id);
        let funkho = response.data;
        return funkho;
    },
    async submitFunkho(newFunkho){
        await apiClient.post("/funkhos", newFunkho)
    },
    async deleteFunkho(id){
        await apiClient.delete("/funkhos/" + id)
    },
    async updateFunkho(id, updatedFunkho){
        await apiClient.patch("/funkhos/" + id, updatedFunkho)
    }
}