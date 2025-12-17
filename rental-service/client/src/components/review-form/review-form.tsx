import { useState } from 'react';

function ReviewForm(): React.JSX.Element {
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');

  const reviewIsValid = rating !== '' && text.trim().length >= 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewIsValid) {
      return;
    }
    setRating('');
    setText('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      
      <div className="reviews__rating-form form__rating">
        <input 
          className="form__rating-input visually-hidden" 
          name="rating" 
          value="5" 
          id="5-stars" 
          type="radio"
          checked={rating === '5'}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use href="/img/icon-star.svg"></use>
          </svg>
        </label>

        <input 
          className="form__rating-input visually-hidden" 
          name="rating" 
          value="4" 
          id="4-stars" 
          type="radio"
          checked={rating === '4'}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use href="/img/icon-star.svg"></use>
          </svg>
        </label>

        <input 
          className="form__rating-input visually-hidden" 
          name="rating" 
          value="3" 
          id="3-stars" 
          type="radio"
          checked={rating === '3'}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use href="/img/icon-star.svg"></use>
          </svg>
        </label>

        <input 
          className="form__rating-input visually-hidden" 
          name="rating" 
          value="2" 
          id="2-stars" 
          type="radio"
          checked={rating === '2'}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use href="/img/icon-star.svg"></use>
          </svg>
        </label>

        <input 
          className="form__rating-input visually-hidden" 
          name="rating" 
          value="1" 
          id="1-star" 
          type="radio"
          checked={rating === '1'}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use href="/img/icon-star.svg"></use>
          </svg>
        </label>
      </div>
      
      <textarea 
        className="reviews__textarea form__textarea" 
        id="review" 
        name="review" 
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button 
          className="reviews__submit form__submit button" 
          type="submit" 
          disabled={!reviewIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
