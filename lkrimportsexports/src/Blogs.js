import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Blogs.css';
import blogimage1 from './images/blogimage1.png';
import blogimage2 from './images/blogimage2.png';
import blogimage3 from './images/blogimage3.png';
import blogimage4 from './images/blogimage4.png';


const Blogs = () => {

    const blogs = [
        {
          title: 'Chinese Imports of Contemporary Office Furniture',
          image: blogimage1,
          description: 'Purchasing office furniture from China can be a game-changer for larger businesses looking to furnish their workspaces in a contemporary and fashionable manner.  With "We Do Import" as your trustworthy vendor,',
          link: '/blogs/office-furniture',
        },
        {
          title: 'Bringing in dining tables and kitchen furnishings from China',
          image: blogimage2,
          description: 'Families congregate in the kitchen and dining area of every home to share meals and make treasured memories.  To design a room that is both fashionable and useful,',
          link: '/blogs/dining-kitchen',
        },
        {
          title: "Finding China's Finest Hotel Furnishings",
          image: blogimage3,
          description: 'When visiting a hotel, Chinese hotel furnishings are a crucial part of the visitor experience.  Visitors anticipate that their lodgings will be cosy, practical,',
          link: '/blogs/hotel-furnishings',
        },
        {
          title: 'Popular Electronic Products',
          image: blogimage4,
          description: 'The electronics industry is one of the most dynamic and fast-growing sectors in global trade. From smartphones and smartwatches to semiconductors.',
          link: '/blogs/electronics',
        },
    ];
    return (
        <>
           <div className="container my-5">
            <h2 className="text-center blog-heading">Bring in Blogs & Guides</h2>
            <div className="row">
                {blogs.map((blog, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card shadow-sm border-0 blog-card">
                            <img src={blog.image} className="card-img-top blog-image" alt={blog.title} />
                            <div className="card-body">
                                <h5 className="card-title blog-title text-start">{blog.title}</h5>
                                <p className="card-text blog-text text-start">{blog.description}</p>
                                <div className="blog-button text-center">
                                  <Link to={blog.link}>
                                  <button className="btn blog-learnmore">Learn More</button>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
      </>
    )
}

export default Blogs;