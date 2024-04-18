import React, { useState } from 'react';
import '../css/ProfileList.css'; // Import CSS file
import ProfileCard from './ProfileCard';

function ProfileList() {
  // Dummy profile data
  const profiles = [
    { 
      id: 1, 
      name: 'Urjita Chaudhari', 
      description: 'Academically bright Electrical Engineer and persuing MBA from IIM Indore.', 
      photo: 'https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg',
      address: 'Mumbai', 
      lat: 18.68, 
      lng: 73.9 ,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571458558!2d72.71637318028606!3d19.082177512541435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713443345435!5m2!1sen!2sin`
    
      
    },
    { 
      id: 2, 
      name: 'BhumiKa Wasu', 
      description: 'Very passsionate about work and currently working in HR department .',
      photo: 'https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg',
      address: 'Pune', 
      lat: 18.669, 
      lng: 73.8866,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30241.842230777336!2d73.7195879542113!3d18.653659677790273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f949f91c45%3A0xd75c57f09a936dc9!2sRavet%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713443877932!5m2!1sen!2sin&quot; width=&quot;600&quot; height=&quot;450&quot; style=&quot;border:0;&quot; allowfullscreen=&quot;&quot; loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;&gt;&lt;/iframe&gt;
      `
    },
    { 
      id: 3, 
      name: 'Adyant Wasu', 
      description: 'A creative Game Developer who has been working in the industry for a long time.',
      photo: 'https://media.istockphoto.com/id/955158514/photo/confident-ceo-talking-about-company-success-strategy.jpg?s=612x612&w=0&k=20&c=V5uNpcECrfY8jazEaelq6DVHPoRx4M67-tYbiV-RKK8=',
      address: 'London', 
      lat: 18.675, 
      lng: 73.893,
      mapUrl:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.645968475709!2d-0.1444649235304209!3d51.50136397181184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace!5e0!3m2!1sen!2sin!4v1713444016138!5m2!1sen!2sin&quot; width=&quot;600&quot; height=&quot;450&quot; style=&quot;border:0;&quot; allowfullscreen=&quot;&quot; loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;&gt;&lt;/iframe&gt;
      `
    },
    { 
      id: 4, 
      name: 'Akshay Gawande', 
      description: 'Java developer good at time management.',
      photo: 'https://img.freepik.com/free-photo/customer-service-cute-brunette-guy-suit-with-laptop-happy-touching-chin_140725-164987.jpg',
      address: 'Wakad Pune', 
      lat: 18.671, 
      lng: 73.895,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30251.74534254547!2d73.74055130411874!3d18.59800078065368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97aaf571bed%3A0xc67346ba5a76673!2sWakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713444104469!5m2!1sen!2sin&quot; width=&quot;600&quot; height=&quot;450&quot; style=&quot;border:0;&quot; allowfullscreen=&quot;&quot; loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;&gt;&lt;/iframe&gt;
      `
    }
  ];

  const [openMapId, setOpenMapId] = useState(null); // State to track the ID of the profile whose map is open

  const handleToggleMap = (profileId) => {
    setOpenMapId(profileId === openMapId ? null : profileId); // Toggle the openMapId state
  };

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} isOpenMap={profile.id === openMapId} onToggleMap={handleToggleMap} />
      ))}
    </div>
  );
}

export default ProfileList;
