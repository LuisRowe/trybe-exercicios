import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 8cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 30cm, 30cm e 30cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log("\nVERIFICA A ÁREA DOS LOSANGOS:");

console.log(`DIAMETROS- 32cm, 18cm: ${Ex.getDiamondArea(32, 18)}cm²`);
console.log(`DIAMETROS- 200cm, 50cm: ${Ex.getDiamondArea(200, 50)}cm²`);
console.log(`DIAMETROS- 75cm, 25cm: ${Ex.getDiamondArea(75, 25)}cm²`);

console.log("\nVERIFICA A ÁREA DOS TRAPÉZIOS:");

console.log(`BASE MAIOR - 100cm, BASE MENOR - 70cm, ALTURA - 50cm: ${Ex.getTrapezeArea(100, 70, 50)}cm²`);
console.log(`BASE MAIOR - 75cm, BASE MENOR - 50cm, ALTURA - 35cm: ${Ex.getTrapezeArea(75, 50, 35)}cm²`);
console.log(`BASE MAIOR - 150cm, BASE MENOR - 120cm, ALTURA - 80cm: ${Ex.getTrapezeArea(150, 120, 80)}cm²`);

console.log("\nVERIFICA A ÁREA DOS CÍRCULOS:");

console.log(`RAIO 25cm: ${Ex.getCircleArea(25)}cm²`);
console.log(`RAIO 100cm: ${Ex.getCircleArea(100)}cm²`);
console.log(`RAIO 12,5cm: ${Ex.getCircleArea(12.5)}cm²`);