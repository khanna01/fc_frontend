import '@/assets/css/Movie-Modal.css'
import { useRef } from 'react'
import useOnClickOutside from '@/hooks/useOnClickOutside.js'

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef()
  const closeModal = () => setModalOpen(false)

  useOnClickOutside(ref, closeModal)

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span className="modal-close" onClick={closeModal}>
            X
          </span>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            className="modal__poster-img"
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">100% for you</span>
              {release_date ?? first_air_date}
            </p>
            <h2 className="modal__title">{title ?? name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
