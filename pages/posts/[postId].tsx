
function postDetail() {
    return (
        <>

        </>
    )
}
type post = {
    id: string
}
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    return {
        paths: [
            posts.map((post: post) => {
                return {
                    params: {
                        postId: post.id
                    }
                }
            })
            // {
            //     params: {postId: '1'},
            // },
            // {
            //     params: {postId: '2'},
            // },
            // {
            //     params: {postId: '3'},
            // }
        ],
        fallback: false
    }
}
type context = {
    params: {
        postId: string
    }
}
export async function getStaticProps(context: context) {
    const { params } = context
    console.log(params);

    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await responce.json();

    console.log(data);
    return {
        props: {
            post: data
        }
    }
}

export default postDetail