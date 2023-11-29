import React from 'react'
import PropTypes from 'prop-types'

const Thank = () => {
  return (
    <div className="thank-container">
      <div className="thank-gallery">
        <div className="thank-gallery1">
          <h1 className="thank-gallery-heading heading2">Thank You for making a difference!</h1>
          <span className="thank-gallery-sub-heading">
            See how our donors are making a difference
          </span>
          <div className="thank-container1">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1643321610692-719deb378a33?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxjaGFyaXR5fGVufDB8fHx8MTcwMDcyNzU4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNoYXJpdHl8ZW58MHx8fHwxNzAwNzI3NTgzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1512358958014-b651a7ee1773?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1653308409554-b8b3e2fe2496?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1485962093642-5f4386e84429?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1542884841-9f546e727bca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1643321611132-15f7b8a63347?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjaGFyaXR5fGVufDB8fHx8MTcwMDcyNzU4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxjaGFyaXR5fGVufDB8fHx8MTcwMDcyNzU4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxjaGFyaXR5fGVufDB8fHx8MTcwMDcyNzU4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1671993791134-6df684abf714?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcyNjk0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxjaGFyaXR5fGVufDB8fHx8MTcwMDcyNzU4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            ></GalleryCard3>
          </div>
        </div>
      </div>
    </div>
  )
}

const GalleryCard3 = (props) => {
    return (
      <div className={`gallery-card3-gallery-card `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card3-image"
        />
      </div>
    )
  }
  
  GalleryCard3.propTypes = {
    image_alt: PropTypes.string,
    image_src: PropTypes.string,
    rootClassName: PropTypes.string,
  }

export default Thank