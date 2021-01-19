import m from "mithril";

export default class BaseService {
    constructor(vnode) {
        this._base = "https://api.pokemontcg.io/v1";
    }

    async buscarTodosCards(){
        const uri = `${this._base}/cards?page=1&pageSize=10`;
        return m.request(uri, resultado => {
            return resultado;
        });
    }
}