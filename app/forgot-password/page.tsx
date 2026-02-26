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
    formTitle: {
        margin: 0,
        fontSize: '20px',
        color: '#000000',
        marginBottom: '10px',
    },
    errorMessage: {
        backgroundColor: '#fee',
        color: '#c33',
        padding: '12px 15px',
        borderRadius: '6px',
        fontSize: '14px',
        borderLeft: '4px solid #c33',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
        color: '#000000',
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
        marginTop: '10px',
        display: 'block',
        textAlign: 'center' as const,
    },
    stepIndicator: {
        textAlign: 'center' as const,
        fontSize: '12px',
        color: '#000000',
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '1px solid #eee',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
        flexWrap: 'wrap' as const,
        color: '#000000',
    },
};

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email) {
            setError('กรุณากรอกอีเมล');
            setIsLoading(false);
            return;
        }

        if (!email.includes('@')) {
            setError('รูปแบบอีเมลไม่ถูกต้อง');
            setIsLoading(false);
            return;
        }

        // Simulate sending OTP
        setTimeout(() => {
            alert('ส่ง OTP ไปยังอีเมลของคุณแล้ว');
            setStep('otp');
            setIsLoading(false);
        }, 1000);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!otp) {
            setError('กรุณากรอก OTP');
            setIsLoading(false);
            return;
        }

        // Simulate OTP verification
        setTimeout(() => {
            if (otp === '123456') {
                setStep('reset');
            } else {
                setError('OTP ไม่ถูกต้อง');
            }
            setIsLoading(false);
        }, 1000);
    };

    const handlePasswordReset = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!newPassword || !confirmPassword) {
            setError('กรุณากรอกรหัสผ่านให้ครบ');
            setIsLoading(false);
            return;
        }

        if (newPassword.length < 6) {
            setError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
            setIsLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
            setIsLoading(false);
            return;
        }

        // Simulate password reset
        setTimeout(() => {
            alert('เปลี่ยนรหัสผ่านสำเร็จ!');
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
                input:focus {
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
                    <h1 style={styles.headerTitle}>CarWash</h1>
                    <p style={styles.headerSubtitle}>ลืมรหัสผ่าน</p>
                </div>

                <form style={styles.form}>
                    {/* Step 1: Enter Email */}
                    {step === 'email' && (
                        <>
                            <h2 style={styles.formTitle}>ขั้นตอนที่ 1: ยืนยันอีเมล</h2>
                            {error && <div style={styles.errorMessage}>{error}</div>}

                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.label}>กรุณากรอกบัญชีอีเมลของคุณ</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="กรุณากรอกอีเมล"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleEmailSubmit}
                                disabled={isLoading}
                                style={styles.button}
                            >
                                {isLoading ? 'กำลังส่ง OTP...' : 'ส่ง OTP'}
                            </button>

                            <div style={styles.stepIndicator}>
                                ขั้นตอนที่ 1 / 3
                            </div>
                        </>
                    )}

                    {/* Step 2: Enter OTP */}
                    {step === 'otp' && (
                        <>
                            <h2 style={styles.formTitle}>ขั้นตอนที่ 2: ยืนยัน OTP</h2>
                            {error && <div style={styles.errorMessage}>{error}</div>}

                            <div style={styles.formGroup}>
                                <label htmlFor="otp" style={styles.label}>
                                    กรุณากรอก OTP ที่ส่งไปยัง {email}
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    placeholder="โค้ด OTP (ทดสอบ: 123456)"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    maxLength={6}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleOtpSubmit}
                                disabled={isLoading}
                                style={styles.button}
                            >
                                {isLoading ? 'กำลังตรวจสอบ...' : 'ตรวจสอบ OTP'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setStep('email');
                                    setOtp('');
                                }}
                                style={styles.linkButton}
                            >
                                ← กลับไปใส่อีเมล
                            </button>

                            <div style={styles.stepIndicator}>
                                ขั้นตอนที่ 2 / 3
                            </div>
                        </>
                    )}

                    {/* Step 3: Reset Password */}
                    {step === 'reset' && (
                        <>
                            <h2 style={styles.formTitle}>ขั้นตอนที่ 3: ตั้งรหัสผ่านใหม่</h2>
                            {error && <div style={styles.errorMessage}>{error}</div>}

                            <div style={styles.formGroup}>
                                <label htmlFor="newPassword" style={styles.label}>รหัสผ่านใหม่</label>
                                <input
                                    id="newPassword"
                                    type="password"
                                    placeholder="กรุณากรอกรหัสผ่านใหม่"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="confirmPassword" style={styles.label}>ยืนยันรหัสผ่าน</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="ยืนยันรหัสผ่าน"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handlePasswordReset}
                                disabled={isLoading}
                                style={styles.button}
                            >
                                {isLoading ? 'กำลังเปลี่ยน...' : 'เปลี่ยนรหัสผ่าน'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setStep('otp');
                                    setNewPassword('');
                                    setConfirmPassword('');
                                }}
                                style={styles.linkButton}
                            >
                                ← กลับไปยืนยัน OTP
                            </button>

                            <div style={styles.stepIndicator}>
                                ขั้นตอนที่ 3 / 3
                            </div>
                        </>
                    )}
                </form>

                <div style={styles.links}>
                    <Link href="/login" style={styles.linkButton}>
                        ← กลับไปเข้าสู่ระบบ
                    </Link>
                </div>
                <div style={{ textAlign: 'right', marginTop: 18 }}>
                    <Link href="/menu">
                        <button style={styles.button}>Next &gt;</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
