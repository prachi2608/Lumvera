import React from 'react';

interface InfiniteScrollerProps {
  children: React.ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({ children, speed = 'medium' }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex animate-scroll"
        style={{
          animation: `scroll ${speed === 'slow' ? '30s' : speed === 'fast' ? '10s' : '20s'} linear infinite`,
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default InfiniteScroller;
