import React from 'react'
import { Skeleton } from '../ui/skeleton'

type LoadingEffectProps = {
    totalNumber: number;
    loadingLines: number;
}

const LoadingEffect = ({ totalNumber, loadingLines }: LoadingEffectProps) => {
    return (
        Array.from({ length: totalNumber }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
                {/* <h2 className="text-xl font-semibold mb-4">{title}</h2> */}
                <div className="flex flex-col justify-start items-center gap-2 max-h-64">
                    {
                        Array.from({ length: loadingLines }).map((_, index) => (
                            <Skeleton className="w-full h-8" key={index} />
                        ))
                    }
                </div>
            </div>
        ))
    )
}

export default LoadingEffect