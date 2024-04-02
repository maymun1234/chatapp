    // Tüm kullanıcı listesi öğelerini seç
    const userListItems = document.querySelectorAll('#userList li');

    // Her bir kullanıcı listesi öğesine tıklama olayı ekle
    userListItems.forEach(item => {
        item.addEventListener('click', () => {
            // Tüm öğelerin arka plan rengini sıfırla
            userListItems.forEach(item => {
                item.style.backgroundColor = '';
            });
            // Tıklanan öğenin arka plan rengini değiştir
            item.style.backgroundColor = 'var(--themecolor)';
        });
    });

    const headerButton = document.querySelectorAll('#headerButton');

    // Her bir kullanıcı listesi öğesine tıklama olayı ekle
    headerButton.forEach(item => {
        item.addEventListener('click', () => {
            // Tüm öğelerin arka plan rengini sıfırla
            headerButton.forEach(item => {
                item.style.backgroundColor = '';
            });
            // Tıklanan öğenin arka plan rengini değiştir
            item.style.backgroundColor = 'var(--themecolor)';
            item.i.style.color = "var(--white)";
        });
    });
