import React, { useState, ChangeEvent } from 'react';
import '../css/searchBar.css';
import { TextField, Button, Typography } from '@mui/material';

interface SearchBarProps {
  onSearch: (title: string, year: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleSearch = () => {
    onSearch(title, year);
  };

  return (
    <div className='container'>
      <Typography variant="h5" gutterBottom className="search-title">
        Buscador
      </Typography>

      <TextField
        id="outlined-basic"
        label="Titulo"
        variant="outlined"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        id="outlined-basic"
        label="Año"
        variant="outlined"
        multiline
        rows={1}
        maxRows={5}
        InputProps={{ style: { fontSize: 16 } }}
        value={year}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <Button variant="contained" color="success" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;
