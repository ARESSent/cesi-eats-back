import axios from "axios"

export const api = 
{
    baseURL: "http://localhost:",
    headers: {
        'Content-Type': 'application/json',
    },
    postLogin: async (email, password) => 
    {
        let port = "3001";
        let path= "/auth/login";
        let body = {
            email: email,
            password: password
        }
        var config = {
            method: 'post',
            url: api.baseURL+port+path,
            data: body
        }

        return await axios(config).then((response) => {
            if (response.status === 200) 
            {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.assign(api.baseURL+"4000");
                return "success"
            } 
            else 
            {
                let err = new Error("Error !!")
                return err
            }
        }).catch((error) => {
            alert(error)
        })
    },
    postSignin: async (firstname, lastname, email, password, passwordConfirm, birthdate) => 
    {
        const date = new Date(birthdate);
        const mm = String(date.getMonth() + 1).padStart(2, '0'); 
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        birthdate = `${mm}/${dd}/${yyyy}`;

        let port = "3001";
        let path= "/auth/register";
        let body = {
            firstname:firstname, 
            lastname:lastname, 
            email:email, 
            password:password, 
            passwordConfirm:passwordConfirm, 
            birthdate:birthdate, 
            address:{}
        }
        var config = {
            method: 'post',
            url: api.baseURL+port+path,
            data: body
        }

        return await axios(config).then((response) => {
            if (response.status === 201) 
            {
                window.location.assign(api.baseURL+"4000/logIn")
                return "success"
            } 
            else 
            {
                let err = new Error("Error !!")
                return err
            }
        }).catch((error) => {
            alert(error)
        }) 
    },
    
    generateAddressJSON: async (userAdresses) => 
    {
        const { Office, Home } = userAdresses.addresses;
        return {
          Office: {
            Street: Office.Street,
            Number: Office.Number,
            PostalCode: Office.PostalCode,
            City: Office.City,
            Country: Office.Country,
          },
          Home: {
            Street: Home.Street,
            Number: Home.Number,
            PostalCode: Home.PostalCode,
            City: Home.City,
            Country: Home.Country,
          },
        };
    },
    postUpdateAccourt: async (firstname, lastname, password, passwordConfirm, birthdate, userAdresses) => 
    {
        const date = new Date(birthdate);
        const mm = String(date.getMonth() + 1).padStart(2, '0'); 
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        birthdate = `${mm}/${dd}/${yyyy}`;
        const addressJSON = api.generateAddressJSON(userAdresses);

        let port = "3002";
        let path= "/user";
        let body = {
            firstname:firstname, 
            lastname:lastname, 
            password:password, 
            passwordConfirm:passwordConfirm, 
            birthdate:birthdate, 
            addresses: addressJSON
        }
        var config = {
            method: 'post',
            url: api.baseURL+port+path,
            data: body
        }

        return await axios(config).then((response) => {
            if (response.status === 201) 
            {
                window.location.assign(api.baseURL+"4000/profile")
                return "success"
            } 
            else 
            {
                let err = new Error("Error !!")
                return err
            }
        }).catch((error) => {
            alert(error)
        }) 
    }
}

export default api;