import React from 'react';
import { useState } from 'react';

export const Modal = () => {
    const [showModal, setShowModal] =  useState(true);

    const  handleModel = () => {
       setShowModal(false);
      }
    function success() {
        return (
            <div>Modal</div>
          )
    }
  
}
