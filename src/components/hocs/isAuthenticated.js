import React from 'react'

import { Redirect } from 'react-router-dom'

export default function isAuthenticated(WrappedComponent){
  return function (props) {
    console.log('auth', props);
      if (!localStorage.getItem('token') && props.current_user.length > 0) {
        return < Redirect to='/farmers' />
      }
      return < WrappedComponent {...props} />
    }
}
