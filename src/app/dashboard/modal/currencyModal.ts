import {ErrorModal} from "./errorModal";
import {ExchangeTransactionDataDtoListModal} from "./exchangeTransactionDataDtoListModal";

export interface CurrencyModal {
    exchangeTransactionDataDtoList?: ExchangeTransactionDataDtoListModal[],
    error: ErrorModal,

}