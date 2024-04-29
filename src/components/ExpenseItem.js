import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DEC_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaCirclePlus size="20px" style={{color:"green"}}  onClick={event=> increaseAllocation(props.name)}/></td>
        <td><FaMinusCircle size="20px" style={{color:"red"}}  onClick={event=> decreseAllocation(props.name)}/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
