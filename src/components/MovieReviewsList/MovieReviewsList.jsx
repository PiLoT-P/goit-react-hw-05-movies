const MovieReviewsList = ({reviews}) => {
    return (
        <ul>
            {reviews.map((item) => (
                <li key={item.id}>
                    <p>Autor:{item.author}</p>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default MovieReviewsList;