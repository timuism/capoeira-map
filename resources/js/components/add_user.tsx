import React from 'react';
import Field from './form/field';
import Select from './form/select';
import Input from './form/input';

type Props = {
    show: boolean;
} 

export default function AddUser({show}: Props){
    return (
        <div 
            className={`
                ${show ? 'flex opacity-1' : 'hidden opacity-0'} 
                flex flex-col items-center p-5 bg-white rounded-md shadow-md justify-items-center
                transition-opacity duration-300
            `}
        >
            <h2 className="text-lg font-semibold text-gray-400 capitalize">Add New User</h2>
            <form className="flex flex-col w-full text-gray-700">

                <Field label="My name is">
                    <Input name="user_full_name" />
                </Field>

                <Field label="But you can call me">
                    <Input name="user_display_name" />
                </Field> 

                <Field label="Email or Phone?">
                    <Select name="way_of_contact" options={["email", "phone"]} />
                </Field>

                <Field label="Email">
                    <Input  name="user_email" />
                </Field>

                <Field label="Phone Number">
                    <Input name="user_phone" />
                </Field>
                
                <button className="p-5 m-5 text-white bg-yellow-600 rounded-md" type="submit">Add User</button>
            </form>
        </div>
    );
}