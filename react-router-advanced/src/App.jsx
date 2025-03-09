import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Welcome to React Router Advanced</h1>} />
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
