'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddCarPage() {
    const router = useRouter();
    const [licensePlate, setLicensePlate] = useState('');
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const carBrands = ['Benz', 'Honda', 'Mazda', 'Izusu', 'BYD', 'BM', 'Toyota', 'Volvo', 'Nissan', 'Tesla'];

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
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold' as const,
            marginBottom: '30px',
            color: '#000',
        },
        formSection: {
            marginBottom: '40px',
        },
        sectionLabel: {
            fontSize: '18px',
            fontWeight: 'bold' as const,
            marginBottom: '15px',
            color: '#000',
            borderBottom: '2px solid #ddd',
            paddingBottom: '10px',
        },
        inputLabel: {
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '8px',
            display: 'block',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            marginBottom: '20px',
            boxSizing: 'border-box' as const,
            transition: 'border-color 0.3s ease',
            '&:focus': {
                outline: 'none',
                borderColor: '#dd0019',
            },
        },
        brandsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px',
            marginBottom: '30px',
        },
        brandBtn: (isSelected: boolean) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            border: isSelected ? '3px solid #dd0019' : '2px solid #ddd',
            borderRadius: '8px',
            background: isSelected ? '#fff5f5' : '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '14px',
            fontWeight: '600' as const,
            color: isSelected ? '#dd0019' : '#333',
        }),
        dot: (isSelected: boolean) => ({
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: isSelected ? '#dd0019' : '#ddd',
            marginRight: '4px',
        }),
        buttonRow: {
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
        },
        confirmBtn: {
            background: '#B22222',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
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
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        },
    };

    const handleNext = () => {
        if (!licensePlate.trim()) {
            alert('กรุณากรอกเลขทะเบียนรถ');
            return;
        }
        if (!selectedBrand) {
            alert('กรุณาเลือกยี่ห้อรถ');
            return;
        }
        // บันทึกข้อมูลรถใหม่
        alert(`เพิ่มรถสำเร็จ: ${selectedBrand} (${licensePlate})`);
        router.push('/cars/service');
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
                <h1 style={styles.title}>Step 2 เพิ่มรถใหม่</h1>

                {/* License Plate Input */}
                <div style={styles.formSection}>
                    <label style={styles.inputLabel}>กรุณากรอกเลขทะเบียนรถของท่าน</label>
                    <input
                        type="text"
                        style={styles.input}
                        placeholder="กรุณากรอกเลขทะเบียนรถของท่าน"
                        value={licensePlate}
                        onChange={(e) => setLicensePlate(e.target.value)}
                    />
                </div>

                {/* Brand Selection */}
                <div style={styles.formSection}>
                    <div style={styles.sectionLabel}>เลือกรุ่นรถ</div>
                    <div style={styles.brandsGrid}>
                        {carBrands.map(brand => (
                            <button
                                key={brand}
                                style={styles.brandBtn(selectedBrand === brand)}
                                onClick={() => setSelectedBrand(brand)}
                            >
                                <div style={styles.dot(selectedBrand === brand)} />
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={styles.buttonRow}>
                    <button 
                        style={styles.cancelBtn}
                        onClick={() => router.push('/cars')}
                    >
                        ยกเลิก
                    </button>
                    <button 
                        style={styles.confirmBtn}
                        onClick={handleNext}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
