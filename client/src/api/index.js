import axios from 'axios';

const url =  'https://practicedeployreact.onrender.com';

// Existing receipt-related API calls
export const fetchReceipts = () => axios.get(`${url}/receipts`);
export const createReceipt = (newReceipt) => axios.post(`${url}/receipts`, newReceipt);
export const updateReceipt = (id, updatedReceipt) => axios.patch(`${url}/receipts/${id}`, updatedReceipt);
export const deleteReceipt = (id) => axios.delete(`${url}/receipts/${id}`);
export const assignItemToUser = (receiptId, user, item) => axios.patch(`${url}/receipts/${receiptId}/assign`, { user, item });
export const updateReceiptSplit = (id, splitData) => axios.patch(`${url}/receipts/${id}/split`, splitData);

// New member-related API calls
export const fetchMembers = () => axios.get(`${url}/members`);
export const createMember = (name) => axios.post(`${url}/members`, { name });

// Authorization API calls
export const signup = (name, email, password, confirmPassword) => axios.post(`${url}/api/auth/signup`, { name, email, password, confirmPassword });
export const verifyEmail = (userId, otp) => axios.post(`${url}/api/auth/verifyOTP`, { userId, otp });
export const sendOTPVerificationEmail = (email) => axios.post(`${url}/api/auth/sendOTP`, { email });
export const login = (credentials) => axios.get(`${url}/api/auth/login`, {
        headers: { Authorization: `Basic ${credentials}` } });
export const sendChangePassword = (email) => axios.post(`${url}/api/auth/forgot-password`, { email });
export const verifyChangePassword = (resetCode) => axios.post(`${url}/api/auth/verify-reset-password`, { resetCode });
export const resetPassword = (password, confirmPassword) => axios.post(`${url}/api/auth/reset-password`, { password, confirmPassword });
export const verifyToken = (token) => axios.get(`${url}/api/auth/verify-token`, {
    headers: { Authorization: `Bearer ${token}` } });