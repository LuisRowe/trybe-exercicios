const simbols = ['km³', 'hm³', 'dam³', 'm³' ,'dm³', 'cm³', 'mm³'];

export function convert(valor: number, from: string, to: string): string {
  const indexFrom = simbols.findIndex((simbol) => from === simbol);
  const indexTo = simbols.findIndex((simbol) => to === simbol);
  const converRate = 1000 ** (indexTo - indexFrom);
  const convertedValue =  valor * converRate;
  return `${valor}${from} são ${convertedValue}${to}`
}