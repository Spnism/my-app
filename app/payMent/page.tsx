'use client';

import router from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PaymentPage() {
  const [booking, setBooking] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const b = localStorage.getItem('booking');
    if (b) setBooking(JSON.parse(b));
  }, []);

  const styles: Record<string, any> = {
    page: { minHeight: '100vh', background: '#fff' },
    header: {
      background: 'linear-gradient(135deg, #B22222 20%, #000000 100%)',
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    logoText: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
    nav: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: '#333',
    },
    navBtn: {
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
    navBtnGhost: {
      background: '#ffffff',
      color: '#b22222',
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

    content: {
      maxWidth: 900,
      margin: '40px auto',
      display: 'flex',
      gap: 40,
      color: '#333',
    },
    summary: {
      flex: 1,
      border: '1px solid #ddd',
      padding: 20,
      borderRadius: 8,
      color: '#333',
    },
    payment: {
      flex: 1,
      border: '1px solid #ddd',
      padding: 20,
      borderRadius: 8,
      color: '#333',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 15
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10,
      color: '#333',
    },

    total: {
      fontSize: 28,
      fontWeight: 900,
      color: '#B22222'
    },

    payBtn: {
      marginTop: 30,
      background: '#B22222',
      color: '#fff',
      padding: '16px 40px',
      border: 'none',
      borderRadius: 25,
      fontSize: 18,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    qr: {
      width: 120,
      height: 120,
      background: '#000',
      borderRadius: 12
    },
    bankIcon: {
      width: 120,
      height: 80,
      background: '#000',
      borderRadius: 8
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoText}>CAR WASH</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navBtn}>หน้าแรก</Link>
          <Link href="/menu" style={styles.navBtn}>Account</Link>
          <button style={styles.navBtnGhost} onClick={() => router.push('/login')}>ออกจากระบบ</button>
        </nav>
      </header>

      <div style={styles.content}>
        <div style={styles.summary}>
          <div style={styles.sectionTitle}>สรุปผลการจอง</div>
          {booking ? (
            <>
              {booking.date && (
                <div style={styles.row}>
                  <div>วันที่จอง</div>
                  <div>{booking.date}</div>
                </div>
              )}
              {booking.time && (
                <div style={styles.row}>
                  <div>เวลาจอง</div>
                  <div>{booking.time}</div>
                </div>
              )}
              <div style={styles.row}>
                <div>บริการ</div>
                <div>{booking.service}</div>
              </div>
              <hr />
              <div style={styles.row}>
                <div>ราคา</div>
                <div>{booking.price.toFixed(2)}</div>
              </div>
              <div style={styles.row}>
                <div>VAT 7%</div>
                <div>{(booking.price * 0.07).toFixed(2)}</div>
              </div>
              <div style={styles.row}>
                <div style={styles.total}>ยอดรวมสุทธิ</div>
                <div style={styles.total}>
                  THB {(booking.price * 1.07).toFixed(2)}
                </div>
              </div>
            </>
          ) : (
            <div>ไม่พบข้อมูลการจอง</div>
          )}
        </div>

        <div style={styles.payment}>
          <div style={styles.sectionTitle}>ช่องทางการชำระเงิน</div>
          <div style={styles.row}>
            <div>QR Code</div>
            <div style={styles.qr} />
          </div>
          <div style={styles.row}>
            <div>เลขบัญชีธนาคาร</div>
            <div style={styles.bankIcon} />
          </div>
          <Link href="/thank-u">
            <button style={styles.payBtn}>กดยืนยันการชำระเงิน</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
