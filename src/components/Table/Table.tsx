import './Table.css'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useQuery } from 'react-query'

const columns: GridColDef[] = [
    { field: 'Player', headerName: 'Player', width: 200 },
    { field: 'Pos', headerName: 'Pos', description: 'Player position' },
    { field: 'Age', headerName: 'Age', type: 'number', hide: true },
    { field: 'Tm', headerName: 'Team' },
    {
        field: 'G',
        headerName: 'G',
        type: 'number',
        description: 'Games played',
    },
    {
        field: 'GS',
        headerName: 'GS',
        type: 'number',
        description: 'Number of games in the starting lineup',
        hide: true,
    },
    {
        field: 'MP',
        headerName: 'MP',
        type: 'number',
        description: 'Minutes played',
    },
    {
        field: 'FG',
        headerName: 'FG',
        type: 'number',
        description: 'Number of made field goals',
        hide: true,
    },
    {
        field: 'FGA',
        headerName: 'FGA',
        type: 'number',
        description: 'Number of field goal attempts',
    },
    {
        field: 'FG%',
        headerName: 'FG%',
        type: 'number',
        description: 'Percentage of made field goals',
    },
    {
        field: '3P',
        headerName: '3P',
        type: 'number',
        description: 'Number of made 3-pointers',
    },
    {
        field: '3PA',
        headerName: '3PA',
        type: 'number',
        description: 'Number of 3-pointer attempts',
    },
    {
        field: '3P%',
        headerName: '3P%',
        type: 'number',
        description: 'Percentage of made 3-pointers',
    },
    {
        field: '2P',
        headerName: '2P',
        type: 'number',
        description: 'Number of made 2-pointers',
        hide: true,
    },
    {
        field: '2PA',
        headerName: '2PA',
        type: 'number',
        description: 'Number of 2-pointer attempts',
        hide: true,
    },
    {
        field: '2P%',
        headerName: '2P%',
        type: 'number',
        description: 'Percentage of made 2-pointers',
        hide: true,
    },
    {
        field: 'eFG%',
        headerName: 'eFGP%',
        type: 'number',
        description:
            'Effective Field Goal Percentage; the formula is (FG + 0.5 * 3P) / FGA. This statistic adjusts for the fact that a 3-point field goal is worth one more point than a 2-point field goal.',
        hide: true,
    },
    {
        field: 'FT',
        headerName: 'FT',
        type: 'number',
        description: 'Number of made free throws',
        hide: true,
    },
    {
        field: 'FTA',
        headerName: 'FTA',
        type: 'number',
        description: 'Number of free throw attempts',
    },
    {
        field: 'FT%',
        headerName: 'FT%',
        type: 'number',
        description: 'Percentage of made free throws',
    },
    {
        field: 'ORB',
        headerName: 'ORB',
        type: 'number',
        description: 'Offensive rebounds',
        hide: true,
    },
    {
        field: 'DRB',
        headerName: 'DRB',
        type: 'number',
        description: 'Defensive rebounds',
        hide: true,
    },
    {
        field: 'TRB',
        headerName: 'TRB',
        type: 'number',
        description: 'Total rebounds',
    },
    {
        field: 'AST',
        headerName: 'AST',
        type: 'number',
        description: 'Assists',
    },
    {
        field: 'STL',
        headerName: 'STL',
        type: 'number',
        description: 'Steals',
    },
    {
        field: 'BLK',
        headerName: 'BLK',
        type: 'number',
        description: 'Blocks',
    },
    {
        field: 'TOV',
        headerName: 'TOV',
        type: 'number',
        description: 'Turnovers',
    },
    {
        field: 'PF',
        headerName: 'PF',
        type: 'number',
        description: 'Personal fouls',
        hide: true,
    },
    {
        field: 'PTS',
        headerName: 'PTS',
        type: 'number',
        description: 'Points',
    },
]

function Table() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:3000/get-data').then((res) => res.json())
    )

    if (isLoading) return <div>Loading...</div>

    if (error) {
        console.log('Unable to get player statistics', (error as Error).message)
        return <div>Error fetching data...</div>
    }

    return (
        <div className="table-container">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
                checkboxSelection
            />
        </div>
    )
}

export default Table
