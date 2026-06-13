import './App.css';

import Footer from './components/shared/Footer';
import Main from './components/Main';
import Header from './components/shared/Header';
import ThreePartyCaseStudy from './components/main/ThreePartyCaseStudy';
import UnderworldCaseStudy from './components/main/UnderworldCaseStudy';
import WalmartDemandSupplyCaseStudy from './components/main/WalmartDemandSupplyCaseStudy';

function App() {
  const isWalmartCaseStudy = window.location.pathname === '/case-studies/walmart-demand-supply';
  const isThreePartyCaseStudy = window.location.pathname === '/case-studies/three-party-ai';
  const isUnderworldCaseStudy = window.location.pathname === '/case-studies/giis-underworld';

  if (isWalmartCaseStudy) {
    return (
      <div className="container">
        <WalmartDemandSupplyCaseStudy />
        <Footer />
      </div>
    );
  }

  if (isThreePartyCaseStudy) {
    return (
      <div className="container">
        <ThreePartyCaseStudy />
        <Footer />
      </div>
    );
  }

  if (isUnderworldCaseStudy) {
    return (
      <div className="container">
        <UnderworldCaseStudy />
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
