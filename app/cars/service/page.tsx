'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ServiceSelectionPage() {
    const router = useRouter();
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const services = [
        { id: 'basic', label: 'ล้างสีภายนอก', icon: '🚗' },
        { id: 'inside', label: 'ล้างสีภายใน', icon: '🧹' },
        { id: 'oil', label: 'ล้าง + อบโอโซน', icon: '💨' },
        { id: 'full', label: 'ล้าง + เคลือบ', icon: '✨' },
    ];

    const addOns = [
        { id: 'addon1', label: 'เน้นช่วงล่าง', icon: '🛡️' },
        { id: 'addon2', label: 'เน้นช่วงล้อ', icon: '🛡️' },
    ];

    const styles: Record<string, any> = {
        page: {
            minHeight: '100vh',
            background: '#fff',
        },
        header: {
            background: 'linear-gradient(135deg, #B22222 20%, #000000 100%)',
            borderBottom: '3px solid #333',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
        logoText: {
            fontSize: '40px',
            fontWeight: 'bold' as const,
            color: '#fff',
            letterSpacing: '7px',
        },
        nav: {
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
        },
        navBtn: {
            background: '#dd0019',
            color: 'white',
            border: 'none',
            padding: '14px 30px',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
        },
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        section: {
            borderRight: '2px solid #ddd',
            paddingRight: '40px',
        },
        lastSection: {
            borderRight: 'none',
            paddingRight: '0',
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold' as const,
            marginBottom: '30px',
            color: '#000',
            paddingBottom: '15px',
            borderBottom: '2px solid #ddd',
        },
        servicesList: {
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '15px',
        },
        serviceBtn: (isSelected: boolean) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '15px',
            border: isSelected ? '3px solid #dd0019' : '2px solid #ddd',
            borderRadius: '8px',
            background: isSelected ? '#fff5f5' : '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            fontWeight: '600' as const,
            color: isSelected ? '#dd0019' : '#333',
        }),
        dot: (isSelected: boolean) => ({
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: isSelected ? '#dd0019' : '#ddd',
            flexShrink: 0,
        }),
        serviceLabel: {
            flex: 1,
            textAlign: 'left' as const,
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '15px',
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '2px solid #ddd',
            gridColumn: '1 / -1',
        },
        nextBtn: {
            background: '#B22222',
            color: 'white',
            border: 'none',
            padding: '16px 50px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(178, 34, 34, 0.3)',
        },
        cancelBtn: {
            background: '#fff',
            color: '#dd0019',
            border: '2px solid #dd0019',
            padding: '14px 40px',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        },
    };

    const toggleService = (serviceId: string) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const handleNext = () => {
        if (selectedServices.length === 0) {
            alert('กรุณาเลือกบริการอย่างน้อยหนึ่งรายการ');
            return;
        }
        // บันทึก label ของบริการที่เลือกลง localStorage เพื่อให้หน้าถัดไปและหน้ารับชำระใช้งานได้
        const allItems = [...services, ...addOns];
        const selectedLabels = allItems
            .filter((s) => selectedServices.includes(s.id))
            .map((s) => s.label);
        try {
            localStorage.setItem('selectedServices', JSON.stringify(selectedLabels));
        } catch (e) {
            // ignore
        }
        alert(`เลือกบริการแล้ว: ${selectedLabels.join(', ')}`);
        router.push('/date-time');
    };

    return (
        <div style={styles.page}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.logoText}>CAR WASH</div>
                <nav style={styles.nav}>
                    <Link href="/menu" style={styles.navBtn}>หน้าแรก</Link>
                    <Link href="/menu" style={styles.navBtn}>Account</Link>
                    <button 
                        style={styles.navBtn}
                        onClick={() => router.push('/login')}
                    >
                        ออกจากระบบ
                    </button>
                </nav>
            </header>

            {/* Main Content */}
            <div style={styles.container}>
                {/* Left Section - Step 2 Services */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Step 2 เลือกบริการ</h2>
                    <div style={styles.servicesList}>
                        {services.map(service => (
                            <button
                                key={service.id}
                                style={styles.serviceBtn(selectedServices.includes(service.id))}
                                onClick={() => toggleService(service.id)}
                            >
                                <div style={styles.dot(selectedServices.includes(service.id))} />
                                <div style={styles.serviceLabel}>{service.label}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section - Add-ons */}
                <div style={styles.lastSection}>
                    <h2 style={styles.sectionTitle}>Add-on เพิ่มเติม</h2>
                    <div style={styles.servicesList}>
                        {addOns.map(addon => (
                            <button
                                key={addon.id}
                                style={styles.serviceBtn(selectedServices.includes(addon.id))}
                                onClick={() => toggleService(addon.id)}
                            >
                                <div style={styles.dot(selectedServices.includes(addon.id))} />
                                <div style={styles.serviceLabel}>{addon.label}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div style={styles.buttonContainer}>
                    <button
                        style={styles.cancelBtn}
                        onClick={() => router.push('/cars')}
                    >
                        ย้อนกลับ
                    </button>
                    <button
                        style={styles.nextBtn}
                        onClick={handleNext}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
