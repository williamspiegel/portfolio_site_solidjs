import { Router, Route } from "@solidjs/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FavoriteGames from "./pages/FavoriteGames";
import Contact from "./pages/Contact";

function Layout(props) {
  return (
    <div class="min-h-screen flex flex-col">
      {/* Background Grid */}
      <div class="grid-background" />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      {props.children}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/favorite-games" component={FavoriteGames} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
