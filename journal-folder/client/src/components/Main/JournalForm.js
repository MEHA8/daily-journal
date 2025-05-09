import React, { useState } from 'react';

const JournalForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const journalEntry = {
      title,
      content,
    };

    try {
      const response = await fetch('http://localhost:5000/api/journal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(journalEntry),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Journal entry saved:', data);
        setTitle('');
        setContent('');
        setSuccessMessage('Journal entry saved successfully!');
        setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
      } else {
        console.log('Failed to save journal entry:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8, #a0c4f5)',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#3b82f6',
          }}
        >
          📝 New Journal Entry
        </h2>
        {successMessage && (
          <div
            style={{
              backgroundColor: '#d1fae5',
              color: '#10b981',
              padding: '10px',
              borderRadius: '5px',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '5px',
                color: '#333',
              }}
            >
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '14px',
                outline: 'none',
                transition: 'border 0.3s',
              }}
              placeholder="Enter title..."
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '5px',
                color: '#333',
              }}
            >
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '14px',
                minHeight: '150px',
                resize: 'none',
                outline: 'none',
                transition: 'border 0.3s',
              }}
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: '12px 0',
              backgroundColor: '#3b82f6',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
          >
            Save Entry
          </button>
        </form>
      </div>
    </div>
  );
};

export default JournalForm;
