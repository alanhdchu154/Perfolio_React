import './App.css';

import Footer from './components/shared/Footer';
import Main from './components/Main';
import Header from './components/shared/Header';
import WalmartDemandSupplyCaseStudy from './components/main/WalmartDemandSupplyCaseStudy';

function App() {
  const isWalmartCaseStudy = window.location.pathname === '/case-studies/walmart-demand-supply';

  if (isWalmartCaseStudy) {
    return (
      <div className="container">
        <WalmartDemandSupplyCaseStudy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>

  );
}

export default App;
