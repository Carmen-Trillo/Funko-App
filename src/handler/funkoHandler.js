import FunkoService from "../service/funkoService";

export const FunkoHandler = {
    addFunko(newFunko){
        // console.log(newFunko);
        if (!newFunko) {
            return;
        }

        let funko = {
            "name": newFunko.name,
            "img": newFunko.picture,
            "bought": false,
            "date": new Date(),
            "id": ""

        }
        return FunkoService.submitFunko(funko);
    },
    loadFunkos(){
        return FunkoService.getFunkos();
    },
    loadFunko(id) {
        return FunkoService.getFunko(id);
    },
    deleteFunko(id){
        return FunkoService.deleteFunko(id);
    },
    updateFunko(id, updatedFunko){
        if (!updatedFunko) {
            return;
        }

        let updatedFunkoStructure = {
            "name": updatedFunko.name,
            "img": updatedFunko.picture,
            "bought": updatedFunko.bought,
            "date": new Date(),
            "id": updatedFunko.id,
        }

        return FunkoService.updateFunko(id, updatedFunkoStructure);
    },
    async fetchFunkos() {
        const funkos = await FunkoHandler.loadFunkos();
        return { funkos };
    },
    async fetchFunko({ params }) {
        const funko = await FunkoHandler.loadFunkho(params.id);
        return { funko };
    },
}

export default FunkoHandler

