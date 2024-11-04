import React from 'react'
import AppLayout from '../layout';
import { Hero } from '@/views';
import NavigationMenus from '@/components/layout/header/index';

export default function page() {
  return (
    <div><AppLayout><NavigationMenus/><Hero/><Hero/><Hero/><Hero/></AppLayout></div>
  )
}
