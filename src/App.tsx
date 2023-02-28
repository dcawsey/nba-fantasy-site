import './App.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import Table from './components/Table'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="page-container">
                <Table />
            </div>
        </QueryClientProvider>
    )
}

export default App
