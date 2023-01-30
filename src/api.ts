export const api = {
    getProducts: async () => {
        const api = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');
        const data = await api.json()
        return data;
    }
}