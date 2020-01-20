import React from 'react';
import CreateUser from './UserSwitchComponents/CreateUser';
import EditUser from './UserSwitchComponents/EditUser';


const UserSwitch = ({componentType,EditSaveDeleteHappened,sendFetchData,user}) => {

    let Output;

    switch ( componentType ) {

        case 'new':
            Output = (
                <>
                    <CreateUser
                    SendCloseUserSwitch={EditSaveDeleteHappened}
                    sendFetchData={sendFetchData}/>
                </>
            )
            break;
        case 'edit':
            Output = (
                <>
                    <EditUser
                    SendCloseUserSwitch={EditSaveDeleteHappened}
                    sendFetchData={sendFetchData}
                    user={user}/>
                </>
            )
            break;

        default:
            Output = null
            break;

  }
    return Output
}

export default UserSwitch