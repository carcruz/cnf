const table = document.querySelector("#tbl-productos tbody");

// helper
const generateHTMLProduct = ({
  codigo,
  descripcion,
  estado,
  nombre,
  precio,
  _id,
}) => `
  <td>${_id}</td>
  <td>${nombre}</td>
  <td>${codigo}</td>
  <td>${precio}</td>
  <td>${descripcion}</td>
  <td>${estado}</td>`;

const mostrar_productos = async () => {
  // request
  const productos = await getProducts();
  let productosSTR = "";
  // template
  productos.forEach((producto) => {
    let fila = table.insertRow();
    fila.innerHTML = generateHTMLProduct(producto);
    console.log(fila);
    // table.insertRow().innerHTML(generateHTMLProduct(producto));
  });
};

mostrar_productos();
