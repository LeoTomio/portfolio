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
        ? `${yearsDifference} ano${yearsDifference !== 1 ? 's' : ''}`
        : `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''}`;

    const monthText = language === 'pt'
        ? `${monthsDifference} mês${monthsDifference !== 1 ? 'es' : ''}`
        : `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''}`;

    if (fullReturn === dataReturn.full) {
        return `${yearText} e ${monthText}`;
    }

    if (fullReturn === dataReturn.month) {
        return monthText;
    }
    return yearText;
} 