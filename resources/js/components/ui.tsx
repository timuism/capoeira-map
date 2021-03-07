import React, {useState} from 'react';
import GlobalSearch from './global_search';
import AddUser from './add_user';
import AddGroup from './add_group';

export default function Ui () {

    const [showAddUser, setShowAddUser] = useState(false);
    const [showAddGroup, setShowAddGroup] = useState(false);

    return (
        <div id="ui" className="absolute top-0 bottom-0 left-0 right-0 m-5 space-y-5">

            <div id="panes" className="absolute z-20 flex items-center justify-center w-full h-full">
                    <AddUser show={showAddUser}  />
                    <AddGroup show={showAddGroup} />
            </div>
    
            <div className="absolute top-0 z-30 flex space-x-5">
                <GlobalSearch />
                <form method="get" action="" className="flex items-center p-5 space-x-3 bg-white rounded-md shadow-md md:flex-row justify-items-center">
                    <button 
                        type="button"
                        className="flex-grow p-3 text-lg text-white transition-colors duration-300 bg-yellow-500 rounded-md cursor-pointer hover:text-gray-600 hover:bg-gray-300"
                        onClick={() => (showAddUser ? setShowAddUser(false) : setShowAddUser(true))}
                    >
                        Add User
                    </button>
                    <button 
                        type="button"
                        className="flex-grow p-3 text-lg text-white transition-colors duration-300 bg-yellow-500 rounded-md cursor-pointer hover:text-gray-600 hover:bg-gray-300"
                        onClick={() => (showAddGroup ? setShowAddGroup(false) : setShowAddGroup(true))}
                    >
                        Add Group
                    </button>
                </form>
            </div>
            

            

                

        </div>
    );
};