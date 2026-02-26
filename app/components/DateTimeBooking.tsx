'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DateTimeBooking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isBooked, setIsBooked] = useState(false);

  // Generate available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (newDate >= today) {
      setSelectedDate(newDate.toISOString().split('T')[0]);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // try to read selected services from previous step
      let serviceLabel = 'Wash Basic';
      let price = 300;
      try {
        const sel = localStorage.getItem('selectedServices');
        if (sel) {
          const arr = JSON.parse(sel);
          if (Array.isArray(arr) && arr.length > 0) {
            serviceLabel = arr.join(', ');
            price = 300 * arr.length;
          }
        }
      } catch (e) {}

      const booking = {
        date: selectedDate,
        time: selectedTime,
        service: serviceLabel,
        price: price,
        createdAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem('booking', JSON.stringify(booking));
        localStorage.setItem('bookingStatus', 'sending');
      } catch (e) {
        // ignore storage errors
      }

      setIsBooked(true);
      setTimeout(() => {
        try {
          localStorage.setItem('bookingStatus', 'success');
        } catch (e) {}
        setIsBooked(false);
        setSelectedDate('');
        setSelectedTime('');
      }, 1500);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const monthName = currentMonth.toLocaleString('th-TH', { month: 'long', year: 'numeric' });

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)' }}>
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(135deg, #c41e3a 0%, #000000 100%)',
          padding: '25px 40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #87C540 0%, #A4D65E 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            🚗
          </div>
          <h1
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: '3px',
              margin: 0,
            }}
          >
            Carwash
          </h1>
        </div>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link
            href="/"
            style={{
              padding: '12px 25px',
              background: '#B22222',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              border: '2px solid #fff',
              transition: 'all 0.3s',
            }}
          >
            หน้าแรก
          </Link>
          <Link
            href="/login"
            style={{
              padding: '12px 25px',
              background: '#B22222',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              border: '2px solid #fff',
              transition: 'all 0.3s',
            }}
          >
            Account
          </Link>
          <Link
            href="/register"
            style={{
              padding: '12px 25px',
              background: '#B22222',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              border: '2px solid #fff',
              transition: 'all 0.3s',
            }}
          >
            ออกจากระบบ
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: '50px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#c41e3a',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Step 3 เลือกวันที่และเวลา
        </h2>
        <div
          style={{
            borderBottom: '4px solid #c41e3a',
            margin: '20px 0 40px 0',
            maxWidth: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          {/* Calendar Section */}
          <div
            style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '20px',
              }}
            >
              เลือกวันที่
            </h3>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <button
                style={{
                  padding: '14px 30px',
                  background: '#B22222',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                onClick={handlePrevMonth}
              >
                &lt; ก่อนหน้า
              </button>
              <div style={{ fontSize: '18px', fontWeight: '600' }}>{monthName}</div>
              <button
                style={{
                  padding: '14px 30px',
                  background: '#B22222',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                onClick={handleNextMonth}
              >
                ถัดไป &gt;
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map((d) => (
                <div key={d} style={{ textAlign: 'center', fontWeight: '600' }}>
                  {d}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px',
              }}
            >
              {calendarDays.map((day, i) =>
                day ? (
                  <div
                    key={i}
                    onClick={() => handleDateClick(day)}
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      background:
                        selectedDate &&
                        selectedDate.split('T')[0].split('-')[2] ===
                          String(day)
                          ? '#B22222'
                          : 'transparent',
                      color:
                        selectedDate &&
                        selectedDate.split('T')[0].split('-')[2] ===
                          String(day)
                          ? '#fff'
                          : '#000',
                    }}
                  >
                    {day}
                  </div>
                ) : (
                  <div key={i}></div>
                )
              )}
            </div>
          </div>

          {/* Time Selection Section */}
          <div
            style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '20px',
              }}
            >
              เลือกเวลา
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
              }}
            >
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  style={{
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    background: selectedTime === t ? '#c41e3a' : 'transparent',
                    color: selectedTime === t ? '#fff' : '#000',
                    cursor: 'pointer',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {selectedDate && selectedTime && (
              <div
                style={{
                  marginTop: '20px',
                  padding: '15px',
                  background: '#fee',
                  borderLeft: '4px solid #c41e3a',
                }}
              >
                <div>สรุปการจอง</div>
                <div>วันที่: {selectedDate}</div>
                <div>เวลา: {selectedTime}</div>
                <button
                  onClick={handleBooking}
                  style={{
                    marginTop: '10px',
                    background: '#B22222',
                    color: '#fff',
                    padding: '16px 50px',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ยืนยันการจอง
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Next */}
        <div style={{ textAlign: 'right', marginTop: '50px' }}>
          <Link href="/payMent">
            <button
              style={{
                padding: '15px 40px',
                background: '#B22222',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: '3px solid #000',
                cursor: 'pointer',
              }}
            >
              Next &gt;
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
