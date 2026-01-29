import React from 'react'




const ConfirmationDropUpContext_Swap = () => {

    const swapDetails = {
        transactionFee: {value: 10, currency: 'NGN' },
        conversion: { from: 'SUI', to: 'USDC',amount: 1, rate: 4.9},
    }

    const swapDetailsArray = [
        {label: 'Transaction Fee', value:` ${swapDetails.transactionFee.currency}  ${swapDetails.transactionFee.value.toFixed(2)}` },
        {label: 'Conversion Rate', value:`  ${swapDetails.conversion.amount} ${swapDetails.conversion.from}  =  ${swapDetails.conversion.rate} ${swapDetails.conversion.to} ` },
        {label: 'Currency', value:` ${swapDetails.conversion.to} ` },
        {label: 'You receive', value:` ${swapDetails.conversion.amount * swapDetails.conversion.rate } ${swapDetails.conversion.to} ` },
    ]

    return (
        <div className={'w-full pb-12'}>
            <div className={'w-full text-center pt-4'}>
                <h4 className={'font-semibold  text-sm'}>You are Converting</h4>
                <h2 className={'text-xl font-extrabold uppercase'}>{ 200 } {'Sui'}</h2>
                <h4 className={'font-semibold  text-sm'}>and receiving { 2.9 } { 'USDC' } </h4>
            </div>

            <div className={'w-full mt-6 bg-[#234786] rounded-md px-4 space-y-2 py-2'}>

                {swapDetailsArray.map((item, i) => (
                    <div className={'text-[9px]  flex items-center justify-between tracking-wide'}>
                        <label>{item.label}</label>
                        <p className={'text-white font-bold'}>
                            {item.value}
                        </p>
                    </div>
                ))}


            </div>

            <div className={'mt-14'}>
                <button className={'_payc-btn-color w-full h-full text-white text-sm font-bold text-center rounded-lg py-3 '}>
                    Confirm Swap
                </button>
            </div>
        </div>
    )
}
export default ConfirmationDropUpContext_Swap
