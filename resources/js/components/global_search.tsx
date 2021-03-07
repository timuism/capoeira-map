import React from 'react';

export default function GlobalSearch () {
   return (
    <form method="get" action="" className="flex flex-col items-center p-5 bg-white bg-opacity-50 rounded-md md:flex-row justify-items-center">
        <input 
            id="location_search"
            type="text"
            className="flex-1 p-3 mr-3 border-2 border-gray-300 rounded-md"
            placeholder="Buscar para Grupo, Mestre ou Organizacão"  
        />
        <input type="submit" value="Search" className="p-3 text-lg text-white bg-green-500 rounded-md cursor-pointer" /> 
    </form>
   );
}