(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit(fruitParam: string): boolean {
        let nameFruits = ['manzana', 'cereza', 'ciruela'];
        // return nameFruits.includes(fruitParam);
        return nameFruits.some(fruit => fruit.includes(fruitParam))

    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type fruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor(color: fruitColor): string[] {

        const fruitsColor = {
            red: ['manzana', 'cereza'],
            yellow: ['piña', 'banana'],
            purple: ['mora', 'uva']
        }

        if (!Object.keys(fruitsColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsColor[color];

        // if (color == 'red') return ['manzana', 'fresa'];

        // if (color == 'yellow') return ['piña', 'banana'];

        // if (color == 'purple') return ['moras', 'uvas']

        // throw Error('the color must be: red, yellow, purple');
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';

    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('manzana'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




