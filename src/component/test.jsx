import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    // Verilen URL'den JavaScript dosyasını dinamik olarak yükle
    const script = document.createElement('script');
    script.src = 'https://widget-subemail.vercel.app/widget/index.js';
    script.async = true;

    // Script yüklendiğinde veya hata aldığınızda işlemleri yönetin
    script.onload = () => {
      // Yükleme başarılı, bu noktada dilediğiniz işlemleri yapabilirsiniz
      console.log('Script yüklendi.');
    };

    script.onerror = () => {
      // Yükleme hatası, hatayı işleyebilirsiniz
      console.error('Script yüklenirken hata oluştu.');
    };

    // Script'i belirtilen URL'den ekleyin
    document.body.appendChild(script);

    // Component unmount edildiğinde script'i temizleyin
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      TEST
    </div>
  );
}

export default Test;
