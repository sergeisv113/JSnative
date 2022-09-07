// console.log(1111)
export const value01_01 = '01_01'

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
                .map(w => w
                    .replace('!', '')
                    .replace('.', '')
                    .replace(',', ''))
}

export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}