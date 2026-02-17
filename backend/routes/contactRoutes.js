import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import Contact from '../models/Contact.js';

const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new contact
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const newContact = await contact.save();

    // Email Configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self (Admin)
      subject: `New Contact Form Submission from ${req.body.name}`,
      text: `
        New Contact Inquiry:
        
        Name: ${req.body.name}
        Email: ${req.body.email}
        Company: ${req.body.company || 'N/A'}
        Message: ${req.body.message}
        
        Sent from Ai Bureau Website
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('📧 Email sent successfully');
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
      // We don't fail the request if email fails, but we log it
    }

    // File Storage: Save to CSV
    try {
      const csvLine = `"${req.body.name}","${req.body.email}","${req.body.company || ''}","${req.body.message.replace(/(\r\n|\n|\r)/gm, " ")}","${new Date().toISOString()}"\n`;
      const filePath = path.join(process.cwd(), 'enquiries.csv');

      // Check if file exists to add headers
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'Name,Email,Company,Message,Date\n');
      }

      fs.appendFileSync(filePath, csvLine);
      console.log('📁 Saved to enquiries.csv');
    } catch (fileError) {
      console.error('❌ Error saving to file:', fileError);
    }

    res.status(201).json({
      message: 'Contact form submitted successfully!',
      data: newContact
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
