const simbols = ['kl', 'hl', 'dal', 'l' ,'dl', 'cl', 'ml'];

export function convert(valor: number, from: string, to: string): string {
  const indexFrom = simbols.findIndex((simbol) => from === simbol);
  const indexTo = simbols.findIndex((simbol) => to === simbol);
  const converRate = 10 ** (indexTo - indexFrom);
  const convertedValue =  valor * converRate;
  return `${valor}${from} são ${convertedValue}${to}`
}