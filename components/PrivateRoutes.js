import React from 'react'
import Link from 'next/link';
import useAuthStore from '../store/auth';
import Router from 'next/router';

const PrivateRoutes = ({ children }) => {
    const { user } = useAuthStore()
  return user ? children : <Router to="/auth"/>
}

export default PrivateRoutes