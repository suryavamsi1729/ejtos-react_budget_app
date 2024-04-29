import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
const Currency = ()=>{
    const { dispatch} = useContext(AppContext);
    const [colorval,setcolor] = useState(['green','green','green','green']);
    const [currencyName,setCurrencyName] = useState('£ Pound');
    const changeCurrency = (symbol) => {
        const updatedarray = ['green','green','green','green'];
        switch (symbol){
            case "$":
                updatedarray[0]='white';
                setCurrencyName('$ Dollar');
                setcolor(updatedarray);
                break;
            case "£":
                updatedarray[1]='white';
                setCurrencyName('£ Pound');
                setcolor(updatedarray);
                break;
            case "€":
                updatedarray[2]='white';
                setCurrencyName('€ Euro');
                setcolor(updatedarray);
                break;
            case "₹":
                updatedarray[3]='white';
                setCurrencyName('₹ Ruppee');
                setcolor(updatedarray);
                break;
            default :
                case "$":
                updatedarray[3]='white';
                setCurrencyName('$ Dollar');
                setcolor(updatedarray);
                break;
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol,
        });
    }
    return(
        <>
        {/* style={{backgroundColor:colorval[0],color:'black'}} */}
        <Dropdown>
        <Dropdown.Toggle variant='success' id="dropdown-basic">
            Currency ({currencyName})
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'green',color:'black'}}>
            <Dropdown.Item style={{backgroundColor:colorval[0],color:'black',cursor:'default'}} href="#/action-1" onClick={()=>changeCurrency('$')}>$ Dollar</Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:colorval[1],color:'black',cursor:'default'}} href="#/action-2" onClick={()=>changeCurrency('£')}>£ Pound</Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:colorval[2],color:'black',cursor:'default'}} href="#/action-3" onClick={()=>changeCurrency('€')}>€ Euro</Dropdown.Item>
            <Dropdown.Item style={{backgroundColor:colorval[3],color:'black',cursor:'default'}} href="#/action-4" onClick={()=>changeCurrency('₹')}>₹ Ruppee</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
    );
}
export default Currency;