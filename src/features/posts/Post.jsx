// should display only the name, price, and description

function Post({ post }) {
    return (
        <li>
            <h2>{post.title}</h2> {/* selecting post at title(title of post) in an h2 tag */}
            <p>{post.price}</p> {/* selecting post at price(price of post) in p tag */}
            <p>{post.description}</p> {/* selecting post at description(description of post) in p tag */}
        </li>
    )
}

export default Post