import React, { useEffect, useState } from 'react';

const DataLoader = () => {
  const [data, setData] = useState(null);  // لتخزين البيانات المستلمة
  const [error, setError] = useState(null); // لتخزين الأخطاء إذا حدثت

  useEffect(() => {
    // نقوم بتحميل البيانات باستخدام fetch
    fetch(import.meta.env.BASE_URL + 'data.json') // ضع هنا المسار الصحيح لملف JSON
      .then(response => {
        console.log('Response:', response);  // طباعة الاستجابة في وحدة التحكم

        // التحقق من أن الاستجابة كانت ناجحة (حالة HTTP 200)
        if (!response.ok) {
          throw new Error('Failed to fetch JSON: ' + response.statusText);
        }
        return response.text();  // قراءة الاستجابة كنص
      })
      .then(data => {
        console.log('Raw Response Data:', data);  // طباعة النص الخام للبيانات
        try {
          // محاولة تحويل البيانات إلى JSON
          const jsonData = JSON.parse(data);
          setData(jsonData);  // تعيين البيانات المستلمة في الحالة
        } catch (e) {
          console.error('Error parsing JSON:', e);
          setError('Error parsing JSON: ' + e.message);  // إذا حدث خطأ في التحليل
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data: ' + error.message);  // إذا حدث خطأ أثناء جلب البيانات
      });
  }, []);  // [] تعني أنه سيتم تحميل البيانات عند تحميل المكون فقط

  // إذا كانت هناك مشكلة في تحميل البيانات
  if (error) {
    return <div>Error: {error}</div>;
  }

  // إذا كانت البيانات لا تزال قيد التحميل
  if (!data) {
    return <div>Loading...</div>;
  }

  // عرض البيانات إذا تم تحميلها بنجاح
  return (
    <div>
      <h1>Data Loaded Successfully:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* عرض البيانات بشكل منسق */}
    </div>
  );
};

export default DataLoader;
