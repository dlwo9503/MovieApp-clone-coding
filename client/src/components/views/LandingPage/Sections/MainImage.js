import { PromiseProvider } from 'mongoose';
import React from 'react';

function MainImage(props) {
    return (
        <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition:'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}> // 메인 이미지
                    <h2 style={{color: 'white'}}>{props.title}</h2> // 영화 제목
                    <p style={{ color: 'white', fontSize: '1rem'}}>{props.text}</p> // 영화 내용
                </div>
            </div>
        </div>
    )
}

export default MainImage