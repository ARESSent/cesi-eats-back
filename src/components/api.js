import axios from "axios"

export const request = axios.create({
    baseURL: "http://localhost/3000",
    headers: {
      'Content-Type': 'application/json'
    }
  })


export const api = {
    headers: {
        'Authorization': 'Bearer secret_OcgrinUIbnnczMb6qNEoCBuxs5GF3wjOlCMwyt2ZJZl',
        'Content-Type': 'application/json',
    },
    getLogin: async (email, password) => {

        let body = {}
        let params = "?filter[name][_eq]=" + contextName
        let collection = "context"
        var config = {
            method: 'get',
            url: request.baseURL+collection+params,
            data: body
        }

        var validContext

        return await axios(config).then((response) => {
            if (response.status === 200) {
                validContext = response.data.data[0]
                return validContext
            } else {
                let err = new Error("Error !!")
                return err
            }
        }).catch((error) => {
            alert(error)
        })
    }
}