import React from 'react';

function NewPoll() {
  return (
    <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
      <h3 className="text-4xl text-center mb-2">Would you rather</h3>
      <form className="grid grid-col-1 gap-2 items-center">
        <label>
          <span className="text-gray-700">Option 1: </span>
          <input type="text"
                 className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"/>
        </label>

        <label>
          <span className="text-gray-700">Option 2: </span>
          <input type="text"
                 className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          />
        </label>

        <button className="btn btn-action-primary justify-self-center mt-8">Submit</button>
      </form>
    </div>
  );
}

export default NewPoll;