import { useState } from 'react';
import { HeaderBar } from './components/molecules/HeaderBar.tsx';
import { ResponseBlock } from './components/molecules/ResponseBlock.tsx';
import { SearchBar } from './components/molecules/SearchBar.tsx';

function App() {
  const [response, setResponse] = useState<any>(null);

  return (
    <div className='min-h-screen grid place-items-center bg-[#A2A2A2]'>
      <div className='w-[800px] h-[900px] bg-[#970000] flex flex-col items-center rounded'>
        <HeaderBar/>
        <SearchBar setResponse = { setResponse }/>
        <ResponseBlock response = { response }/>
      </div>
      
    </div>
  )
}

export default App
