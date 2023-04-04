import FunkoService from "../service/funkoService";

export const FunkoHandler = {
    //Para interpretar los datos que entran desde el formlario y llevarlos al objeto de la api
    addFunko(newFunko){
        //console.log(newFunko);
        if (!newFunko) {
            return;
        }

        let funko = {
            "name": newFunko.name,
            "img": newFunko.img,
            "bought": false,
            "date": new Date(),
            "id": ""

        }
        console.log(funko)
        return FunkoService.submitFunko(funko);
    },
    //Para solicitar la consulta de todos los elementos
    loadFunkos(){
        return FunkoService.getFunkos();
    },
    //Para solicitar la consulta de un único elemento por su id
    loadFunko(id) {
        return FunkoService.getFunko(id);
    },
    //Para eliminar un único elemento por su id
    deleteFunko(id){
        return FunkoService.deleteFunko(id);
    },
    //Para interpretar los datos que entran desde el formlario y llevarlos al objeto de la api
    updateFunko(id, updatedFunko){
        if (!updatedFunko) {
            return;
        }

        let updatedFunkoStructure = {
            "name": updatedFunko.name,
            "img": updatedFunko.img,
            "bought": updatedFunko.bought,
            "date": new Date(),
            "id": updatedFunko.id,
        }

        return FunkoService.updateFunko(id, updatedFunkoStructure);
    },
}

export default FunkoHandler

