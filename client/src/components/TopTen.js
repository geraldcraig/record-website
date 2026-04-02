export default function TopTen() {
    return (
        <>
            <div>
                <h1>Top 10 Most Listened To Albums</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className='col'>
                    <div className='card' style={{"width": "200px"}}>
                        {/*<a href='album.php?album_id=$albumid'><img className='card-img-top' src="artwork" alt='Card Image' style='width: 100%'/></a>*/}
                        <div className='card-body'>
                            <h4>album</h4>
                            <h4>artist</h4>
                            <h4>No. of Plays: played</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}