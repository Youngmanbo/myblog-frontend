import "./post_list.css"

const post_list = function(probs){

}

export default async function Home() {
  const base_url = 'http://127.0.0.1:8000/';
  const resp = await fetch(base_url + 'post/');
  const posts = await resp.json();
  const firstPost = posts[0];
  

  return (
    <body>
      <section className='first-post-box'>
        <div className='container'>
              <div className='post-info-box' key={firstPost.post_id}>
                <h3>{firstPost.post_title}</h3>
                <p>{firstPost.post_content}</p>
                <button>Click</button>
              </div>
              <div className='thumbnail-img'>
                <img src={firstPost.post_image}></img>
              </div>
            </div>
      </section>
      <section className='post-box'>
        <div className='container'>
          
        </div>
      </section>
    </body>
  );
}
