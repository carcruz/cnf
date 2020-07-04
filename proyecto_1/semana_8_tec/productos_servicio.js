const PRODUCTOS_URL =
  "https://proyect01-inventario-produc.herokuapp.com/api/listar-productos";

const getProducts = async () => {
  let productos = [];

  await axios({ method: "get", url: PRODUCTOS_URL, responseType: "json" })
    .then((response) => {
      productos = response.data.productos;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return productos;
};
