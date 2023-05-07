import "./Posts.css";
import React, { useState } from "react";
import { createPost } from "../api/helpers";

const ListingForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imageData, setImageData] = useState(null);
    const [contactType, setContactType] = useState("");
    const [contact, setContact] = useState("");
    const [contactTypeBackup, setContactTypeBackup] = useState("");
    const [content_backup, setContact_backup] = useState("");
    const [report_count, setReport_count] = useState(0);
    const [location, setLocation] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [userId, setUserId] = useState(0)

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        
        // Check if the selected file is an image
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
      
          reader.onload = (e) => {
            setImageData(e.target.result);
          };
      
          reader.readAsDataURL(file);
        }
      };
      

    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentDate = new Date();
        const postData = {
            name,
            description,
            price,
            image: imageData,
            contactType,
            contact,
            contactTypeBackup,
            contact_backup: content_backup,
            report_count,
            created_at: currentDate.toISOString(),
            location,
            categoryId,
            isActive,
            userId
        };

        try {
            const response = await createPost(postData);
            console.log(response)
        } catch(error) {
            console.log(error)
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="contact-type">Contact Type:</label>
                <input type="text" id="contact-type" value={contactType} onChange={(e) => setContactType(e.target.value)} />
            </div>
            <div>
                <label htmlFor="contact">Contact:</label>
                <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <div>
                <label htmlFor="contact-type-backup">Backup Contact Type:</label>
                <input type="text" id="contact-type-backup" value={contactTypeBackup} onChange={(e) => setContactTypeBackup(e.target.value)} />
            </div>
            <div>
                <label htmlFor="contact-backup">Backup Contact:</label>
                <input type="text" id="contact-backup" value={content_backup} onChange={(e) => setContact_backup(e.target.value)} />
            </div>
            <div>
                <label htmlFor="report-count">Report Count:</label>
                <input type="number" id="report-count" value={report_count} onChange={(e) => setReport_count(e.target.value)} />
            </div>

            <div>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label htmlFor="category-id">Category ID:</label>
                <input type="number" id="category-id" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
            </div>
            <div>
                <label htmlFor="is-active">Is Active:</label>
                <input type="checkbox" id="is-active" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
            </div>
            <div>
                <label htmlFor="user-id">User ID:</label>
                <input type="number" id="user-id" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <label htmlFor="image-upload">Upload an image:</label>
                <input type="file" id="image-upload" onChange={handleImageUpload} />
            </div>
            <button type="submit">Create listing</button>
        </form>

    );

};

export default ListingForm;
