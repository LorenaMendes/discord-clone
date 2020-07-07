import React from 'react';

import { Grid } from './styles';
// SL - Server List
import ServerList from '../ServerList';
// SN - Server Name
import ServerName from '../ServerName';
// CI - Chanel Info
import ChannelInfo from '../ChannelInfo';
// CL - Chanel List
import ChannelList from '../ChannelList';
// UI - User Info
import UserInfo from '../UserInfo';
// UL - User List
import UserList from '../UserList';
// CD - Chanel Data
import ChannelData from '../ChannelData';

        
// Código equivalente em Typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <UserList />
            <ChannelData />
        </Grid>
    );
}
export default Layout;