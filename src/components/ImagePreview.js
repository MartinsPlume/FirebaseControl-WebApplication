import React from 'react'
import JuliFitLogo from '../services/DefaultValues'

function ImagePreview({ image }) {

    return (
        <div>
            {image !== null && image.preview !== undefined
                ? <img style={{width: '50vw'}} src={image.preview.url} />
                : <img style={{width: '50vw'}} src={JuliFitLogo.JuliFitLogo}/>
            }
        </div>
    )
}

export default ImagePreview