import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "Discover the Beauty of Bali",
      description:
        "Explore the stunning beaches and breathtaking landscapes of Bali.",
      image: "../images/blog/bali.jpg",
      link: "#",
    },
    {
      title: "Top 10 European Destinations",
      description:
        "A guide to the best places to visit in Europe for your next adventure.",
      image: "../images/blog/barcelona.jpg",
      link: "#",
    },
    {
      title: "Unforgettable Safari in Kenya",
      description:
        "Get up close with wildlife on a thrilling safari in Kenya's national parks.",
      image: "../images/blog/kenya.jpg",
      link: "#",
    },
  ];

  return (
    <div className="container blog-section mt-100 mb-100">
      <h2 className="text-center mb-4">Our Latest Travel Blogs</h2>
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4">
            <div className="card blog-card">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a
                  href={blog.link}
                  className="theme-btn"
                  style={{ fontSize: "13px" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
