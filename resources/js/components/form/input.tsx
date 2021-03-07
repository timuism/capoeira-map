import React from 'react';

type Props = {
    id?: string;
    name: string;
    placeholder?: string;
}

export default function Input({id, name, placeholder}: Props){
    return (
        <input 
            id={id}
            type="text"
            name="{name}"
            className="flex-1 p-3 mr-3 border-2 border-gray-300 rounded-md"
            placeholder={placeholder}
        />
    );
}