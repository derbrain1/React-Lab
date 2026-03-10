import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-action';
import React from 'react';

function ReviewForm(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const offerId = useAppSelector((state) => state.currentOffer?.id);
  const reviewIsValid = rating !== '' && text.trim().length >= 50 && text.trim().length <= 300;

  const ratings = [
    { value: '5', title: 'perfect' },
    { value: '4', title: 'good' },
    { value: '3', title: 'not bad' },
    { value: '2', title: 'badly' },
    { value: '1', title: 'terribly' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewIsValid || !offerId) return;

    setIsSubmitting(true);
    try {
      await dispatch(postReviewAction({
        offerId,
        comment: text,
        rating: Number(rating)
      })).unwrap();
      
      setRating('');
      setText('');
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      
      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, title }) => (
          <React.Fragment key={value}>
            <input 
              className="form__rating-input visually-hidden" 
              name="rating" 
              value={value} 
              id={`${value}-stars`} 
              type="radio"
              checked={rating === value}
              onChange={(e) => setRating(e.target.value)}
              disabled={isSubmitting}
            />
            <label 
              htmlFor={`${value}-stars`} 
              className="reviews__rating-label form__rating-label" 
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="/img/icon-star.svg"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      
      <textarea 
        className="reviews__textarea form__textarea" 
        id="review" 
        name="review" 
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isSubmitting}
      />
      
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button 
          className="reviews__submit form__submit button" 
          type="submit" 
          disabled={!reviewIsValid || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };