import React from 'react';


  function Nav({ currentPage, handlePageChange }) {

    return (
      <nav className="main-header">
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    );
  }

  export default Nav