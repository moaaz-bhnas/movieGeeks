import React, { memo, useEffect, useContext } from 'react';
import {
  AuthPage,
  LogoContainer
} from './style';
import AuthForm from '../../components/authForm';
import Logo from '../../components/logo';
import { connect } from 'react-redux';
import { resetError } from '../../store/actions/authActions';
import { AuthContext } from '../../contexts/auth';
import { Redirect } from 'react-router-dom';

const Auth = (props) => {
  const { action, resetAuthError } = props;

  // user state
  const { user } = useContext(AuthContext);

  useEffect(resetAuthError, [ action ]);

  return (
    <>
      {
        user ?
        <Redirect to="/" /> :
        <AuthPage>
          <LogoContainer>
            <Logo width="4rem" />
          </LogoContainer>
          <AuthForm action={action} />
        </AuthPage>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetAuthError: () => {
      dispatch(resetError())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Auth));