export function getData() {
    return fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка завантаження даних');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Помилка отримання даних:', error);
      });
  }