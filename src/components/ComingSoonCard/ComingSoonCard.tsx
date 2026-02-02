import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi2';
import { useLocale } from '../../context/LocaleContext';
import { ComingSoonProduct } from '../../types';
import './ComingSoonCard.css';

interface ComingSoonCardProps {
  product: ComingSoonProduct;
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({ product }) => {
  const { t } = useLocale();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const totalImages = images.length;
  const hasColors = product.colors && product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));
  };

  return (
    <div className="coming-soon-card">
      <div className="coming-soon-badge">{t('comingSoon')}</div>
      <div className="coming-soon-card-image">
        <img src={images[currentImageIndex]} alt={product.name} />
        {totalImages > 1 && (
          <>
            <button
              type="button"
              className="coming-soon-slider-btn coming-soon-prev"
              onClick={goPrev}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              className="coming-soon-slider-btn coming-soon-next"
              onClick={goNext}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
      </div>
      <div className="coming-soon-card-body">
        <span className="coming-soon-category">{t(product.category).toUpperCase()}</span>
        <h3 className="coming-soon-name">{product.name}</h3>
        <p className="coming-soon-description">{product.description}</p>
        {(product.rating !== undefined || product.reviewsCount !== undefined) && (
          <div className="coming-soon-rating">
            <HiStar className="coming-soon-star-icon" />
            <span className="coming-soon-rating-value">{product.rating?.toFixed(1) ?? '—'}</span>
            <span className="coming-soon-rating-reviews">
              ({product.reviewsCount ?? 0} {t('reviews')})
            </span>
          </div>
        )}
        <div className="coming-soon-price">
          <span className="coming-soon-price-current">
            {t('approxPrice')} ${product.approxPrice.toFixed(2)}
          </span>
        </div>
        <p className="coming-soon-arrival-days">
          {t('approxDays')} <span className="coming-soon-days-value">{product.arrivingDays}</span> {t('days')}
        </p>
        {hasColors && (
          <div className="coming-soon-options">
            <span className="coming-soon-options-label">{t('availableColors')}:</span>
            <div className="coming-soon-color-options">
              {product.colors!.map((color) => (
                <span
                  key={color.name}
                  className={`coming-soon-color-option ${color.value ? 'coming-soon-color-swatch' : 'coming-soon-color-chip'}`}
                  style={color.value ? { backgroundColor: color.value } : undefined}
                  title={color.name}
                >
                  {!color.value && color.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {hasSizes && (
          <div className="coming-soon-options">
            <span className="coming-soon-options-label">{t('availableSizes')}:</span>
            <div className="coming-soon-size-options">
              {product.sizes!.map((size) => (
                <span key={size} className="coming-soon-size-chip">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoonCard;
