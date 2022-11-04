import "./card.css";
const Card = (props)=> {
    const arrayBufferToBase64=(buffer)=> {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    var base64Flag = 'data:image/jpeg;base64,';
    var imageStr = arrayBufferToBase64(props.postInfo.postImage.data.data);
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{props.postInfo.name}</div>
                        <div className="card-header__place">{props.postInfo.location}</div>
                    </div>
                    <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={base64Flag+imageStr} alt="place"/>
                </section>
                <section className="card-actions">
                    <span>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </span>
                    <span className="post-date">
                        {props.postInfo.date}
                    </span>
                </section>
                <section className="likes">
                    {props.postInfo.like} likes
                </section>
                <section className="description">
                    {props.postInfo.description}
                </section>
            </section>
        </>
    );
}
export default Card;