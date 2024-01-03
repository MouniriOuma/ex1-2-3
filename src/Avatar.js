

function Avatar ({ title, pic, size }) {
    return (
        <div style={{margin: '20 px'}}>
            <h1>{title}</h1>
            <img 
            className="avatar"
            src={pic}
            alt={title}
            width= {size}
            height= {size}
            
            />
        </div>
    )
}

export default Avatar;