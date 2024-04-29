import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
const Currency = ()=>{
    const { dispatch} = useContext(AppContext);
    const [currencyName,setCurrencyName] = useState('£ Pound');
    const changeCurrency = (symbol) => {
        switch (symbol){
            case "$":
                setCurrencyName('$ Dollar');
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: symbol,
                });
                break;
                case "£":
                    setCurrencyName('£ Pound');
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: symbol,
                    });
                    break;
                case "€":
                    setCurrencyName('€ Euro');
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: symbol,
                    });
                    break;
                case "₹":
                    setCurrencyName('₹ Ruppee');
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: symbol,
                    });
                    break;
            default :
                case "$":
                setCurrencyName('$ Dollar');
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: symbol,
                });
                break;
        }
    }
    return(
        <>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency ({currencyName})
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={()=>changeCurrency('$')}>$ Dollar</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={()=>changeCurrency('£')}>£ Pound</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>changeCurrency('€')}>€ Euro</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={()=>changeCurrency('₹')}>₹ Ruppee</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
    );
}
export default Currency;