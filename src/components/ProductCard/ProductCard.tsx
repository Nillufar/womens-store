import React, { useState, useCallback, useRef, useEffect } from 'react';
import { HiStar, HiOutlineShoppingBag, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineXMark } from 'react-icons/hi2';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useLocale } from '../../context/LocaleContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSale = false }) => {
  const { t } = useLocale();
  const { addToCart } = useCart();
  const hasColors = product.colors && product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;
  const defaultColor = hasColors && product.colors!.length === 1 ? 0 : null;
  const defaultSize = hasSizes && product.sizes!.length === 1 ? product.sizes![0] : null;
  const [selectedColor, setSelectedColor] = useState<number | null>(defaultColor);
  const [selectedSize, setSelectedSize] = useState<string | null>(defaultSize);
  const [errorSize, setErrorSize] = useState(false);
  const [errorColor, setErrorColor] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const totalImages = images.length;

  const categoryLabel = t(product.category).toUpperCase();
  const savings = product.oldPrice ? product.oldPrice - product.price : 0;

  const goPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));
    },
    [totalImages]
  );

  const goNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));
    },
    [totalImages]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxOpen]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const missingSize = hasSizes && !selectedSize;
    const missingColor = hasColors && selectedColor === null;
    if (missingSize) setErrorSize(true);
    if (missingColor) setErrorColor(true);
    if (missingSize || missingColor) return;
    setErrorSize(false);
    setErrorColor(false);
    const colorName = selectedColor !== null ? product.colors?.[selectedColor]?.name : undefined;
    const size = selectedSize ?? undefined;
    addToCart(product, { selectedColor: colorName, selectedSize: size });
  };

  return (
    <div className={`product-card ${isSale ? 'sale-product-card' : ''}`}>
      {isSale && product.discount && (
        <div className="product-card-badge">-{product.discount}%</div>
      )}
      <div
        className="product-card-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => setLightboxOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
        aria-label="View full size image"
      >
        <div
          className="product-card-track"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="product-card-slide">
              <img src={src} alt={`${product.name} - ${idx + 1}`} loading={idx === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
        {totalImages > 1 && (
          <>
            <button
              type="button"
              className="slider-btn slider-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(e); }}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Previous image"
            >
              <HiOutlineChevronLeft />
            </button>
            <button
              type="button"
              className="slider-btn slider-next"
              onClick={(e) => { e.stopPropagation(); goNext(e); }}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Next image"
            >
              <HiOutlineChevronRight />
            </button>
            <div className="slider-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`slider-dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {lightboxOpen && (
        <div
          className="product-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size image view"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <HiOutlineXMark />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex]}
              alt={`${product.name} - ${currentImageIndex + 1}`}
              className="lightbox-image"
            />
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav lightbox-prev"
                  onClick={(e) => { e.stopPropagation(); goPrev(e); }}
                  aria-label="Previous image"
                >
                  <HiOutlineChevronLeft />
                </button>
                <button
                  type="button"
                  className="lightbox-nav lightbox-next"
                  onClick={(e) => { e.stopPropagation(); goNext(e); }}
                  aria-label="Next image"
                >
                  <HiOutlineChevronRight />
                </button>
                <span className="lightbox-counter">
                  {currentImageIndex + 1} / {totalImages}
                </span>
              </>
            )}
          </div>
        </div>
      )}
      <div className="product-card-body">
        <span className="product-card-category">{categoryLabel}</span>
        <h3 className="product-card-name">{product.name}</h3>
        {product.description && (
          <p className="product-card-description">{product.description}</p>
        )}
        {(product.rating !== undefined || product.reviewsCount !== undefined) && (
          <div className="product-card-rating">
            <HiStar className="star-icon" />
            <span className="rating-value">{product.rating?.toFixed(1) ?? '—'}</span>
            <span className="rating-reviews">
              ({product.reviewsCount ?? 0} reviews)
            </span>
          </div>
        )}
        <div className="product-card-price">
          <span className="price-current">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <>
              <span className="price-old">${product.oldPrice.toFixed(2)}</span>
              {savings > 0 && (
                <span className="price-savings">{t('youSave')} ${savings.toFixed(2)}</span>
              )}
            </>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className={`product-card-options ${errorColor ? 'error' : ''}`}>
            <span className="options-label">{t('availableColors')}:</span>
            <div className="color-options">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  type="button"
                  className={`color-option ${color.value ? 'color-swatch' : 'color-chip'} ${selectedColor === idx ? 'selected' : ''}`}
                  onClick={() => { setSelectedColor(idx); setErrorColor(false); }}
                  style={color.value ? { backgroundColor: color.value } : undefined}
                  title={color.name}
                  aria-label={color.name}
                >
                  {!color.value && <span>{color.name}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
        {product.sizes && product.sizes.length > 0 && (
          <div className={`product-card-options ${errorSize ? 'error' : ''}`}>
            <span className="options-label">{t('availableSizes')}:</span>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => { setSelectedSize(size); setErrorSize(false); }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        {(errorSize || errorColor) && (
          <p className="product-card-error">
            {errorSize && errorColor
              ? t('selectBoth')
              : errorSize
                ? t('selectSize')
                : t('selectColor')}
          </p>
        )}
        <button
          type="button"
          className="product-card-add-btn"
          onClick={handleAddToCart}
          aria-label={t('addToCart')}
        >
          <HiOutlineShoppingBag />
          {t('addToCart')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
