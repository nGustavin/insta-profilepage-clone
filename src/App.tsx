import GlobalStyle from './styles/GlobalStyles'
import Header from './components/Header/index'
import Profile from './components/ProfileInfo/index'
import {Landing, Wrapper} from './styles/landing'
import SavedPins from './components/SavedPins'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Landing>
        <Header/>
        <Wrapper>
          <Profile />
          <SavedPins />
        </Wrapper>
      </Landing>
    </div>
  );
}

export default App;

//935 130

//115 130

