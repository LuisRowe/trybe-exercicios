const acordando = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func);

doingThings(acordando());
doingThings(acordando) // Se não por os parenteses ela imprime a função e não o resultado.
doingThings(cafe());
doingThings(dormir());