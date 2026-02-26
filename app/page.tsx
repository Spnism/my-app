'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    // Header styles
    header: {
      background: 'linear-gradient(135deg,#B22222 20%, #000000 100%)',
      borderBottom: '3px solid #333',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      cursor: 'pointer',
    },
    logoIcon: {
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #87C540 0%, #A4D65E 100%)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    logoText: {
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#fff',
      letterSpacing: '7px',
    },
    nav: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: '#333',
    },
    navLink: {
      background: '#B22222',
      color: 'white',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '10px',
      fontSize: '25px',
      fontWeight: '400',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      boxShadow: '0 3px 8px rgba(91, 159, 214, 0.3)',
    },

    // Hero Section
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 40px',
      background: 'linear-gradient(135deg, #000000 10%, #B22222 100%)',
        color: 'white',
    },
    heroContent: {
      flex: 1,
      paddingRight: '60px',
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '20px',
      lineHeight: '1.3',
    },
    heroSubtitle: {
      fontSize: '24px',
      color: '#ffffff',
      marginBottom: '30px',
      lineHeight: '1.5',
    },
    heroCTA: {
      background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
      color: 'white',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '4px',
      fontSize: '30px',
      fontWeight: '1000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(231, 76, 60, 0.3)',
    },
    heroImage: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    carImage: {
      width: '100%',
      maxWidth: '1000px',
      height: 'auto',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    },

    // Features
    features: {
      padding: '80px 40px',
     background: 'linear-gradient(135deg, #000000 0%, #B22222 65%)',
    },
    featuresTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      textAlign: 'center' as const,
      color: '#ffffff',
      marginBottom: '60px',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '12px',
      textAlign: 'center' as const,
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      border: '3px solid transparent',
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
    featureCardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '15px',
    },
    featureCardText: {
      color: '#666',
      fontSize: '14px',
      lineHeight: '1.6',
    },

    // Stats section
    stats: {
      padding: '60px 40px',
      background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
      color: 'white',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center' as const,
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#E74C3C',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '18px',
      color: '#ddd',
    },

    // CTA Section
    ctaSection: {
      padding: '80px 40px',
      background: 'linear-gradient(135deg, #000000 10%, #B22222 100%)',
      textAlign: 'center' as const,
    },
    ctaTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '20px',
    },
    ctaSubtitle: {
      fontSize: '18px',
      color: '#ffffff',
      marginBottom: '40px',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
      color: 'white',
      border: 'none',
      padding: '18px 50px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(231, 76, 60, 0.4)',
      marginRight: '20px',
      display: 'inline-block',
    },
    ctaButtonSecondary: {
      background: 'white',
      color: '#E74C3C',
      border: '3px solid #E74C3C',
      padding: '15px 45px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginRight: '20px',
      display: 'inline-block',
    },

    // Footer
    footer: {
      background: '#000',
      color: 'white',
      padding: '40px',
      textAlign: 'center' as const,
      borderTop: '3px solid #E74C3C',
    },
  };

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
        }

        button:active {
          transform: translateY(0);
        }

        .feature-card:hover {
          border-color: #E74C3C;
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(231, 76, 60, 0.2);
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            gap: 20px;
          }

          .hero {
            flex-direction: column;
            padding: 40px 20px;
          }

          .hero-content {
            padding-right: 0;
            margin-bottom: 40px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .features-title {
            font-size: 28px;
          }

          .cta-title {
            font-size: 28px;
          }
        }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoText}>CAR WASH</div>
        </div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(91, 159, 214, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 3px 8px rgba(91, 159, 214, 0.3)'}>
            หน้าแรก
          </Link>
          <Link href="/login" style={styles.navLink} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(91, 159, 214, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 3px 8px rgba(91, 159, 214, 0.3)'}>
            เข้าสู่ระบบ
          </Link>
          <Link href="/register" style={styles.navLink} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(91, 159, 214, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 3px 8px rgba(91, 159, 214, 0.3)'}>
            สมัครสมาชิก
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>สนใจบริการล้างรถ?</h1>
          <p style={styles.heroSubtitle}>ล้างรถอย่างมืออาชีพด้วยเทคโนโลยีล้ำสมัยของเรา</p>
          <button style={styles.heroCTA} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            จองเลย อย่ารอช้า!!
          </button>
        </div>
        <div style={styles.heroImage}>
          <svg style={styles.carImage} viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1000" height="auto" fill="#F5F5F5" />
            <image href="https://images.pexels.com/photos/6894434/pexels-photo-6894434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" x="0" y="0" width="800" height="400" preserveAspectRatio="xMidYMid slice" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>เหตุใดจึงเลือกเรา?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureCardTitle}>รวดเร็ว & มีประสิทธิภาพ</h3>
            <p style={styles.featureCardText}>ล้างรถให้สะอาดในเวลาเพียง 15 นาที</p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>💰</div>
            <h3 style={styles.featureCardTitle}>ราคาถูกยุติธรรม</h3>
            <p style={styles.featureCardText}>ราคาเพียง 199 บาท สำหรับการล้างรถทั่วไป</p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>🌟</div>
            <h3 style={styles.featureCardTitle}>คุณภาพสูง</h3>
            <p style={styles.featureCardText}>ใช้สารเคมีปลอดภัยและสิ่งแวดล้อม</p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>📍</div>
            <h3 style={styles.featureCardTitle}>สาขาหลายแห่ง</h3>
            <p style={styles.featureCardText}>พบเรา ณ 25 สาขาทั่วประเทศ</p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>👥</div>
            <h3 style={styles.featureCardTitle}>ทีมมืออาชีพ</h3>
            <p style={styles.featureCardText}>พนักงานที่ผ่านการฝึกอบรมมาแล้ว</p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <div style={styles.featureIcon}>📱</div>
            <h3 style={styles.featureCardTitle}>ติดต่อง่าย</h3>
            <p style={styles.featureCardText}>จองผ่าน App หรือเข้ามาโดยตรง</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.stats}>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statNumber}>10K+</div>
            <div style={styles.statLabel}>ลูกค้าที่ประทับใจ</div>
          </div>
          <div>
            <div style={styles.statNumber}>25</div>
            <div style={styles.statLabel}>สาขาทั่วประเทศ</div>
          </div>
          <div>
            <div style={styles.statNumber}>15 Min</div>
            <div style={styles.statLabel}>เวลาบริการ</div>
          </div>
          <div>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>ความพึงพอใจ</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>เข้าร่วมล้างรถสะอาด วันนี้</h2>
        <p style={styles.ctaSubtitle}>ลงทะเบียนฟรีและรับส่วนลด 20% สำหรับการบริการครั้งแรก</p>
        <Link href="/register">
          <button style={styles.ctaButton}>
            สมัครสมาชิกตอนนี้
          </button>
        </Link>
        <Link href="/login">
          <button style={styles.ctaButtonSecondary}>
            เข้าสู่ระบบ
          </button>
        </Link>
      </section>

      {/* Next button */}
      <div style={{ textAlign: 'right', padding: '20px 50px' }}>
        <Link href="/login">
          <button style={{
            background: '#CC0000',
            color: '#fff',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
          }}>
            Next &gt;
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2026 CarWash Pro. สงวนลิขสิทธิ์. ล้างรถให้สะอาดทั่วประเทศไทย</p>
      </footer>
    </div>
  );
}