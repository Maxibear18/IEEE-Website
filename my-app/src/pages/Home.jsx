import React from 'react';
import './Home.css'; // We'll create this next
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
        <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and services</p>
      </section>

      {/* Your other page content */}
      <div className="page-content">
        {/* Add your specific home page content here */}
      </div>
    </Layout>
  );
}

export default Home;