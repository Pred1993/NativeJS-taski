export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = ReturnType<typeof setCurrencyAmount>

export const setCurrencyAmount = (amountOfBYN: string, amountOfCurrency: string) => {
    return {
        type: 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
        amountOfBYN: amountOfBYN,
        amountOfCurrency: amountOfCurrency
    } as const
};

export type ChangeAction = ReturnType<typeof setAction>;

export const setAction = (isBuying: boolean) => {
    return {
        type: 'CurrencyExchange/CHANGE_CHANGE_ACTION',
        isBuying: isBuying,
    } as const
};

export type ChangeCurrentCurrencyType = ReturnType<typeof changeCurrency>;

export const changeCurrency = (currentCurrency: string) => {
    return {
        type: 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
        currentCurrency: currentCurrency,
    } as const
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;