import './App.css';

import Footer from './components/shared/Footer';
import Main from './components/Main';
import Header from './components/shared/Header';
import ThreePartyFindingsArticle from './components/main/ThreePartyFindingsArticle';
import ThreePartyCaseStudy from './components/main/ThreePartyCaseStudy';
import UnderworldFindingsArticle from './components/main/UnderworldFindingsArticle';
import UnderworldCaseStudy from './components/main/UnderworldCaseStudy';
import WalmartDemandSupplyCaseStudy from './components/main/WalmartDemandSupplyCaseStudy';

function App() {
  const isWalmartCaseStudy = window.location.pathname === '/case-studies/walmart-demand-supply';
  const isThreePartyCaseStudy = window.location.pathname === '/case-studies/three-party-ai';
  const isUnderworldCaseStudy = window.location.pathname === '/case-studies/giis-underworld';
  const isThreePartyArticle = window.location.pathname === '/articles/three-party-ai-findings';
  const isUnderworldArticle = window.location.pathname === '/articles/underworld-free-souls';

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

  if (isThreePartyArticle) {
    return (
      <div className="container">
        <ThreePartyFindingsArticle />
        <Footer />
      </div>
    );
  }

  if (isUnderworldArticle) {
    return (
      <div className="container">
        <UnderworldFindingsArticle />
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
