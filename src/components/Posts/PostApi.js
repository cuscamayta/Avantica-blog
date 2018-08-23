import axios from "axios";

export default {
    requestPost: function () {
        return axios.get(`http://localhost:5000/posts`)
            .then(response => {
                return {
                    posts: response.data
                };
            })
    }
}
