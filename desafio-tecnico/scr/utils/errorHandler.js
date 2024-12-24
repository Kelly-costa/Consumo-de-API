function handleApiError(error) {
    if (error.response) {
      return `Erro na API: ${error.response.status} - ${error.response.data}`;
    }
    return `Erro na API: ${error.message}`;
  }
  
  module.exports = { handleApiError };
  