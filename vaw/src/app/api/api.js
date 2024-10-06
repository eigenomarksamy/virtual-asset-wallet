import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
});

// Portfolio-related requests
export const getPortfolios = () => api.get('/portfolios');
export const createPortfolio = (portfolioData) => api.post('/portfolios', portfolioData);
export const getPortfolio = (id) => api.get(`/portfolios/${id}`);

// Transaction-related requests
export const addTransaction = (portfolioId, transactionData) => api.post(`/portfolios/${portfolioId}/transactions`, transactionData);
export const getTransactions = (portfolioId) => api.get(`/portfolios/${portfolioId}/transactions`);
