import Link from "next/link"

type postsProp = {
    posts: {
        id: number,
        title: string,
        body: string
    }[]
}
function PostList({posts}: postsProp) {
    return (
      <>
        <h1>Welcome to post page</h1>
        <ul>
            {
                posts.map(post=> (
                    <div key={post.id} style={{maxWidth: '320px', margin: '0 auto', padding: '20px 15px', border: '2px solid #000', marginBottom: '15px'}}>
                        <h2>{post.title}</h2>                                                
                        <Link href={`/posts/${post.id}`}>get to detail page</Link>
                                                
                    </div>
                ))
            }
        </ul>
      </>
      
    )
  }
  
  export const getStaticProps = async()=>{
      const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await responce.json()
  
      return{
          props: {
              posts: data
          }
      }
  }
  
  export default PostList