'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/th'; // Thai locale for month names


export default function DateTimeBooking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date()); // stored as Date but manipulated with dayjs

  const [isBooked, setIsBooked] = useState(false);
  const router = useRouter();

  // Generate available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  // date helpers using dayjs
  const daysInMonth = (date: Date) => dayjs(date).daysInMonth();
  const firstDayOfMonth = (date: Date) => dayjs(date).startOf('month').day();

  const handlePrevMonth = () => {
    setCurrentMonth(dayjs(currentMonth).subtract(1, 'month').toDate());
    setSelectedDate('');
  };

  const handleNextMonth = () => {
    setCurrentMonth(dayjs(currentMonth).add(1, 'month').toDate());
    setSelectedDate('');
  };

  const handleDateClick = (day: number) => {
    const newDate = dayjs(currentMonth).date(day).startOf('day');
    const today = dayjs().startOf('day');

    if (newDate.isSame(today) || newDate.isAfter(today)) {
      setSelectedDate(newDate.format('YYYY-MM-DD'));
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

  const handleNext = () => {
    if (selectedDate && selectedTime) {
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
      } catch (e) {}

      router.push('/payMent');
    }
  };

  const daysInMonthCount = daysInMonth(currentMonth);
  const firstDay = firstDayOfMonth(currentMonth);
  const monthName = dayjs(currentMonth).locale('th').format('MMMM YYYY');

  // figure out selected day number for easier comparison
  const selectedDay = selectedDate
    ? String(parseInt(selectedDate.split('-')[2], 10))
    : null;

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonthCount; i++) {
    calendarDays.push(i);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)' }}>
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(135deg, #b22222 0%, #000000 100%)',
          padding: '25px 40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
      
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link
            href="/"
            style={{
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
            }}
          >
            หน้าแรก
          </Link>
          <Link
            href="/login"
            style={{
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
            }}
          >
            Account
          </Link>
          <Link
            href="/register"
            style={{
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
              border: '2px solid #000',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#b22222',
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
                color: '#333',
              }}
            >
              <button
                style={{
                  padding: '14px 30px',
                  background: '#cc0000',
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
                  background: '#cc0000',
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
                color: '#333',
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map((d) => (
                <div key={d} 
                style={{ 
                  color: '#333',
                   textAlign: 'center',
                    fontWeight: '600' }}>
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
                  <button
                    key={i}
                    onClick={() => handleDateClick(day)}
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '0',
                      textAlign: 'center',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: '1px solid #B22222',
                      outline: 'none',
                      background: selectedDay === String(day) ? '#B22222' : 'transparent',
                      color: selectedDay === String(day) ? '#fff' : '#000',
                      transition: 'background 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedDay !== String(day)) e.currentTarget.style.background = '#f0f0f0';
                    }}
                    onMouseLeave={(e) => {
                      if (selectedDay !== String(day)) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {day}
                  </button>
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
              border: '2px solid #000',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#b22222',
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
                    border: '1px solid #B22222',
                    borderRadius: '6px',
                    background: selectedTime === t ? '#B22222' : 'transparent',
                    color: selectedTime === t ? '#fff' : '#000',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTime !== t) e.currentTarget.style.background = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTime !== t) e.currentTarget.style.background = selectedTime === t ? '#B22222' : 'transparent';
                    }}
                  >
                    {t}
                  </button>
              ))}
              </div>
          </div>

          {/* Bottom Next */}
          <div style={{ textAlign: 'right', marginTop: '50px' }}>
            <button
              onClick={handleNext}
              disabled={!selectedDate || !selectedTime}
              style={{
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
              }}
            >
              Next &gt;
            </button>
          </div>
        </div>      
      </main>
    </div>
  );
}

