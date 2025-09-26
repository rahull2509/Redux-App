import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index'; 
import { useSelector } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button 
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Update Balance {balance}
      <button 
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
