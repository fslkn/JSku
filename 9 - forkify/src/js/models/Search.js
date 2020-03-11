import axios from 'axios';
import {config} from '../config';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        try{
            const res = await axios(`${config.getAPI}?apiKey=${config.key}&query=${this.query}&number=100`);
            this.results = res.data.results;
        }catch(err){
            alert(err);
        }
    }
}