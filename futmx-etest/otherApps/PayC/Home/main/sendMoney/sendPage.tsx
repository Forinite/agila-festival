import React from 'react'
import { ArrowLeft,} from "lucide-react";

const SendPage = () => {
    return (
        <main className={'h-screen'}>
                <div className={'px-8 h-full'}>
                    <div className={'pt-6 w-fit h-fit'}>
                        <ArrowLeft className={'w-6 h-6 text-white r'} />
                    </div>
                    <h2 className={'text-3xl font-bold pt-6'}>Send Money </h2>

                    <form className={'mt-8 '}>

                        <div>
                            <div>
                                <div>
                                    <label className={'text-base text-neutral-300 font-semibold'}>PayC Tag</label>
                                    <input type={'text'} placeholder={'@johndoe'} className={'w-full mt-2 h-12 px-4 text-sm rounded-md _payc-btn-border text-white'} />
                                </div>
                                <div className={'flex justify-end mt-2'}>
                                    <div>
                                        <p className={'text-[#00DC8A]'}>John Doe Sept</p>
                                        <h4 className={'font-semibold  mt-1'}>Account name</h4>
                                    </div>

                                </div>

                            </div>

                            <div className={'mt-4'}>
                                <div>
                                    <label className={'text-base text-neutral-300 font-semibold'}>Description</label>
                                    <input type={'text'} placeholder={'Add a short note'} className={'w-full mt-2 h-12 px-4 text-sm rounded-md _payc-btn-border text-white'} />
                                </div>
                                <div className={' mt-4'}>
                                    <div className={'flex justify-between'}>
                                        <div className={'flex items-center gap-1'}>
                                            <input type={'checkbox'} className={'w-4 h-4 mr-2 _payc-btn-border accent-[#182C53]  bg-[#182C53]  '} />
                                            <label className={'text-sm text-neutral-300 font-semibold'}>Send to beneficiaries</label>
                                        </div>
                                        <div>
                                            <p className={' text-xs _payc-blue-text underline'}>View beneficiaries</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={'absolute bottom-16 left-0 w-full px-6 flex justify-center items-center'}>
                            <input type={'submit'} value={'Send Money'} className={'w-full mt-8 py-3 px-4 rounded-md _payc-btn-color text-white font-semibold'} />
                        </div>



                    </form>
                </div>

        </main>
    )
}
export default SendPage
