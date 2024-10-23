// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function BlogPost() {
   const [hello, setHello] = useState('변경 전')
   const [id, setId] = useState("아이디를 입력해주세요");
   const [pw, setPw] = useState("패스워드를 입력해주세요");
   const navigate = useNavigate();
/*
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);
*/

    const handleLogin = async (event) => {
        // 로그인 처리 로직을 구현합니다.
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        alert("id=="+id +"///////"+"pw=="+pw);
        const response =     axios.post('/api/login',{"id":id})


        axios(
            {
              url: '/api/Join?id=11',
              method: 'post',
              data: {"id":id}               
            }
          )

        .then(response => setHello(response.data), alert(hello) )
        .catch(error => console.log(error))

        
    }

    function goHome (){  
        navigate('/home');  
    }

    return (
        <div className="d-flex flex-column">
          <main className="flex-shrink-0">
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-5">
                <a className="navbar-brand" href="/">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                        <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portfolio
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                        <li><a className="dropdown-item" href="/portfolio-overview">Portfolio Overview</a></li>
                        <li><a className="dropdown-item" href="/portfolio-item">Portfolio Item</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    
            {/* Page Content */}
            <section className="py-5">
              <div className="container px-5 my-5">
                <div className="row gx-5">
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center mt-lg-5 mb-4">
                      <img className="img-fluid rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                      <div className="ms-3">
                        <div className="fw-bold">Valerie Luna</div>
                        <div className="text-muted">News, Business</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    {/* Post content */}
                    <article>
                      <header className="mb-4">
                        <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                        <div className="text-muted fst-italic mb-2">January 1, 2023</div>
                        <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                        <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                      </header>
                      <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                      <section className="mb-5">
                        <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind...</p>
                        <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
                        <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them...</p>
                      </section>
                    </article>
                    {/* Comments section */}
                    <section>
                      <div className="card bg-light">
                        <div className="card-body">
                          <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div className="ms-3">
                              <div className="fw-bold">Commenter Name</div>
                              If you're going to lead a space frontier, it has to be government...
                            </div>
                          </div>
                          <div className="d-flex mb-4">
                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div className="ms-3">
                              <div className="fw-bold">Commenter Name</div>
                              When you put money directly to a problem, it makes a good headline.
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Footer */}
            <footer className="bg-dark py-4 mt-auto">
              <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                  <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                  <div className="col-auto">
                    <a className="link-light small" href="#!">Privacy</a>
                    <span className="text-white mx-1">&middot;</span>
                    <a className="link-light small" href="#!">Terms</a>
                    <span className="text-white mx-1">&middot;</span>
                    <a className="link-light small" href="#!">Contact</a>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      );
}

export default BlogPost;