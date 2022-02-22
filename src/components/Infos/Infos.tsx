import * as React from 'react';
import './Infos.scss';
import { IpItemType } from '../../App'

type Props = {
    item:IpItemType;
}


export const Infos:React.FC<Props> = ({item}) => {
    return (
        <div className='infos'>
            <div>
                <h3>Ip address</h3>
                <p>{item.ip}</p>
            </div>
            <div>
                <h3>Location</h3>
                <p>{item.location.city},{item.location.postalCode}<br />
                {item.location.region},{item.location.country}</p>
            </div>
            <div>
                <h3>Timezone</h3>
                <p>UTC {item.location.timezone}</p>
            </div>
            <div>
                <h3>ISP</h3>
                <p>{item.isp}</p>
            </div>
        </div>
    );
} 

