export const getImagen = async () => {
  try {
    // return 'https://ajskdhaskjdhajs.com';
    const apiKey = "NvqXnNla4PZcz6SIBHouPvI3sTqZyJSr";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "No existe";
  }
};
