import { dataReturn } from "./enum"

interface DataCalculatorProps {
    year: number
    month: number
    day: number
}


export function DataCalculator({ year, month, day }: DataCalculatorProps, fullReturn: string) {
    const startDate = new Date(year, month, day)
    const actualDate = new Date()
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();

    const actualYear = actualDate.getFullYear();
    const actualMonth = actualDate.getMonth();

    let yearsDifference = actualYear - startYear;
    let monthsDifference = actualMonth - startMonth;

    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
    }
    if (fullReturn === dataReturn.full) {
        return `${yearsDifference} ano${yearsDifference > 1 && 's'} e ${monthsDifference} mes${monthsDifference > 1 && 'es'}`
    } else if (fullReturn === dataReturn.month) {
        return `${monthsDifference} mes${monthsDifference > 1 && 'es'}`
    } else {
        return `${yearsDifference} ano${yearsDifference > 1 && 's'}`
    }

}