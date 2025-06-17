import React, { useState } from 'react';
import axios from 'axios';

const NewProgramPage = () => {
    const [formData, setFormData] = useState({
        focus: 'weightlifting',  // Default value for dropdown
        competition: false,  // Boolean field
        startDate: '',
        duration: '14',  // Default duration option
        emphasis: 'General Preparation',  // Default emphasis option
        compName: '',  // Competition Name
        compDate: '',  // Competition Date
        priority: '',   // Priority
        customDuration: '' // Custom duration field
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle auto-formatting for startDate
        if (name === 'startDate') {
            let formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
            if (formattedValue.length > 2) {
                formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
            }
            if (formattedValue.length > 5) {
                formattedValue = formattedValue.slice(0, 5) + '/' + formattedValue.slice(5);
            }
            setFormData({ ...formData, [name]: formattedValue });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalDuration = formData.compDate ? null : (formData.duration === 'Custom' ? formData.customDuration : formData.duration);
        try {
            const response = await axios.post('/api/programs/create/', { ...formData, duration: finalDuration });
            alert('Program created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating program:', error);
        }
    };

    return (
        <div>
            <h1>Create New Program</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Focus:</label>
                    <select
                        name="focus"
                        value={formData.focus}
                        onChange={handleChange}
                        required
                    >
                        <option value="weightlifting">Weightlifting</option>
                    </select>
                </div>
                <div>
                    <label>Competition:</label>
                    <input
                        type="checkbox"
                        name="competition"
                        checked={formData.competition}
                        onChange={handleChange}
                    />
                </div>
                {formData.competition && (
                    <>
                        <div>
                            <label>Competition Name:</label>
                            <input
                                type="text"
                                name="compName"
                                value={formData.compName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Competition Date (MM/DD/YYYY):</label>
                            <input
                                type="text"
                                name="compDate"
                                value={formData.compDate}
                                onChange={handleChange}
                                placeholder="MM/DD/YYYY"
                                maxLength="10"
                                required
                            />
                        </div>
                        <div>
                            <label>Priority (5 being top priority):</label>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                required
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                        </div>
                    </>
                )}
                <div>
                    <label>Start Date (MM/DD/YYYY):</label>
                    <input
                        type="text"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        placeholder="MM/DD/YYYY"
                        maxLength="10"
                        required
                    />
                </div>
                {!formData.compDate && (
                    <div>
                        <label>Duration (recommend 14, 18, or 22 weeks):</label>
                        <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                        >
                            <option value="14">14</option>
                            <option value="18">18</option>
                            <option value="22">22</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                )}
                {!formData.compDate && formData.duration === 'Custom' && (
                    <div>
                        <label>Custom Duration (4-24 weeks):</label>
                        <input
                            type="number"
                            name="customDuration"
                            value={formData.customDuration}
                            onChange={handleChange}
                            min="4"
                            max="24"
                            required
                        />
                    </div>
                )}
                <div>
                    <label>Emphasis:</label>
                    <select
                        name="emphasis"
                        value={formData.emphasis}
                        onChange={handleChange}
                        required
                    >
                        <option value="General Preparation">General Preparation</option>
                        <option value="Specific Preparation">Specific Preparation</option>
                        <option value="Competition">Competition</option>
                    </select>
                </div>
                <button type="submit">Create Program</button>
            </form>
        </div>
    );
};

export default NewProgramPage

// test gitttttttt
