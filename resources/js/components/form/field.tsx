import React, { Children } from 'react';

type Props = {
    label?:string;
    children: React.ReactNode
}

export default function Field({label, children}: Props){
    return (
        <label className="flex flex-col m-1">
            <span className="mb-1 text-sm font-semibold text-gray-400">{label}</span>
            {children}
        </label>
    );
}