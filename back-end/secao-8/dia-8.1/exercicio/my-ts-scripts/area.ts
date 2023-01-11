const simbols = ['km²', 'hm²', 'dam²', 'm²' ,'dm²', 'cm²', 'mm²'];

export function convert(valor: number, from: string, to: string): string {
  const indexFrom = simbols.findIndex((simbol) => from === simbol);
  const indexTo = simbols.findIndex((simbol) => to === simbol);
  const converRate = 100 ** (indexTo - indexFrom);
  const convertedValue =  valor * converRate;
  return `${valor}${from} são ${convertedValue}${to}`
}