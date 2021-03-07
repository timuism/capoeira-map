import React from 'react';
import Input from './form/input';
import Field from './form/field';

type Props = {
    show: boolean;
} 

export default function AddGroup({show}: Props){
    return (
            <div 
            className={`
                ${show ? 'flex opacity-1' : 'hidden opacity-0'} 
                flex flex-col items-center p-5 bg-white rounded-md shadow-md justify-items-center
                transition-opacity duration-300
                `}
            >            
            <h2 className="text-lg font-semibold text-gray-400 capitalize">Add New Group</h2>
            <form className="flex flex-col w-full">
                
                <Field label="Email">
                    <Input id="address_search" name="address" placeholder="Address" />
                </Field>

                <Field label="Group Name">
                    <Input name="group_name" placeholder="Group Name" />
                </Field>

                <Field label="Mestre, Mestra or Group Leader">
                    <Input name="group_leader" placeholder="Mestre, Mestra, or Group Leader" />
                </Field>

                <button className="p-5 m-5 text-white bg-yellow-600 rounded-md" type="submit">Add Group</button>
            </form>
        </div>
    );
}