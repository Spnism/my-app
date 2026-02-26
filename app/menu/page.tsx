'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MenuPage() {
    const router = useRouter();
    const [userName] = useState('ผู้ใช้งาน'); // ตัวอย่าง: ชื่อจาก database
    const [usedCount] = useState(8); // ตัวอย่าง: ใช้งานแล้ว 8 ครั้ง
    const [target] = useState(10);

    const styles: Record<string, any> = {
        page: {},
        container: {
            background: 'linear-gradient(135deg, #000000 10%, #B22222 100%)',
        },
        logoRow: {
            display: 'flex',
            alignItems: 'center',
        },
        header: {
            background: 'linear-gradient(135deg,#B22222 20%, #000000 100%)',
            borderBottom: '3px solid #333',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
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

        main: { padding: '40px 0' },
        greetingRow: { display: 'flex', alignItems: 'flex-start', gap: 18, justifyContent: 'space-between' },
        greeting: { fontSize: 40, fontWeight: 900, color: '#fff', marginLeft: 40 },

        actionsRow: { marginTop: 10, display: 'flex', gap: 12, alignItems: 'center' },
        actionPrimary: {
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
            marginLeft: 40,
        },
        actionSecondary: {
            background: '#ffffff',
            color: '#b22222',
            border: 'none',
            textDecoration: 'none',
            padding: '14px 30px',
            borderRadius: '10px',
            fontSize: '25px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            boxShadow: '0 3px 8px rgba(91, 159, 214, 0.3)',
            marginLeft: 40,
        },

        progressWrap: { marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 },
        progressBarOuter: {
            flex: 1,
            height: 44,
            background: '#fff',
            border: '3px solid #000',
            borderRadius: 44,
            padding: 4,
            boxSizing: 'border-box',
            marginLeft: 40,
        },
        progressBarInner: (pct: number) => ({
            height: '100%',
            width: `${pct}%`,
            background: '#FFD54F',
            borderRadius: 15,
            transition: 'width 200ms ease',
        }),
        progressText: { marginLeft: 40, fontWeight: 700, color: '#fff' },

        starRow: { marginLeft: 60, marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, color: '#fff' },

        iconsRow: { display: 'flex', gap: 18, marginTop: 18, justifyContent: 'flex-end' },
        iconBox: { width: 110, height: 110, border: '3px solid #000', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' },

        table: { width: '80%', borderCollapse: 'collapse' as const, marginLeft: 30, marginTop: 22, background: '#fff', borderRadius: 6, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
        th: { border: '2px solid #000', padding: 12, textAlign: 'left' as const, background: '#A52A2A', color: '#fff', fontWeight: 900 },
        td: { border: '1px solid #000', padding: 12, height: 56 },

        footerRow: { display: 'flex', justifyContent: 'flex-end', marginTop: 18, },
        nextBtn: {
            background: '#CC0000',
            color: 'white',
            border: 'none',
            padding: '14px 30px',
            borderRadius: '10px',
            fontSize: '30px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 3px 8px rgba(91, 159, 214, 0.3)',
            marginRight: 60,
        }
    };

    const pct = Math.min(100, Math.round((usedCount / target) * 100));

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                {/* Header */}
                <header style={styles.header}>
                    <div style={styles.logoRow}>
                        <div style={styles.logoText}>CAR WASH</div>
                    </div>

                    <nav style={styles.nav}>
                        <Link href="/" style={styles.navBtn}>หน้าแรก</Link>
                        <Link href="/cars" style={styles.navBtn}>บัญชี</Link>
                        <button style={styles.navBtnGhost} onClick={() => router.push('/login')}>ออกจากระบบ</button>
                    </nav>
                </header>
                <br />
                <main style={styles.main}>
                    <div style={styles.greetingRow}>
                        <div style={{ flex: 1 }}>
                            <div style={styles.greeting}>สวัสดี, {userName}</div>
                            <br />
                            <div style={styles.actionsRow}>
                                <button style={styles.actionPrimary} onClick={() => router.push('/cars')}>จองเลย</button>
                                <button style={styles.actionSecondary} onClick={() => router.push('/history')}>ประวัติการล้าง</button>
                            </div>
                            <br />
                            <div style={styles.progressWrap}>
                                <div style={styles.progressBarOuter}>
                                    <div style={styles.progressBarInner(pct)} />
                                </div>
                                <div style={styles.progressText}>{usedCount % target === 0 ? target : usedCount % target} / {target}</div>
                            </div>
                            <div style={styles.starRow}>
                                <div style={{ fontSize: 35, color: '#FFD54F' }}>★</div>
                                <div> {usedCount} ครั้ง / ครบ {target} ครั้ง ล้างรถฟรี 1 ครั้ง</div>
                            </div>
                        </div>
                        <br />
                        <div style={{ width: 260, textAlign: 'center' }}>
                            <div style={{ fontSize: 25, color: '#fff', marginBottom: 8 }}>รถของคุณ</div>
                            <div style={{ scale: 1, borderRadius: 12, overflow: 'hidden', border: '3px solid #000' }}>
                                <img src="https://images.pexels.com/photos/28200243/pexels-photo-28200243.jpeg" alt="car" style={{ marginRight: 80, width: '100%', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />

                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>วันที่</th>
                                <th style={styles.th}>เวลา</th>
                                <th style={styles.th}>รุ่นรถยนต์ / เลขทะเบียน</th>
                                <th style={styles.th}>หมายเหตุ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 4 empty rows as template */}
                            {[0, 1, 2, 3].map(i => (
                                <tr key={i}>
                                    <td style={styles.td}></td>
                                    <td style={styles.td}></td>
                                    <td style={styles.td}></td>
                                    <td style={styles.td}></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <div style={styles.footerRow}>
                        <Link href="/cars">
                            <button style={styles.nextBtn}>Next &gt;</button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
