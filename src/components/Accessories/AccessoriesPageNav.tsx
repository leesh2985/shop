import { Route, Routes } from 'react-router-dom';
import AccessoriesList from './AccessoriesList';
import AccessoriesDetail from '../Detail/AccessoriesDetail';

export default function AccessoriesPageNav() {
  return (
    <Routes>
      <Route path="/" element={<AccessoriesList />} />
      <Route path="/accessories/:name" element={<AccessoriesDetail />} />
    </Routes>
  );
}
