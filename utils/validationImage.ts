export const validateImage = (file: File): Promise<null | string> => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
  const minWidth = 512;
  const minHeight = 512;

  if (!validTypes.includes(file.type)) {
    return Promise.resolve('Поддерживаются только JPG, PNG и WebP. Загрузите фото в одном из этих форматов.');
  }
  if (file.size > maxSizeInBytes) {
    return Promise.resolve('Файл слишком большой. Загрузите фото размером до 10 МБ.');
  }

  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        if (img.width < minWidth || img.height < minHeight) {
          resolve('Фото слишком маленькое. Загрузите изображение не меньше 512×512 пикселей.');
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve('Не удалось обработать фото. Попробуйте загрузить другое изображение.');
      img.src = e.target?.result as string;
    };
    reader.onerror = () => resolve('Не удалось открыть файл. Попробуйте загрузить другое фото.');
    reader.readAsDataURL(file);
  });
};
