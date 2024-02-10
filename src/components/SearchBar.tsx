// components/SearchBar.tsx
import React, { useState, ChangeEvent } from 'react';

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
    <div>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Año"
        value={year}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
    
  );
};

export default SearchBar;
