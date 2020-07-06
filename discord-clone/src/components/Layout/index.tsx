import React from 'react';

import { Grid } from './styles';

// SL - Server List
import ServerList from '../ServerList';

// SN - Server Name
import ServerName from '../ServerName';

// CI - Chanel Info
import ChannelInfo from '../ChannelInfo';
// CL - Chanel List
// CD - Chanel Data
// UL - User List
// UI - User Info

        
// Código equivalente em Typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
        </Grid>
    );
}
export default Layout;