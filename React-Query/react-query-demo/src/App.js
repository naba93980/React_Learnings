import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/super-heroes' element={<SuperHeroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    
  );
}

export default App;
