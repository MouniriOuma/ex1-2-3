

function Card ({ title, children }) {
    return (
        <div style={{margin: '20 px'}}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Card;