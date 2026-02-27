'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SelectCarPage() {
    const router = useRouter();
    
    // Mock data - เรื่อเพิ่มรถที่มีอยู่แล้ว
    const [cars] = useState([
        { id: 1, brand: 'BMW', licensePlate: '777777' },
        { id: 2, brand: 'lexus', licensePlate: '99999' },
    ]);

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
        container: {
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold' as const,
            marginBottom: '30px',
            color: '#000',
        },
        carsGrid: {
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '20px',
            marginBottom: '40px',
        },
        carRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            padding: '20px',
            border: '2px solid #ddd',
            borderRadius: '12px',
            background: '#f9f9f9',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
                borderColor: '#dd0019',
                boxShadow: '0 4px 12px rgba(221, 0, 25, 0.2)',
            },
        },
        carImage: {
            width: '150px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover' as const,
            backgroundColor: '#e0e0e0',
        },
        carInfo: {
            flex: 1,
        },
        carBrand: {
            fontSize: '24px',
            fontWeight: 'bold' as const,
            color: '#000',
            marginBottom: '8px',
        },
        carPlate: {
            fontSize: '20px',
            color: '#666',
            fontFamily: 'monospace',
        },
        buttonRow: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'flex-start',
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
            display: 'inline-block',
            boxShadow: '0 4px 12px rgba(178, 34, 34, 0.3)',
            marginLeft: '15px',
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
        addCarBtn: {
            background: '#B22222',
            color: 'white',
            border: 'none',
            padding: '16px 50px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            boxShadow: '0 4px 12px rgba(178, 34, 34, 0.3)',
        },
    };

    const handleSelectCar = (carId: number) => {
        // ตัวอย่าง: สามารถบันทึก carId ยู storage หรือ state management
        alert(`เลือกรถ: ${cars.find(c => c.id === carId)?.brand} (${cars.find(c => c.id === carId)?.licensePlate})`);
    };

    return (
        <div style={styles.page}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.logoText}>CAR WASH</div>
                <nav style={styles.nav}>
                    <Link href="/menu" style={styles.navBtn}>หน้าแรก</Link>
                    <Link href="/menu" style={styles.navBtn}>Account</Link>
                    <button style={styles.navBtnGhost} onClick={() => router.push('/login')}>ออกจากระบบ</button>
                </nav>
            </header>

            {/* Main Content */}
            <div style={styles.container}>
                <h1 style={styles.title}>Step 1 เลือกรถของท่าน</h1>
                
                {/* Cars List */}
                <div style={styles.carsGrid}>
                    {cars.map(car => (
                        <div 
                            key={car.id}
                            style={styles.carRow}
                            onClick={() => handleSelectCar(car.id)}
                        >
                            <img 
                                src="https://images.pexels.com/photos/6894434/pexels-photo-6894434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                                alt={car.brand}
                                style={styles.carImage}
                            />
                            <div style={styles.carInfo}>
                                <div style={styles.carBrand}>{car.brand}</div>
                                <div style={styles.carPlate}>{car.licensePlate}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Car Button and Next Button */}
                <div style={styles.buttonRow}>
                    <button 
                        style={styles.addCarBtn}
                        onClick={() => router.push('/cars/add')}
                    >
                        + เพิ่มรถ
                    </button>
                    <button 
                        style={styles.nextBtn}
                        onClick={() => router.push('/cars/service')}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
