require("dotenv").config();
const { getCustomer, postCustomer } = require('./scr/services/apiService');
const { saveToFirebase } = require('./scr/services/firebaseService');

async function main() {
  const cnpj = "12345678000190"; 

  try {
    const customerData = await getCustomer(cnpj);
    console.log("Dados do cliente obtidos:", customerData);

    await saveToFirebase("customer", customerData);

    await postCustomer(customerData);
    console.log("Dados enviados para a API com sucesso!");
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

main();
