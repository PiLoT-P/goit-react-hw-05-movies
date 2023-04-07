const MovieCastList = ({casts}) => {
    return (
        <>
            <ul>
                {casts.map((item) => (
                    <li key={item.id}>
                        <img width='120px' src={'https://www.themoviedb.org/t/p/original'+item.profile_path} alt="Avater" />
                        <p>{item.name}</p>
                        <p>{item.character}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieCastList;