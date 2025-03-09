import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Login from "./components/Login";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
            <Link to="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Welcome to React Router Advanced</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
