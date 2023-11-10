import React, { Component } from 'react';
import '../css/App.css';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'Заголовок відгуку 1', content: 'Тут ви можете додати текст свого першого відгуку.' },
        { id: 2, title: 'Заголовок відгуку 2', content: 'Тут ви можете додати текст свого другого відгуку.' },
        { id: 3, title: 'Заголовок відгуку 3', content: 'Тут ви можете додати текст свого третього відгуку.' },
        { id: 4, title: 'Заголовок відгуку 4', content: 'Тут ви можете додати текст свого четвертого відгуку.' },
        { id: 5, title: 'Заголовок відгуку 5', content: 'Тут ви можете додати текст свого п\'ятого відгуку.' },
        { id: 6, title: 'Заголовок відгуку 6', content: 'Тут ви можете додати текст свого першого відгуку.' },
        { id: 7, title: 'Заголовок відгуку 7', content: 'Тут ви можете додати текст свого другого відгуку.' },
        { id: 8, title: 'Заголовок відгуку 8', content: 'Тут ви можете додати текст свого третього відгуку.' },
        { id: 9, title: 'Заголовок відгуку 9', content: 'Тут ви можете додати текст свого четвертого відгуку.' },
        { id: 10, title: 'Заголовок відгуку 10', content: 'Тут ви можете додати текст свого п\'ятого відгуку.' },
        { id: 11, title: 'Заголовок відгуку 11', content: 'Тут ви можете додати текст свого першого відгуку.' },
        { id: 12, title: 'Заголовок відгуку 12', content: 'Тут ви можете додати текст свого другого відгуку.' },
        { id: 13, title: 'Заголовок відгуку 13', content: 'Тут ви можете додати текст свого третього відгуку.' },
        { id: 14, title: 'Заголовок відгуку 14', content: 'Тут ви можете додати текст свого четвертого відгуку.' },
        { id: 15, title: 'Заголовок відгуку 15', content: 'Тут ви можете додати текст свого п\'ятого відгуку.' },
        { id: 16, title: 'Заголовок відгуку 16', content: 'Тут ви можете додати текст свого першого відгуку.' },
        { id: 17, title: 'Заголовок відгуку 17', content: 'Тут ви можете додати текст свого другого відгуку.' },
        { id: 18, title: 'Заголовок відгуку 18', content: 'Тут ви можете додати текст свого третього відгуку.' },
        { id: 19, title: 'Заголовок відгуку 19', content: 'Тут ви можете додати текст свого четвертого відгуку.' },
        { id: 20, title: 'Заголовок відгуку 20', content: 'Тут ви можете додати текст свого п\'ятого відгуку.' },
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
        <h1>Reviews</h1>
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