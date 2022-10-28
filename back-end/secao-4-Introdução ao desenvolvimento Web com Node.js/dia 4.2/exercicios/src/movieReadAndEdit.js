const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const findMaxId = (movies) => {
  const ids = movies.map((movie) => movie.id)
  ids.sort((a, b) => a-b)
  const index = ids.length - 1;
  return ids[index] + 1;
}

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const writeFile = async (newMovie) => {
  try {
    const movies = await readFile();
    const newId = findMaxId(movies);
    const movieWithId = {
      id: newId,
      ...newMovie,
    };
    const allMoviesToWrite = JSON.stringify([...movies, movieWithId])
    await fs.writeFile(moviesPath,allMoviesToWrite);
    return movieWithId;
  } catch (error) {
    console.error(`Arquivo não pôde ser gravado: ${error}`);
  }
};

const editMovie = async (idToEdit, movieEdited) => {
  try {
    const movies = await readFile();
    if (movies.every(({id}) => id !== Number(idToEdit))) {
      throw new Error("Id não encontrado.")
    }
    const movieWithId = {
      id: Number(idToEdit),
      ...movieEdited,
    };
    const arraywithoutEdited = (movies.filter(({id}) => id !== Number(idToEdit)));
    console.log(arraywithoutEdited);
    const allMoviesToWrite = [...arraywithoutEdited, movieWithId];
    allMoviesToWrite.sort((a, b) => a.id-b.id)
    const allMoviesToWriteJson = JSON.stringify(allMoviesToWrite)
    await fs.writeFile(moviesPath,allMoviesToWriteJson);
    return movieWithId;
  } catch (error) {
    console.error(`Arquivo não pôde ser editado: ${error}`);
  }
};

const deleteMovie = async (idToDelete) => {
  try {
    const movies = await readFile();
    if (movies.every(({id}) => id !== Number(idToDelete))) {
      throw new Error("Id não encontrado ou já deletado.")
    }
    const arraywithoutDeleted = JSON.stringify(movies.filter(({id}) => id !== Number(idToDelete)));
    await fs.writeFile(moviesPath,arraywithoutDeleted);
    console.log(`O filme com o ID: ${idToDelete} foi excluído`);
    return true;
  } catch (error) {
    console.error(`Arquivo não pôde ser gravado: ${error.message}`);
  }
};

module.exports = {readFile, writeFile, editMovie, deleteMovie};