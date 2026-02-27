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

        serviceMenu: { marginTop: 40, marginLeft: 40, marginRight: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 },
        serviceCard: {
            background: '#ffffff',
            border: '4px solid #B22222',
            borderRadius: 15,
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column' as const,
        },
        serviceCardImage: {
            width: '100%',
            height: 220,
            objectFit: 'cover' as const,
            borderBottom: '4px solid #000',
        },
        serviceCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(178, 34, 34, 0.4)',
        },
        serviceCardContent: { padding: 20, flex: 1, display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between' },
        serviceCardTitle: { fontSize: 24, fontWeight: 900, color: '#B22222', marginBottom: 8 },
        serviceCardDesc: { fontSize: 14, fontWeight: 600, color: '#333', marginBottom: 15, lineHeight: '1.5' },
        serviceCardButton: {
            background: '#B22222',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: 'auto',
        },
        serviceCardButtonHover: {
            background: '#000000',
            transform: 'scale(1.02)',
        },

        iconsRow: { display: 'flex', gap: 18, marginTop: 18, justifyContent: 'flex-end' },
        iconBox: { width: 110, height: 110, border: '3px solid #000', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' },

        table: { width: '80%', borderCollapse: 'collapse' as const, marginLeft: 30, marginTop: 22, background: '#fff', borderRadius: 6, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
        th: { border: '2px solid #000', padding: 12, textAlign: 'left' as const, background: '#A52A2A', color: '#fff', fontWeight: 900 },
        td: { border: '1px solid #000', padding: 12, height: 56 },

        footerRow: { display: 'flex', justifyContent: 'flex-end', marginTop: 18, },
        nextBtn: {
      background: '#cc0000',
            color: 'white',
            border: 'none',
            padding: '16px 50px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.5s ease',
            boxShadow: '0 4px 12px rgba(178, 34, 34, 0.3)',
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
                        <Link href="/menu" style={styles.navBtn}>account</Link>
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

                    {/* Service Menu */}
                    <div style={{ marginTop: 30, marginLeft: 40, marginBottom: 15 }}>
                        <div style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 5 }}>บริการของเรา</div>
                        <div style={{ height: 4, width: 150, background: '#FFD54F', borderRadius: 2 }}></div>
                    </div>
                    <div style={styles.serviceMenu}>
                        {/* ล้างรถ */}
                        <div 
                            style={styles.serviceCard}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCardHover)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: styles.serviceCard.boxShadow })}
                        >
                            <img 
                                src="https://autolifethailand.tv/wp-content/uploads/2022/03/shutterstock_1859193349s.jpg" 
                                alt="ล้างรถ" 
                                style={styles.serviceCardImage}
                                onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22220%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E🚗%3C/text%3E%3C/svg%3E' }}
                            />
                            <div style={styles.serviceCardContent}>
                                <div>
                                    <div style={styles.serviceCardTitle}>ล้างรถ</div>
                                    <div style={styles.serviceCardDesc}>ล้างรถแบบมืออาชีพด้วยสารเคมีที่ปลอดภัย ทำให้รถสะอาดเหมือนใหม่</div>
                                </div>
                               
                            </div>
                        </div>

                        {/* ล้างภายใน */}
                        <div 
                            style={styles.serviceCard}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCardHover)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: styles.serviceCard.boxShadow })}
                        >
                            <img 
                                src="https://kleansquare.com/wp-content/uploads/2023/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%86-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%94%E0%B9%89.png" 
                                alt="ล้างภายใน" 
                                style={styles.serviceCardImage}
                                onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22220%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E🧹%3C/text%3E%3C/svg%3E' }}
                            />
                            <div style={styles.serviceCardContent}>
                                <div>
                                    <div style={styles.serviceCardTitle}>ล้างภายใน</div>
                                    <div style={styles.serviceCardDesc}>ทำความสะอาดภายในรถ ดูดฝุ่น ล้างเบาะที่นั่ง และประตูรถ</div>
                                </div>
                               
                            </div>
                        </div>

                        {/* ขัดสี */}
                        <div 
                            style={styles.serviceCard}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCardHover)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: styles.serviceCard.boxShadow })}
                        >
                            <img 
                                src="https://kleansquare.com/wp-content/uploads/2022/12/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5.png" 
                                alt="ขัดสี" 
                                style={styles.serviceCardImage}
                                onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22220%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E✨%3C/text%3E%3C/svg%3E' }}
                            />
                            <div style={styles.serviceCardContent}>
                                <div>
                                    <div style={styles.serviceCardTitle}>ขัดสี</div>
                                    <div style={styles.serviceCardDesc}>ขัดสีรถเพื่อลบรอยขีดข่วน และให้สีรถเงางามเหมือนใหม่</div>
                                </div>
                               
                            </div>
                        </div>

                        {/* เคลือบเงา */}
                        <div 
                            style={styles.serviceCard}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCardHover)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: styles.serviceCard.boxShadow })}
                        >
                            <img 
                                src="https://87-garage.com/wp-content/uploads/2023/03/87Garage-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B2%E0%B8%A3%E0%B8%96-%E0%B8%97%E0%B8%B3%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%94%E0%B8%B9%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1-001.webp" 
                                alt="เคลือบเงา" 
                                style={styles.serviceCardImage}
                                onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22220%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E💎%3C/text%3E%3C/svg%3E' }}
                            />
                            <div style={styles.serviceCardContent}>
                                <div>
                                    <div style={styles.serviceCardTitle}>เคลือบเงา</div>
                                    <div style={styles.serviceCardDesc}>เคลือบสีรถด้วยเซรามิก ป้องกันแสงแดด และให้สีเงาวับ</div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

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
