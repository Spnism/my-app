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
        borderBottom: '2px solid  #B22222',
        paddingBottom: '20px',
    },
    headerTitle: {
        margin: 0,
        fontSize: '32px',
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
        fontSize: '40px',
        color: '#000000',
        marginBottom: '10px',
        textAlign: 'center' as const,
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
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
        flexWrap: 'wrap' as const,
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
    divider: {
        color: '#ddd',
    },
};

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate login request
        setTimeout(() => {
            if (!email || !password) {
                setError('กรุณากรอกอีเมลและรหัสผ่าน');
            } else if (!email.includes('@')) {
                setError('รูปแบบอีเมลไม่ถูกต้อง');
            } else {
                setError('');
                alert('เข้าสู่ระบบสำเร็จ!');
                window.location.href = '/menu';
            }
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
                    <p style={styles.headerSubtitle}>ระบบล้างรถยนต์อัตโนมัติ</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.formTitle}>เข้าสู่ระบบ</h2>

                    {error && <div style={styles.errorMessage}>{error}</div>}

                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>อีเมล</label>
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

                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>รหัสผ่าน</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="กรุณากรอกรหัสผ่าน"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={styles.button}
                    >
                        {isLoading ? 'กำลังประมวลผล...' : 'เข้าสู่ระบบ'}
                    </button>
                </form>

                <div style={styles.links}>
                    <Link href="/forgot-password" style={styles.linkButton}>
                        ลืมรหัสผ่าน?
                    </Link>
                    <span style={styles.divider}>|</span>
                    <Link href="/register" style={styles.linkButton}>
                        สมัครสมาชิก
                    </Link>
                </div>
                <div style={{ textAlign: 'right', marginTop: 18 }}>
                    <Link href="/register">
                        <button style={styles.button}>Next &gt;</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
