import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';

const globalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}
const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: gold;
  }
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

export default App;
