import { Route, Routes } from 'react-router-dom';
import DigitalList from './DigitalList';
import DigitalDetail from '../Detail/DigitalDetail';

export default function DigitalsPageNav() {
  return (
    <Routes>
      <Route path="/" element={<DigitalList />} />
      <Route path="/digital/:name" element={<DigitalDetail />} />
    </Routes>
  );
}
