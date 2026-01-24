import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Support } from './pages/Support';
import { Stories } from './pages/Stories';
import { Safety } from './pages/Safety';
import { AuthVerify } from './pages/AuthVerify';
import { AuthResetPassword } from './pages/AuthResetPassword';
import { AccountDeletion } from './pages/AccountDeletion';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes - no navbar/footer */}
        <Route path="/auth/verify" element={<AuthVerify />} />
        <Route path="/auth/verify/*" element={<AuthVerify />} />
        <Route path="/auth/reset-password" element={<AuthResetPassword />} />
        <Route path="/auth/reset-password/*" element={<AuthResetPassword />} />

        {/* Main routes with layout */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-cream font-body text-ink overflow-x-hidden selection:bg-highlight selection:text-ink">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/support" element={<Support />} />
                {/* <Route path="/stories" element={<Stories />} /> */}
                <Route path="/safety" element={<Safety />} />
                <Route path="/account-deletion" element={<AccountDeletion />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;