'use client';
import { useState, useEffect } from 'react';

const AdminPage = () => {
    const [auth, setAuth] = useState(false);
    const [password, setPassword] = useState('');
    const [files, setFiles] = useState<FileList | null>(null);
    const [uploadedImages, setUploadedImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedPassword = localStorage.getItem('adminPassword');
        if (storedPassword === process.env.ADMIN_PASSWORD) {
            setAuth(true);
            fetchImages();
        }
    }, []);

    const handleLogin = () => {
        if (password === process.env.ADMIN_PASSWORD) {
            localStorage.setItem('adminPassword', password);
            setAuth(true);
            fetchImages();
        } else {
            console.log(password);
            console.log(process.env.ADMIN_PASSWORD);
            alert('Incorrect password');
        }
    };

    const fetchImages = async () => {
        const response = await fetch('/api/r2Files');
        const data = await response.json();
        setUploadedImages(data);
    };

    const handleUpload = async () => {
        if (!files) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('file', files[0]);

        try {
            const response = await fetch('/api/r2Files', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                fetchImages();
            } else {
                console.error('Error uploading file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (key: string) => {
        try {
            const response = await fetch(`/api/r2Files?key=${key}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchImages();
            } else {
                console.error('Error deleting file');
            }
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    if (!auth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl mb-4">Admin Login</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        className="border p-2 mb-4 w-full"
                    />
                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 text-white p-2 w-full"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
            <div className="mb-4">
                <input
                    type="file"
                    onChange={(e) => setFiles(e.target.files)}
                    className="border p-2"
                />
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 text-white p-2 ml-2"
                    disabled={loading}
                >
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">Uploaded Images</h2>
                <ul>
                    {uploadedImages.map((image) => (
                        <li key={image.Key} className="mb-2">
                            <img
                                src={`https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${process.env.R2_BUCKET_NAME}/${image.Key}`}
                                alt={image.Key}
                                className="w-32 h-32 object-cover"
                            />
                            <button
                                onClick={() => handleDelete(image.Key)}
                                className="bg-red-500 text-white p-2 ml-2"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPage;
