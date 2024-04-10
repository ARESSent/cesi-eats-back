import axios from "axios"

export const api = 
{
    baseURL: "http://localhost:",
    headers: {
        'Content-Type': 'application/json',
    },
    postTestToken: async (token) => {
        let port = "3001";
        let path = "/verify-token";
        try {
          const response = await axios.post(`${api.baseURL}${port}${path}`, { token });
          if (response.status === 200) {
            if (!response.data.valid)
            {
              localStorage.removeItem('token');
              window.location.reload();
            }
            return "tokenTested"; 
          }
          throw new Error('Request failed with status: ' + response.status);
        } catch (error) {
          console.error('Error during token verification:', error);
          localStorage.removeItem('token');
          window.location.reload();
          throw error; 
        }
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
    postSignin: async (firstname, lastname, email, password, passwordConfirm, birthdate, userType) => 
    {
        const date = new Date(birthdate);
        const mm = String(date.getMonth() + 1).padStart(2, '0'); 
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        birthdate = `${mm}/${dd}/${yyyy}`;
        const address = {
          "Home":
          {"Street":"N/A","Number":"N/A","PostalCode":"N/A","City":"N/A","Country":"N/A"},
          "Work":
          {"Street":"N/A","Number":"N/A","PostalCode":"N/A","City":"N/A","Country":"N/A"}
        }

        let port = "3001";
        let path= "/auth/register";
        let body = {
            firstname:firstname, 
            lastname:lastname, 
            email:email, 
            password:password, 
            passwordConfirm:passwordConfirm, 
            birthdate:birthdate, 
            address:address,
            userType:userType
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
    putUpdateAccount: async (token, userInfo) => 
    {
        const date = new Date(userInfo.birthdate);
        const mm = String(date.getMonth() + 1).padStart(2, '0'); 
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        userInfo.birthdate = `${mm}/${dd}/${yyyy}`;
        let port = "3002";
        let path= "/user/"+userInfo.id;
        let body = {
            firstname:userInfo.firstname, 
            lastname:userInfo.lastname,  
            birthdate:userInfo.birthdate, 
            address: userInfo.addresses
        }
        var config = {
            method: 'put',
            url: api.baseURL+port+path,
            data: body,
            headers: {
              'Authorization': `Bearer ${token}`
            }
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
    },
    deleteUser: async (token, id) => 
    {
        let port = "3002";
        let path= "/user/"+id;
        let body = {
        }
        var config = {
            method: 'delete',
            url: api.baseURL+port+path,
            data: body,
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }

        return await axios(config).then((response) => {
            if (response.status === 200) 
            {
              localStorage.removeItem('token');
                window.location.assign(api.baseURL+"4000/signin")
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
    getProfile: async (token) => 
    {
        let port = "3002";
        let path = "/user/profile";
        try {
          const response = await axios.get(`${api.baseURL}${port}${path}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
    
          if (response.status === 200) { 
            return response.data;
          } else {
            throw new Error(`Error: Received status code ${response.status}`);
          }
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          throw error; 
        }
    },
    getCatResto: async ( catname) => 
    {
        let port = "3003";
        let path = "/article/cat/"+catname;
        try {
          const response = await axios.get(`${api.baseURL}${port}${path}`, {
          });
    
          if (response.status === 200) { 
            return response.data;
          } else {
            throw new Error(`Error: Received status code ${response.status}`);
          }
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          throw error; 
        }
    }
};
export default api;