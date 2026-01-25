import React from 'react'

const LoadingDropUp_SendMoney = () => {
    return (
        <div className={'py-4'}>
            <div>
                <div className={'relative py-8 flex items-center justify-center'}>
                    <div className={'relative h-30 '}>
                        <div className={' h-full aspect-square rounded-full bg-slate-700 '}></div>
                        <div className={'absolute top-1/2 left-1/2 w-0  flex items-center justify-center'}>
                            {['','','','','','',''].map((item, index) => (
                                <div  key={index} style={{rotate: (180 - (index * 45) + 'deg')}} className={`absolute  origin-top top-0 h-17 w-4 flex items-end justify-center `}>
                                    <div className={`h-8 w-3 rounded-full bg-white `} />
                                </div>
                            ))}

                        </div>
                    </div>


                </div>
            </div>

            <div className={'pb-32'}>
                <p className={'text-center font-semibold'}>Hang on</p>
                <p className={'text-center font-semibold'}>Your transaction is being processed</p>
            </div>
        </div>
    )
}
export default LoadingDropUp_SendMoney
