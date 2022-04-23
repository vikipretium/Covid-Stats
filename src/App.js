import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-400 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/countries/:countryName" element={<CountryPage />} />
        <Route
          path="*"
          element={(
            <main className="p-4 grow">
              <p>Not exist!</p>
            </main>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
