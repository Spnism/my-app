'use client';

import Link from 'next/link';
import { useState } from 'react';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg,#B22222 20%, #000000 100%)',
        padding: '20px',
        fontFamily: "'Arial', sans-serif",
    },
    box: {
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        maxWidth: '1000px',
        width: '100%',
        padding: '40px',
        animation: 'slideIn 0.3s ease-out',
        maxHeight: '90vh',
        overflowY: 'auto' as const,
    },
    header: {
        textAlign: 'center' as const,
        marginBottom: '30px',
        borderBottom: '2px solid #B22222',
        paddingBottom: '20px',
    },
    headerTitle: {
        margin: 0,
        fontSize: '40px',
        color: '#000000',
        fontWeight: 'bold',
    },
    headerSubtitle: {
        margin: '5px 0 0 0',
        color: '#000000',
        fontSize: '14px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
    },
    errorMessage: {
        backgroundColor: '#fee',
        color: '#c33',
        padding: '12px 15px',
        borderRadius: '6px',
        fontSize: '14px',
        borderLeft: '4px solid #c33',
    },
    fieldset: {
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        padding: '20px',
        margin: 0,
    },
    legend: {
        fontWeight: '600',
        color: '#B22222',
        padding: '0 10px',
        fontSize: '18px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
        marginBottom: '15px',
    },
    formGroupLast: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
        marginBottom: 0,
    },
    label: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#000000',
    },
    input: {
        padding: '12px 15px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        color: '#000000',
        backgroundColor: 'white',
    },
    select: {
        padding: '12px 15px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        color: '#000000',
        backgroundColor: 'white',
    },
    button: {
        background: 'linear-gradient(135deg,#FF0000 0%, #B22222 100%)',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginTop: '10px',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
        flexWrap: 'wrap' as const,
    },
    linksSpan: {
        fontSize: '14px',
        color: '#000000',
    },
    linkButton: {
        color: '#667eea',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
    },
};

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        licensePlate: '',
        carBrand: '',
        carModel: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const carBrands = [
        'Toyota',
        'Honda',
        'Mazda',
        'Nissan',
        'BMW',
        'Mercedes-Benz',
        'Audi',
        'Volkswagen',
        'Ford',
        'Hyundai',
        'Kia',
        'Tesla',
        'อื่น ๆ',
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validation
        if (
            !formData.fullName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.licensePlate ||
            !formData.carBrand ||
            !formData.phoneNumber
        ) {
            setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            setIsLoading(false);
            return;
        }

        if (!formData.email.includes('@')) {
            setError('รูปแบบอีเมลไม่ถูกต้อง');
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
            setIsLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
            setIsLoading(false);
            return;
        }

        // Simulate registration
        setTimeout(() => {
            alert('ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div style={styles.container}>
            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                input:focus,
                select:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }
                input::placeholder {
                    color: #999;
                }
                button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
                }
                button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                button:active:not(:disabled) {
                    transform: translateY(0);
                }
                a:hover {
                    color: #764ba2;
                    background-color: #f5f5f5;
                    text-decoration: underline;
                }
            `}</style>
            <div style={styles.box}>
                <div style={styles.header}>
                    <h1 style={styles.headerTitle}>CarWash </h1>
                    <p style={styles.headerSubtitle}>สมัครสมาชิกใหม่</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    {error && <div style={styles.errorMessage}>{error}</div>}

                    {/* Personal Information */}
                    <fieldset style={styles.fieldset}>
                        <legend style={styles.legend}>ข้อมูลส่วนตัว</legend>

                        <div style={styles.formGroup}>
                            <label htmlFor="fullName" style={styles.label}>ชื่อ-นามสกุล</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="กรุณากรอกชื่อ-นามสกุล"
                                value={formData.fullName}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="phoneNumber" style={styles.label}>เบอร์โทรศัพท์</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>อีเมล</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="กรุณากรอกอีเมล"
                                value={formData.email}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="password" style={styles.label}>รหัสผ่าน</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="กรุณากรอกรหัสผ่าน (อย่างน้อย 6 ตัวอักษร)"
                                value={formData.password}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroupLast}>
                            <label htmlFor="confirmPassword" style={styles.label}>ยืนยันรหัสผ่าน</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="กรุณายืนยันรหัสผ่าน"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>
                    </fieldset>

                    {/* Car Information */}
                    <fieldset style={styles.fieldset}>
                        <legend style={styles.legend}>ข้อมูลรถยนต์</legend>

                        <div style={styles.formGroup}>
                            <label htmlFor="licensePlate" style={styles.label}>ทะเบียนรถ</label>
                            <input
                                id="licensePlate"
                                name="licensePlate"
                                type="text"
                                placeholder="เช่น กข 1234 กรุงเทพ"
                                value={formData.licensePlate}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="carBrand" style={styles.label}>ยี่ห้อรถ</label>
                            <select
                                id="carBrand"
                                name="carBrand"
                                value={formData.carBrand}
                                onChange={handleChange}
                                style={styles.select}
                                required
                            >
                                <option value="">-- เลือกยี่ห้อรถ --</option>
                                {carBrands.map((brand) => (
                                    <option key={brand} value={brand}>
                                        {brand}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={styles.formGroupLast}>
                            <label htmlFor="carModel" style={styles.label}>รุ่นรถ</label>
                            <input
                                id="carModel"
                                name="carModel"
                                type="text"
                                placeholder="เช่น Civic, City"
                                value={formData.carModel}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={styles.button}
                    >
                        {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
                    </button>
                </form>

                <div style={styles.links}>
                    <span style={styles.linksSpan}>มีบัญชีอยู่แล้ว?</span>
                    <Link href="/login" style={styles.linkButton}>
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
        </div>
    );
}
