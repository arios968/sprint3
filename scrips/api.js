const enlace_server = "http://localhost:3000/viviendas";

export const consumir_base = async () => {
  try {
    const pedir = await fetch(enlace_server);
    const yeisson = await pedir.json();
    return yeisson;
  } catch (error) {
    console.log(error);
  }
};

export const api_para_buscar = async (busqueda) => {
  try {
    let response = await fetch(enlace_server + busqueda);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const obtener_propiedad = async (id) => {
  try {
    const pedir = await fetch(enlace_server + "/" + id);
    const yeisson = await pedir.json();
    console.log(yeisson);
    return yeisson;
  } catch (error) {
    console.log(error);
  }
};
