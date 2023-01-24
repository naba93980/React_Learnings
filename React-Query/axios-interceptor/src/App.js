import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';
import { RQSuperHero } from './components/RQSuperHero';
import { ParallelQueries } from './components/ParallelQueries';
import { DynamicParallelQueries } from './components/DynamicParallelQueries';
import { DependentQueries } from './components/DependentQueries'
import { PaginatedQueries } from './components/PaginatedQueries';
import { InfiniteQueries } from './components/InfiniteQueries';
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
              <li>
                <Link to='/rq-parallel'>Parallel Queries</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>Dynamic Parallel Queries</Link>
              </li>
              <li>
                <Link to='/rq-dependent'>Dependent Queries</Link>
              </li>
              <li>
                <Link to='/rq-paginated'>Paginated Queries</Link>
              </li>
              <li>
                <Link to='/rq-infinite'>Infinite Queries</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/rq-parallel' exact element={<ParallelQueries />} />
          <Route path='/rq-dynamic-parallel' exact element={<DynamicParallelQueries heroIds={[1, 3]} />} />
          <Route path='/rq-dependent' exact element={<DependentQueries email={'naba93980@gmail.com'} />} />
          <Route path='/rq-paginated' exact element={<PaginatedQueries/>} />
          <Route path='/rq-infinite' exact element={<InfiniteQueries/>} />
          <Route path='/rq-super-heroes/:heroId' exact element={<RQSuperHero />} />
          <Route path='/' element={<Home />} />
          <Route path='/super-heroes' exact element={<SuperHeroes />} />
          <Route path='/rq-super-heroes' exact element={<RQSuperHeroes />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default App;
