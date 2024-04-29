import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,currency,dispatch,expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const spent = expenses.reduce(
            (previousExp, currentExp) => {
                return previousExp + currentExp.cost
            },0
        );
        if(event.target.value>=spent){
            setNewBudget(event.target.value);
        }
        dispatch(
            {
                type : 'SET_BUDGET',
                payload : event.target.value
            }
        );
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;