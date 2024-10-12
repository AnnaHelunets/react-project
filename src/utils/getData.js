export function getData() {
    return fetch('/db.json')
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