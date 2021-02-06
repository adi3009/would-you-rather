import React, {Component} from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div
        className="flex flex-col items-stretch p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-y-2">
        <h6 className="text-3xl">Would You Rather</h6>
        <div className="space-y-4">
          <label>
            <span className="text-gray-700">Username</span>
            <input type="text"
                   className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"/>
          </label>

          <label>
            <span className="text-gray-700">Password</span>
            <input type="password"
                   className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            />
          </label>

          <button className="btn btn-action-primary" type="submit">
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default LoginForm;