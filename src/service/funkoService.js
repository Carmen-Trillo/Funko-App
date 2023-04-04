import axios from "axios";
//Crea la conexión con la API a través de axios
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})
const FunkoService = {
    //Llama a la API para solicitar el método GET(consultar todos los elementos)
    async getFunkos() {
        let response = await apiClient.get("/funkos");
        let allFunkos = response.data;
        return allFunkos;
    },
    //Llama a la API para solicitar el método GET by id(consultar un elemento por su id)
    async getFunko(id) {
        let response = await apiClient.get("/funkos/" + id);
        let funko = response.data;
        return funko;
    },
    //Llama a la API para solicitar el método POST(añadir nuevo elemento)
    async submitFunko(newFunko){
        await apiClient.post("/funkos", newFunko)
    },
    //Llama a la API para solicitar el método DELETE(eliminar un elemento por su id)
    async deleteFunko(id){
        await apiClient.delete("/funkos/" + id)
    },
    //Llama a la API para solicitar el método PATCH(actualizar un elemento por su id)
    async updateFunko(id, updatedFunko){
        await apiClient.patch("/funkos/" + id, updatedFunko)
    }
}

export default FunkoService;