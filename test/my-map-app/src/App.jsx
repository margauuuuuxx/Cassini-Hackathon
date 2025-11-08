import React, { useState } from 'react';
import { Lock, Menu, Map, List, User, Navigation } from 'lucide-react';

const LocationPoint = ({ x, y, count, bg }) => (
  <div 
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -100%)' }}
  >
    {/* Location bubble container */}
    <div className="relative">
      {/* Rounded rectangle bubble */}
      <div className="relative w-20 h-24 rounded-3xl overflow-hidden shadow-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 bg-gray-400 bg-opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <Lock size={20} className="mb-1" />
          <div className="text-xs font-medium text-center px-2 leading-tight">
            {count} friends posted here
          </div>
        </div>
      </div>
      {/* Pointer/tail */}
      <div 
        className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2"
        style={{
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '10px solid rgba(156, 163, 175, 0.7)',
        }}
      />
    </div>
  </div>
);

export default function MapInterface() {
  const [activeTab, setActiveTab] = useState('map');

  const locations = [
    { x: 30, y: 25, count: 5, bg: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200' },
    { x: 55, y: 40, count: 3, bg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200' },
    { x: 45, y: 55, count: 8, bg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200' },
    { x: 70, y: 70, count: 2, bg: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=200' },
    { x: 25, y: 75, count: 4, bg: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200' },
  ];

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
            <div>
              <div className="font-semibold text-gray-900">@margauuuuux</div>
              <div className="text-sm text-gray-500">42 pictures</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Toggle */}
        <div className="flex justify-center gap-2">
          <button className="px-6 py-2 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-medium">
            Carte
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium">
            Liste
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-gray-100">
        {/* Simplified map background */}
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=4.3450%2C50.8250%2C4.3950%2C50.8550&layer=mapnik"
          className="absolute inset-0 w-full h-full border-0"
          style={{ filter: 'brightness(1.15) saturate(0.5) contrast(0.85) opacity(0.7)' }}
        />
        
        {/* Subtle overlay for cleaner appearance */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Location Points */}
        {locations.map((loc, idx) => (
          <LocationPoint key={idx} {...loc} />
        ))}

        {/* Floating menu button */}
        <button className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Current location indicator */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-xl" />
          <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-around">
        <button 
          onClick={() => setActiveTab('list')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'list' ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <List size={28} strokeWidth={2.5} />
        </button>
        
        <button 
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'map' ? 'text-red-500' : 'text-gray-400'}`}
        >
          <Map size={32} strokeWidth={2.5} fill={activeTab === 'map' ? 'currentColor' : 'none'} />
        </button>
        
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'profile' ? 'bg-gray-900' : 'bg-gray-300'}`}>
            <User size={24} className="text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}