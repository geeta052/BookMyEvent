import React, { useState } from 'react';
import './AdminLogin.css';

const Admin = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        secondaryEmail: '',
        password: '',
        twoFactorCode: '',
        phoneNumber: '',
        address: '',
        profilePicture: null,
        verificationDocument: null,
        preferences: {
            eventTypes: [],
            categories: []
        },
        languagePreference: '',
        accessibilitySettings: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (name.startsWith("preferences.")) {
            const [_, field] = name.split(".");
            setFormData({
                ...formData,
                preferences: {
                    ...formData.preferences,
                    [field]: Array.from(e.target.selectedOptions, option => option.value)
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleFileChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className="admin-form" onSubmit={handleSubmit}>
            <h2>Admin Registration</h2>

            {/* Basic Information Section */}
            <fieldset>
                <legend>Basic Information</legend>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

                <label>Secondary Email</label>
                <input type="email" name="secondaryEmail" value={formData.secondaryEmail} onChange={handleChange} placeholder="Secondary Email" />
            </fieldset>

            {/* Security Section */}
            <fieldset>
                <legend>Security</legend>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

                <label>Two-Factor Code</label>
                <input type="text" name="twoFactorCode" value={formData.twoFactorCode} onChange={handleChange} placeholder="Two-Factor Code" />
            </fieldset>

            {/* Contact Information Section */}
            <fieldset>
                <legend>Contact Information</legend>
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            </fieldset>

            {/* Profile Section */}
            <fieldset>
                <legend>Profile</legend>
                <label>Profile Picture</label>
                <input type="file" name="profilePicture" onChange={(e) => handleFileChange(e, 'profilePicture')} />
                <span>No file chosen</span>

                <label>Verification Document</label>
                <input type="file" name="verificationDocument" onChange={(e) => handleFileChange(e, 'verificationDocument')} />
                <span>No file chosen</span>
            </fieldset>

            {/* Preferences Section */}
            <fieldset>
                <legend>Preferences</legend>
                <label>Event Types</label>
                <input type="text" name="preferences.eventTypes" value={formData.preferences.eventTypes.join(', ')} onChange={handleChange} placeholder="Enter preferred event types..." />

                <label>Categories</label>
                <input type="text" name="preferences.categories" value={formData.preferences.categories.join(', ')} onChange={handleChange} placeholder="Enter preferred categories..." />
            </fieldset>

            {/* Settings Section */}
            <fieldset>
                <legend>Settings</legend>
                <label>Language Preference</label>
                <input type="text" name="languagePreference" value={formData.languagePreference} onChange={handleChange} placeholder="Language Preference" />

                <div className="checkbox-group">
                    <input type="checkbox" name="accessibilitySettings" checked={formData.accessibilitySettings} onChange={handleChange} />
                    <label>Accessibility Settings</label>
                </div>
            </fieldset>

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default Admin;
