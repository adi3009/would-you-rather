import React, {useState} from 'react';
import PageTitle from './PageTitle';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addPoll} from '../slices/pollsSlice';
import {selectLoggedInUser} from '../slices/authSlice';
import { unwrapResult } from '@reduxjs/toolkit'

function NewPoll() {

  const dispatch = useDispatch();

  const [optionOne, setOptionOne] = useState('');

  const [optionTwo, setOptionTwo] = useState('');

  const loggedInUser = useSelector(selectLoggedInUser);

  const addStatus = useSelector(state => state.polls.addStatus);

  const history = useHistory();

  const canSave = addStatus !== 'loading' && [optionOne, optionTwo].every(Boolean);

  const buttonText = addStatus === 'loading' ? 'Saving...' : 'Save';

  const handlePollSave = async (e) => {
    e.preventDefault();
    if (optionOne && optionTwo) {
      const result = await dispatch(addPoll({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: loggedInUser.id
      }));
      unwrapResult(result);
      history.push('/');
    }
  };

  const handleOption1Change = (e) => setOptionOne(e.target.value);


  const handleOption2Change = (e) => setOptionTwo(e.target.value);

  return (
    <React.Fragment>
      <div className="pb-24">
        <PageTitle title="New Question"/>
      </div>
      <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
        <h3 className="text-4xl text-center mb-2">Would you rather</h3>
        <form className="grid grid-col-1 gap-2 items-center">
          <label>
            <span className="text-gray-700">Option 1: </span>
            <input name="optionOne"
                   value={optionOne}
                   type="text"
                   className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                   onChange={handleOption1Change}
            />
          </label>

          <label>
            <span className="text-gray-700">Option 2: </span>
            <input name="optionTwo"
                   value={optionTwo}
                   type="text"
                   className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                   onChange={handleOption2Change}
            />
          </label>

          <button className="btn btn-action-primary justify-self-center mt-8" onClick={handlePollSave} disabled={!canSave}>
            {buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NewPoll;