"use client"

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircleBar({
  value = 25,
  text = '25%',
  title = 'Texnik topshiriq tayyorlash',
  pathColor = '#0B4619',
  textColor = '#333333',
  trailColor = '#E5E5E5',
  titleStyle = {},
  width = 100,
  height = 100,
  textSize = 16,
  strokeWidth = 8,
  showTitle = true
}) {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width, height }}>
        <CircularProgressbar
          value={value}
          text={text}
          strokeWidth={strokeWidth}
          styles={buildStyles({
            pathColor: pathColor,
            textColor: textColor,
            trailColor: trailColor,
            textSize: textSize,
            strokeLinecap: 'round'
          })}
        />
      </div>
      
      {showTitle && (
        <p 
          className="text-center mt-2" 
          style={{ 
            color: textColor, 
            fontSize: '14px',
            ...titleStyle 
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
}

// Example usage:
// <CircleBar 
//   value={25} 
//   text="25%" 
//   title="Texnik topshiriq tayyorlash"
//   pathColor="#0B4619"
//   textColor="#333333"
//   trailColor="#E5E5E5"
//   width={100}
//   height={100}
//   textSize={16}
//   strokeWidth={8}
//   showTitle={true}
//   titleStyle={{ fontWeight: 'bold' }}
// />