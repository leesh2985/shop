import { Route, Routes } from 'react-router-dom';
import FashionList from './FashionList';
import FashionDetail from '../Detail/FashionDetail';

export default function FashionPageNav() {
  return (
    <Routes>
      <Route path="/" element={<FashionList />} />
      <Route path="/fashion/:name" element={<FashionDetail />} />
    </Routes>
  );
}
