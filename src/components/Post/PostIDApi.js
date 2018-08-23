import axios from "axios";

export default {
    requestPost: function (id) {
        return axios.get(`http://localhost:5000/posts/${id}`)
            .then(response => {
                return {
                    posts: response.data
                };
            })
    }
}
