import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../types"; // Імпортуємо тип `Image`

// Визначаємо інтерфейс для пропсів компонента
interface ImageGalleryProps {
  photos: Image[]; // Масив фотографій з типом `Image`
  openModal: (image: Image) => void; // Функція для відкриття модального вікна
  modalContent: (image: Image) => JSX.Element; // Функція, що повертає елемент JSX для контенту модального вікна
}

// Компонент `ImageGallery`
const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal, modalContent }) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo)}>
          {/* Передаємо `photo` і `modalContent` у компонент `ImageCard` */}
          <ImageCard photo={photo} modalContent={modalContent} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
