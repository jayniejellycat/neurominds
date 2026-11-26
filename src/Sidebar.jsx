import './Sidebar.css';

const icon = (path) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const items = [
  { page: 'Home', icon: icon(<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />) },
  { page: 'Sound Studio', icon: icon(<path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />) },
  { page: 'Relaxation Library', icon: icon(<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14" />) },
];

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M24 10C30 17 30 29 24 36 18 29 18 17 24 10Z" />
          <path d="M24 36C14 36 7 30 5 20 14 20 21 26 24 36Z" />
          <path d="M24 36C34 36 41 30 43 20 34 20 27 26 24 36Z" />
        </svg>
        <span className="sidebar-name">Neuromind</span>
      </div>

      {items.map((item) => (
        <button
          key={item.page}
          className={`sidebar-btn ${activePage === item.page ? 'active' : ''}`}
          onClick={() => onNavigate(item.page)}
          aria-label={item.page}
          title={item.page}
        >
          {item.icon}
        </button>
      ))}

      <button className="sidebar-btn" aria-label="Settings" title="Settings">
        {icon(<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>)}
      </button>

      <div className="sidebar-spacer" />

      <button className="sidebar-btn" aria-label="Dark mode" title="Dark mode">
        {icon(<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />)}
      </button>
    </aside>
  );
}

export default Sidebar;
