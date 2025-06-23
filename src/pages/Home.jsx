import React from 'react';
import CostCalculator from '../components/CostCalculator.jsx';
import PDFExporter from '../components/PDFExporter.jsx';
import ComparisonChart from '../components/ComparisonChart.jsx';

const Home = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>KostoPro - Ολοκληρωμένη Κοστολόγηση</h1>
      <CostCalculator />
      <PDFExporter />
      <ComparisonChart />
    </div>
  );
};

export default Home;
