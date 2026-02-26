'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ThankYouPage() {
    const [booking, setBooking] = useState<any | null>(null);
    const [status, setStatus] = useState<string>('ยังไม่มีการจอง');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const b = localStorage.getItem('booking');
        if (b) setBooking(JSON.parse(b));
        const s = localStorage.getItem('bookingStatus');
        if (s) setStatus(s === 'sending' ? 'กำลังส่งข้อมูล' : s === 'success' ? 'ส่งข้อมูลสำเร็จ' : s);

        const timer = setInterval(() => {
            const s2 = localStorage.getItem('bookingStatus');
            if (s2) setStatus(s2 === 'sending' ? 'กำลังส่งข้อมูล' : s2 === 'success' ? 'ส่งข้อมูลสำเร็จ' : s2);
            const b2 = localStorage.getItem('booking');
            if (b2) setBooking(JSON.parse(b2));
        }, 500);

        return () => clearInterval(timer);
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
        logo: { fontSize: 40, fontWeight: '700', color: '#fff' },
        nav: { display: 'flex', gap: 16 },
        navBtn: {
            background: '#B22222',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 25,
            textDecoration: 'none',
            fontWeight: 700,
        },
        container: {
            maxWidth: 1100,
            margin: '40px auto',
            padding: '40px',
            border: '1px solid #ddd',
            borderRadius: 6,
            textAlign: 'center' as const,
        },
        title: { fontSize: 40, fontWeight: 800, marginBottom: 20 },
        receiptBox: {
            margin: '20px auto',
            width: 720,
            borderRadius: 12,
            border: '1px solid #e6e6e6',
            padding: 20,
            textAlign: 'left' as const,
            background: '#fff',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
        },
        badge: (bg: string) => ({ display: 'inline-block', padding: '8px 12px', borderRadius: 20, background: bg, color: '#fff', fontWeight: 700 }),
        right: { textAlign: 'right' as const },
    };

    const price = booking?.price ?? 0;
    const vat = +(price * 0.07).toFixed(2);
    const total = +(price + vat).toFixed(2);

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <div style={styles.logo}>Carwash</div>
                <nav style={styles.nav}>
                    <Link href="/" style={styles.navBtn}>หน้าแรก</Link>
                    <Link href="/login" style={styles.navBtn}>Account</Link>
                    <Link href="/" style={styles.navBtn}>ออกจากระบบ</Link>
                </nav>
            </header>

            <div style={styles.container}>
                <h1 style={styles.title}>ขอบคุณที่ใช้บริการค่ะ</h1>
                <hr style={{ width: '80%', margin: '20px auto' }} />

                <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>สถานะการจอง</div>
                    <div>
                        {status === 'กำลังส่งข้อมูล' && <span style={styles.badge('#f59e0b')}>กำลังส่งข้อมูล</span>}
                        {status === 'ส่งข้อมูลสำเร็จ' && <span style={styles.badge('#10b981')}>ส่งข้อมูลสำเร็จ</span>}
                        {status !== 'กำลังส่งข้อมูล' && status !== 'ส่งข้อมูลสำเร็จ' && (
                            <span style={styles.badge('#6b7280')}>{status}</span>
                        )}
                    </div>
                </div>

                <div style={styles.receiptBox}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 800 }}>ใบเสร็จอิเล็กทรอนิกส์</div>
                            <div style={{ color: '#6b7280' }}>บริษัท Carwash จำกัด</div>
                        </div>
                        <div style={styles.right}>
                            <div>เลขที่ใบเสร็จ: {booking ? ('RC' + Math.floor(Math.random() * 900000 + 100000)) : '-'}</div>
                            <div>วันที่: {booking ? booking.createdAt.split('T')[0] : '-'}</div>
                            <div>เวลา: {booking ? booking.createdAt.split('T')[1].split('.')[0] : '-'}</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 18, borderTop: '1px dashed #e5e7eb', paddingTop: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                            <div>รายการ</div>
                            <div>จำนวน</div>
                            <div style={{ textAlign: 'right' }}>ราคา (THB)</div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <div>
                                <div style={{ fontWeight: 700 }}>{booking?.service ?? '-'}</div>
                                <div style={{ color: '#6b7280' }}>วันที่จอง: {booking?.date ?? '-'}</div>
                                <div style={{ color: '#6b7280' }}>เวลาที่จอง: {booking?.time ?? '-'}</div>
                            </div>
                            <div style={{ alignSelf: 'center' }}>1</div>
                            <div style={{ textAlign: 'right', alignSelf: 'center' }}>{(booking?.price ?? 0).toFixed(2)}</div>
                        </div>

                        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                            <div style={{ width: 220 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>ยอดรวม</div>
                                    <div style={{ fontWeight: 700 }}>{(booking?.price ?? 0).toFixed(2)}</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>VAT 7%</div>
                                    <div style={{ fontWeight: 700 }}>{vat.toFixed(2)}</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, marginTop: 8 }}>
                                    <div style={{ fontWeight: 800 }}>จำนวนเงินรวม</div>
                                    <div style={{ fontWeight: 800 }}>{total.toFixed(2)} THB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 20 }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <button style={{
                            background: '#B22222',
                            color: '#fff',
                            padding: '12px 28px',
                            borderRadius: 25,
                            border: 'none',
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}>กลับสู่หน้าแรก</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
