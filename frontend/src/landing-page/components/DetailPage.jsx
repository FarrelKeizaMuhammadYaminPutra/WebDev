import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import { useParams } from 'react-router-dom';
import AllActor from './AllActor'; 
import Footer from "./footer/Footer.jsx";

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [comments, setComments] = useState([]); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [newComment, setNewComment] = useState({
        user: '',
        rating: 1,
        text: ''
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };
    
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
    
        const reviewData = {
            movieId: id,
            user: newComment.user,
            rating: newComment.rating,
            text: newComment.text,
        };
    
        try {
            const response = await fetch(`http://localhost:5000/reviews/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewData),
            });
    
            if (response.ok) {
                alert('Review added successfully');
                const newReview = await response.json();
                setComments([...comments, newReview]);
                setNewComment({ user: '', rating: 1, text: '' });
            } else {
                const errorData = await response.json(); // Cetak pesan error dari server
                console.error('Failed to add review:', errorData);
                alert(`Failed to add review: ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error adding review:', error);
            alert('Error adding review');
        }
    };    

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/check-auth", {
                    credentials: "include", // Untuk mengirim cookie
                });
                const data = await response.json();
                if (data.success) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Error checking auth:", error);
                setIsLoggedIn(false);
            }
        };
    
        checkAuth();
    }, []);


    useEffect(() => {
        // Ambil data film dari landing
        fetch(`http://localhost:5000/landing/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Cek data yang diterima dari landing
                setMovie(data); // Data film, aktor, genre, review
                setComments(data.reviews); // Isi review dari response landing
            })
            .catch((err) => console.error('Error fetching movie:', err));
    }, [id]);

    const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1]; 
        return `https://www.youtube.com/embed/${videoId}`; 
    };
      
    if (!movie) {
        return <h2>Loading...</h2>; 
    }

    return (
        <div className="myDP">
            <Container className="text-white">
                <Row className="d-flex flex-wrap align-items-start">
                    <Col xs={7} sm={6} md={4} className="d-flex justify-content-center align-items-start mt-5">
                        <img
                            src={movie.poster} 
                            style={{ width: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                            alt="Movie Poster"
                        />
                    </Col>
                    <Col xs ={5} sm={6} md={8}>
                        <div style={{ marginTop: '50px' }}>
                            <h1 style={{ fontSize: '35px', fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>{movie.title}</h1>

                            <div style={{ marginTop: '30px' }}>
                                <strong>Synopsis:<br /> </strong>{movie.synopsis}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Year: </strong>{movie.year}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Genre: </strong>{movie.genres.join(', ')} 
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Rating: </strong>{movie.rating}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Status: </strong>{movie.status}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Country: </strong>{movie.countries ? movie.countries.join(', ') : 'Tidak ada negara terkait'}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="review-title mb-4">Trailer</h2>
                        <div style={{ width: "100%", height: "400px" }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl(movie.trailer)}
                                title="Movie Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={12}>
                        <h2 className="review-title mb-4">Actors</h2>
                        {movie.actors && movie.actors.length > 0 ? (
                            <AllActor actors={movie.actors} />
                        ) : (
                            <p>Belum ada aktor yang terkait.</p> 
                        )}
                    </Col>
                </Row>

                {/* Bagian Review */}
                <Row className="mt-5">
                    <Col xs ={12} md={12}>
                        <h2 className="review-title mb-4">Reviews</h2> 
                        {comments && comments.length > 0 ? (
                            comments.map((review, index) => (
                                <div key={index} style={{
                                    marginBottom: "10px", 
                                    color: '#cccccc',
                                    backgroundColor: review.isNew ? '#333333' : 'transparent', 
                                    padding: review.isNew ? '10px' : '0',
                                    border: review.isNew ? '2px solid #FFD700' : 'none'
                                }}>
                                    <strong style={{ color: "white" }}>{review.user || review.author}</strong> - {review.date || 'N/A'}
                                    <br />
                                    {review.text || review.content}
                                    <br />
                                    <span style={{ color: "gold" }}>{'★'.repeat(review.rating)}</span>
                                </div>
                            ))
                        ) : (
                            <p>Belum ada review.</p>
                        )}
                    </Col>
                </Row>

                {/* Tambah Review */}
                {isLoggedIn ? (
                    <Row className="mb-4 mt-4">
                        <Col md={12}>
                            <div className="bg-dark text-white p-3 mb-4">
                                <h4 className='mb-4'>Add Your Review!</h4>
                                <Form onSubmit={handleCommentSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter Your Name" 
                                            name="user"
                                            value={newComment.user}
                                            onChange={handleInputChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control 
                                            as="select"
                                            name="rating"
                                            value={newComment.rating}
                                            onChange={handleInputChange}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(star => (
                                                <option key={star} value={star}>{star} Star</option>
                                            ))} 
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicThoughts">
                                        <Form.Label>Your Review</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            name="text"
                                            value={newComment.text}
                                            onChange={handleInputChange} 
                                        />
                                    </Form.Group>

                                    <Button variant="warning" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <p style={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }} className='mt-4'>Please log in to add a review.</p>
                )}

                <Footer/>
            </Container>
            
        </div>
    );
};

export default DetailPage;
