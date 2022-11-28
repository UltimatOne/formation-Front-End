/**
 * retourne la température plus proche de zero
 * @param  {...any} temperatures liste de températures
 * @returns température
 */


function temperatureProcheDeZero(...temperatures: number[]): number{
    let plusProcheDeZero = temperatures[0];
    for (let temperature of temperatures) {
        if (Math.abs(temperature) < Math.abs(plusProcheDeZero)) {
            plusProcheDeZero = temperature
        }
    }
    return plusProcheDeZero;
};
console.log(temperatureProcheDeZero(11, 82, 6, -8, -9, -8, -9, 18, -30))