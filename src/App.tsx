import React from 'react';
import './App.scss';
//components
import { Infos } from './components/Infos/Infos';
import { Map } from './components/Map/Map';
//services
import { getInfos } from './services/data';

type Location ={
  city:string;
  postalCode:number;
  timezone:number;
  lat:number;
  lng:number;
}

export type IpItemType = {
    ip:number;
    location:Location;
    Timezone:string;
    isp: string;
}


function App() {

  const [data,setData] = React.useState<IpItemType | undefined>()
  const [position,setPosition] = React.useState<Array<number | string | undefined>>([])
  const [ip,setIp] = React.useState<number | string | undefined>('')
  //handle input
  const [inputValue,setInputValue] = React.useState<string | number | undefined>(undefined)
  
  const handleInputChange = (event:any) => {
    setInputValue(event.target.value)
  }

  const submit = () =>{
    setIp(inputValue)
  }

  React.useEffect(() => {
		const getData = async () => {
			const request = await getInfos(ip);
			if (!request) return alert('data error');
			setData(request);
      setPosition([request.location.lat,request.location.lng])
		};
		getData();
    
	}, [ip]);
	if (!data) return null;

  
  console.log(data);

  console.log(position);
  
  return (
    <>
      <section>
        <h1>Ip Address Tracker</h1>
        <div id="search">
          <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Search for any IP address or domain'/>
          <button type="button" onClick={submit}><img src="./images/icon-arrow.svg" alt='arrow'/></button>
        </div>
      <Infos item={data}/>
      </section>
      <div>
        <Map item={data} map={position} />
      </div>
    </>
  );
}

export default App;
