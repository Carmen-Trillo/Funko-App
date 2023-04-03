import { FunkhoService } from "../services/FunkhoServices";

export const FunkhoHandler = {
    addFunkho(newFunkho){
        // console.log(newFunkho);
        if (!newFunkho) {
            return;
        }

        let funkho = {
            "name": newFunkho.funkhoName,
            "img": newFunkho.funkhoPicture,
            "bought": false,
            "date": new Date(),
            "id": ""

        }
        return FunkhoService.submitFunkho(funkho);
    },
    loadFunkhos(){
        return FunkhoService.getFunkhos();
    },
    loadFunkho(id) {
        return FunkhoService.getFunkho(id);
    },
    deleteFunkho(id){
        return FunkhoService.deleteFunkho(id);
    },
    updateFunkho(id, updatedFunkho){
        if (!updatedFunkho) {
            return;
        }

        let updatedFunkhoStructure = {
            "name": updatedFunkho.funkhoName,
            "img": updatedFunkho.funkhoPicture,
            "bought": updatedFunkho.funkhobought,
            "date": new Date(),
            "id": updatedFunkho.id,
        }

        return FunkhoService.updateFunkho(id, updatedFunkhoStructure);
    },
    async fetchFunkhos() {
        const funkhos = await FunkhoHandler.loadFunkhos();
        return { funkhos };
    },
    async fetchFunkho({ params }) {
        const funkho = await FunkhoHandler.loadFunkho(params.id);
        return { funkho };
    },
}

export default ProductHandler

