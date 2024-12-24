const axios = require("axios");

const API_BASE_URL = "http://www.apificticia.com.br/capital";

const headers = {
  Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
};

async function getCustomer(cnpj) {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-customer`, {
      headers,
      params: { CNPJ: cnpj },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao obter cliente: ${error.message}`);
  }
}

async function postCustomer(data) {
  try {
    await axios.post(`${API_BASE_URL}/post-customer`, data, { headers });
  } catch (error) {
    throw new Error(`Erro ao enviar dados do cliente: ${error.message}`);
  }
}

module.exports = { getCustomer, postCustomer };
