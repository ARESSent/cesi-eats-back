import axios from 'axios';

class ApiDelivery {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3007/delivery',
      // Tu pourrais également définir des headers qui sont communs à toutes les requêtes ici.
    });
  }

  // Méthode pour configurer le token d'authentification.
  setAuthToken(token) {
    this.apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Méthode pour récupérer la liste des commandes.
  async listOrders() {
    try {
      const response = await this.apiClient.get('/listOrder');
      return response.data;
    } catch (error) {
      // Tu peux choisir de gérer les erreurs ici ou de les relancer pour les gérer à un niveau supérieur.
      throw error;
    }
  }

  async pickUp(orderId) {
    try {
      const response = await this.apiClient.put('/assign', {
        orderId: orderId, 
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getOrderDetails(orderId) {
    try {
      const response = await this.apiClient.get(`/order/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Tu peux ajouter d'autres méthodes ici pour gérer différentes routes de ton API.
}

export default new ApiDelivery();
