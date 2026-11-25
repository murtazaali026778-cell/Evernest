
import './Pics.css'

const Pics = ({ img, title, alt }) => {
  return (
    <div className='categoryimagewrapper'>
      <img src={img} alt={alt || title} loading='lazy' />
      <div className='category-overlay'>
        <span className='category-title'>
          {title} <span className='category-arrow'>→</span>
        </span>
      </div>
    </div>
  )
}

export default Pics