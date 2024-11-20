import { ChangeEvent } from "react"

interface Inputs {
    label: string, 
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type: string
}

export const Input = ({label, placeholder, onChange, type}: Inputs) => {
    return (
        <div className="w-[75%] ml-[10%]">
            <label className="block mb-2 text-sm font-medium text-black p-0.5">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-slate-400 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}