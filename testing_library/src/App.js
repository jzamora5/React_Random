import { SearchBox } from './SearchBox';

const f = (query) => {
  console.log(query);
};

function App() {
  return <SearchBox requestSearch={f} />;
}

export default App;
