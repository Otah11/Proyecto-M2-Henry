export async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de las películas.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
