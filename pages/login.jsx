// Modules Import
import Head from "next/head";
import styled from "styled-components";
import { Button } from "@material-ui/core";

// File Import
import { auth, provider } from "../Config/FirebaseConfig";

/**
 *
 * @returns This is the login page of the App.
 */
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://logo-logos.com/wp-content/uploads/2016/10/WhatsApp_logo_icon.png" />
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 10);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
