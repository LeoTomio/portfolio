import { dataReturn } from "./enum";

interface DataCalculatorProps {
    year: number;
    month: number;
    day: number;
    fullReturn: string
    language: string
}

export function DataCalculator({ year, month, day, fullReturn, language }: DataCalculatorProps) {
    const startDate = new Date(year, month, day);
    const actualDate = new Date();

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

    const yearText = language === 'pt'
        ? `${yearsDifference} ${yearsDifference !== 1 ? 'anos' : 'ano'}`
        : `${yearsDifference} ${yearsDifference !== 1 ? 'years' : 'year'}`;

    const monthText = language === 'pt'
        ? `${monthsDifference} ${monthsDifference !== 1 ? 'meses' : 'mês'}`
        : `${monthsDifference} ${monthsDifference !== 1 ? 'months' : 'month'}`;

    if (fullReturn === dataReturn.full) {
        return `${yearText} e ${monthText}`;
    }

    if (fullReturn === dataReturn.month) {
        return monthText;
    }
    return yearText;
} 