import React from 'react';

interface socialMediaProps{
  link: string;
  icon: string;
}

interface OurTeamProps {
  img: string;
  name: string;
  socialMedias: socialMediaProps[];
  office: string;
}

function OurTeam({ img, name, socialMedias, office }: OurTeamProps) {
  return (
    
      <div className='flex flex-col justify-center items-center gap-y-2'>
      <div className='w-24 h-24'>
        <div className='w-24 h-24 flex justify-center items-center bg-cover grayscale rounded-full shadow-lg shadow-gray-900' style={{ backgroundImage: `url(${img})` }}></div>
      </div>
      <p className='text-xl font-medium'>{name}</p>
      <div className='flex gap-2'>
        {socialMedias.map((socialMedia, index) => {
          return(
            <a href={socialMedia.link}><img className='w-4 h-4' src={socialMedia.icon} alt="" /></a>
          )
        })}
      </div>
      <p className='font-normal'>{office}</p>
      </div>
   
  );
}

export default OurTeam;
