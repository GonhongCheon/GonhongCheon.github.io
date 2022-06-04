import Router from '@/router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .float-right {
    float: right;
  }
`;

function App() {
    return (
        <div className="App">
            <Router />
            <GlobalStyle />
        </div>
    );
}

export default App;
