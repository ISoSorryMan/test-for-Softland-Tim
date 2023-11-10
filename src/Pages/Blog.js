import React, { Component } from 'react';
import '../css/App.css';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'Заголовок посту 1', content: 'Тут ви можете додати текст свого першого посту.' },
        { id: 2, title: 'Заголовок посту 2', content: 'Тут ви можете додати текст свого другого посту.' },
        { id: 3, title: 'Заголовок посту 3', content: 'Тут ви можете додати текст свого третього посту.' },
        { id: 4, title: 'Заголовок посту 4', content: 'Тут ви можете додати текст свого четвертого посту.' },
        { id: 5, title: 'Заголовок посту 5', content: 'Тут ви можете додати текст свого п\'ятого посту.' },
        { id: 6, title: 'Заголовок посту 6', content: 'Тут ви можете додати текст свого першого посту.' },
        { id: 7, title: 'Заголовок посту 7', content: 'Тут ви можете додати текст свого другого посту.' },
        { id: 8, title: 'Заголовок посту 8', content: 'Тут ви можете додати текст свого третього посту.' },
        { id: 9, title: 'Заголовок посту 9', content: 'Тут ви можете додати текст свого четвертого посту.' },
        { id: 10, title: 'Заголовок посту 10', content: 'Тут ви можете додати текст свого п\'ятого посту.' },
        { id: 11, title: 'Заголовок посту 11', content: 'Тут ви можете додати текст свого першого посту.' },
        { id: 12, title: 'Заголовок посту 12', content: 'Тут ви можете додати текст свого другого посту.' },
        { id: 13, title: 'Заголовок посту 13', content: 'Тут ви можете додати текст свого третього посту.' },
        { id: 14, title: 'Заголовок посту 14', content: 'Тут ви можете додати текст свого четвертого посту.' },
        { id: 15, title: 'Заголовок посту 15', content: 'Тут ви можете додати текст свого п\'ятого посту.' },
        { id: 16, title: 'Заголовок посту 16', content: 'Тут ви можете додати текст свого першого посту.' },
        { id: 17, title: 'Заголовок посту 17', content: 'Тут ви можете додати текст свого другого посту.' },
        { id: 18, title: 'Заголовок посту 18', content: 'Тут ви можете додати текст свого третього посту.' },
        { id: 19, title: 'Заголовок посту 19', content: 'Тут ви можете додати текст свого четвертого посту.' },
        { id: 20, title: 'Заголовок посту 20', content: 'Тут ви можете додати текст свого п\'ятого посту.' },
      ],
      currentPage: 1,
      postsPerPage: 10,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { posts, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="Blog">
        <h1>Blog</h1>
        <div className="blog-posts">
          {currentPosts.map((post) => (
            <div className="blog-post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => this.handlePageChange(currentPage - 1)}>
              ← Prev
            </button>
          )}

          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, i) => (
            <button key={i + 1} onClick={() => this.handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}

          {currentPage < Math.ceil(posts.length / postsPerPage) && (
            <button onClick={() => this.handlePageChange(currentPage + 1)}>
              Next →
            </button>
          )}
        </div>
      </div>
    );
  }
}