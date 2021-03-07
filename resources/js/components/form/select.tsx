import React from 'react';

type Props = {
    name: string;
    options: Array<string>;
}

export default function Select({name, options = []}: Props) {
    return (
        <select 
            name={name} 
            className="flex-1 p-3 mr-3 border-2 border-gray-300 rounded-md form-select"
        >
            {
                options.map((option)=>(
                    <option key={name+"-"+option}>{option}</option>
                ))
            }
        </select>
    );
}