import React from 'react';

import { Grid } from './styles';

// SL - Server List
import ServerList from '../ServerList';

// SN - Server Name
// CI - Chanel Info
// CL - Chanel List
// CD - Chanel Data
// UL - User List
// UI - User Info

// Código em Javascript
// export default function(){
//     return (
//         <div>Oi, mundo!</div>
//     );
// }
        
// Código equivalente em Typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
        </Grid>
    );
}
export default Layout;