import React from 'react'
import JuliFitLogo from '../services/DefaultValues'

function ImagePreview({ image }) {

    return (
        <div>
            {image !== null && image.preview !== undefined
                ? <img style={{width: '25vw'}} src={image.preview.url} alt='Missing picture' />
                : <img style={{width: '25vw'}} src={JuliFitLogo.JuliFitLogo} alt='Missing picture'/>
            }
        </div>
    )
}

export default ImagePreview