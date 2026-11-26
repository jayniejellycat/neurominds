import './header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-search">
        <input type="search" placeholder="Search..." aria-label="Search" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
      </div>

      <div className="header-right">
        <button className="header-bell" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8zM10 20a2 2 0 0 0 4 0" />
          </svg>
        </button>
        <button className="header-signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
