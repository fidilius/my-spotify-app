import { Button, TextField, Stack } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const InputSearch = styled(TextField)`
    background-color: #fff;
    margin-left: 140px;
`;

const ButtonSearch = styled(Button)`
    background-color: rgba(29, 185, 84, 0.8);
    color: white;
    text-transform: none;
    :hover {
        background-color: rgb(29, 185, 84);
    }
`;

const ButtonReset = styled(Button)`
    background-color: rgb(228, 228, 228);
    color: rgb(48, 48, 48);
    text-transform: none;
    :hover {
        background-color: rgb(243, 242, 242);
    }
`;

export default function FormSearch({ onChange, onSearch, onReset}) {
    return(
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" >
            <InputSearch  
                size='small' 
                onChange={onChange} 
                type='search'
                placeholder='Artists, songs or albums'/>
            <ButtonSearch 
                variant="contained" 
                onClick={onSearch} 
                startIcon={<SearchIcon />}
                >Search
            </ButtonSearch>
            <ButtonReset 
                variant="contained" 
                onClick={onReset} 
                >Reset
            </ButtonReset>
        </Stack>
    )
}