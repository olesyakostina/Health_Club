import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Card, Button, Container, Alert } from "react-bootstrap";
import "./board.css";
const Board = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <div className="back__item">
                {" "}
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Profile</h2>
                                {error && (
                                    <Alert variant="danger">{error}</Alert>
                                )}
                                <strong>Email:</strong> {currentUser.email}
                                <Link
                                    to="/update-profile"
                                    className="btn btn-primary w-100 mt-3"
                                >
                                    Update Profile
                                </Link>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            <Button variant="link" onClick={handleLogout}>
                                Log Out
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default Board;
