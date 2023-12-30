import { PropsWithChildren } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./Styles.css";




const Home = () => <Nav title="Home" />;

const About = () => <Nav title="About" />;

const Work = () => <Nav title="Work" />;




const Link = ({ to, children }: { to: string } & PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bubbles = document.getElementById("bubbles");
    bubbles?.classList.add("show");
    
    setTimeout(() => navigate(to), 1000);

    setTimeout(() => {
      bubbles?.classList.remove("show");
      bubbles?.classList.add("hide");
      navigate(to);
    }, 1200);
    setTimeout(() => bubbles?.classList.remove("hide"), 2400);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={ 
        location.pathname.includes(children?.toString().toLowerCase())
          ? "active"
          : ""
      }
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

const Nav = ({ title }: { title: string }) => (
  <nav>
    <h1 style={{ animation: "appear 0.25s 0.2s both" }}>{title}</h1>
    <ul style={{ animation: "appear 0.25s 0.4s both" }}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  </nav>
)

const Layout = () => (
  <>
    <nav>
      <h1>FaisalMS</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export const Example = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
