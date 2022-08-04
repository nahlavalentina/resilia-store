import axios from 'axios';

const instancia = axios.create({
    baseURL: 'http://localhost:3300/'
})

export const getProducts = async () => {
const response = await instancia.get('/produtos')
const json = await response.data.produtos;
return json
};

export const getProductsByCategory = async (category) => {
    const response = await instancia.get(`/produtos/categoria/${category}`)
    const json = await response.data.produtos;
    console.log(json)
    return json
};

export const postProduct = async (produto) => {
    const response = await instancia.post('/produtos/novo', produto)
    const json = await response.data.msg;
    return json
};

export const deleteProduct = async (id) => {
    const response = await instancia.delete(`/produtos/deletar/${id}`)
};

export const editProduct = async (id, body) => {
    const response = await instancia.patch(`/produtos/alterar/${id}`, body)
};