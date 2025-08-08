import Header from './components/header/header.jsx';
import HeroSection from './components/hero.jsx';
import Features from './components/features.jsx';
import Extension from './components/download_extension.jsx';
import Faq from './components/faq.jsx';
import Login from './components/login.jsx';
import Footer from './components/footer/footer.jsx';
import './output.css';

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen gap-y-20 md:gap-y-32">
                <HeroSection />
                <Features />
                <Extension />
                <Faq />
                <Login />
            </main>
            <Footer />
        </>
    )
};

export default App;
