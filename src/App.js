import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import Blog from './components/Blog';
const Home = React.lazy(() => import('./components/Home'));





// Instead of importing Switch
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/blog/:article_id" element={<Blog />} />
            </Routes>
        </Router>
    );
}
export default App;
