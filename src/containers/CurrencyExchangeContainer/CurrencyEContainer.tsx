import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {changeCurrency, setAction, setCurrencyAmount,} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from "../../redux/state";

export const CurrencyEContainer = () => {
    const store = useSelector<IGlobalState, CurrencyState>(store => store.currency)
    const dispatch = useDispatch()

    let currencyRate: number = 0;
    const currenciesName = store.currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === store.currentCurrency) {
            currencyRate = store.isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value)) ;
                } else {
                    dispatch(setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    dispatch(setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(setAction(true)) : dispatch(setAction(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrency(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={store.currentCurrency}
                currencyRate={currencyRate}
                isBuying={store.isBuying}
                amountOfBYN={store.amountOfBYN}
                amountOfCurrency={store.amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

// export type mapDispatchToPropsType = {
//     setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void
//     setAction: (isBuying: boolean) => void
//     changeCurrency: (currency: string) => void
// }

// const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
//     return {
//         currencies: currency.currencies,
//         currentCurrency: currency.currentCurrency,
//         isBuying: currency.isBuying,
//         amountOfBYN: currency.amountOfBYN,
//         amountOfCurrency: currency.amountOfCurrency,
//     };
// };


// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): mapDispatchToPropsType => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(setCurrencyAmount(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(setAction(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(changeCurrency(currency));
//         },
//     };
// };


// const CurrencyExchangeContainer = connect(mapStateToProps, {setCurrencyAmount, setAction, changeCurrency});
//
// type TProps = ConnectedProps<typeof CurrencyExchangeContainer>;
//
// export default CurrencyExchangeContainer(CurrencyEContainer);

