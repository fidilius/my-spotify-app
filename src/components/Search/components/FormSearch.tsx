import * as React from 'react';
import { Button, TextField, Stack } from '@mui/material';
import { Search as SearchIcon, RestartAlt as ResetIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const InputSearch = styled(TextField)({
    backgroundColor: "#fff",
    marginLeft: "200px"
})

const ButtonSearch = styled(Button)({
    borderRadius: '40px',
    textTransform: "none",
    color: "white",
    backgroundColor: "rgba(29, 185, 84, 0.8)",
    "&:hover": {
        backgroundColor: "rgb(29, 185, 84)",
    }
});

const ButtonReset = styled(Button)({
    borderRadius: '40px',
    textTransform: "none",
    color: "rgb(48, 48, 48)",
    backgroundColor: "rgb(228, 228, 228)",
    "&:hover": {
        backgroundColor: "rgb(243, 242, 242)"
    }
});

interface IFSProps {
    onSearch: () => void;
    onReset: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSearch:React.FC<IFSProps> = ({ onChange, onSearch, onReset}) => {
    return(
        <Stack data-testid="formSearch" direction="row" spacing={1} justifyContent="center" alignItems="center" >
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
                startIcon={<ResetIcon />} 
                >Reset
            </ButtonReset>
        </Stack>
    )
}

export default FormSearch;