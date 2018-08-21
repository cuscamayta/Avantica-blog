import axios from "axios";

export default {
    requestPost: function (id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                return {
                    posts: response.data
                };
            })
    }
}
