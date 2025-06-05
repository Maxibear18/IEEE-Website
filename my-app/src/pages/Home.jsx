import React from 'react';
import './Home.css'; // We'll create this next
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
         <div className="ieee-container">
      <header className="ieee-header">
        <h1>IEEE-NSM</h1>
        <h2>Institute of Electrical and Electronics Engineers</h2>
      </header>

      <section className="mission-section">
        <h3>Our Mission</h3>
        <p>
          IEEE's core purpose is to foster technological innovation and excellence. 
          We strive to create a space where students can find community and more 
          accessible opportunities for research and competitions.
        </p>
      </section>

      <div className="divider"></div>

      <section className="membership-form">
        <h3>Become a Member</h3>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="courses">Courses</label>
              <input type="text" id="courses" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">I am...</label>
              <select id="role">
                <option value="">Select...</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </section>

      <footer className="ieee-footer">
        <p>IEEE-NSM</p>
      </footer>
    </div>
    </Layout>
  );
}

export default Home;