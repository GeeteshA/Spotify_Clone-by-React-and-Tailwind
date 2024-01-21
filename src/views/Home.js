import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import { NavLink } from 'react-router-dom';
import {Icon} from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items =[
    {
      id: 1,
      title: 'Changes',
      artist: 'XXXTENTACION',
      image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0AnZXW-default.jpg',
      src: 'https://www.nobadsong.com/wp-content/uploads/2023/07/XXXTentacion-Changes.mp3'
    },

    {
      id: 2,
      title: 'Singara',
      artist: 'Evdeki Saat',
      image: '	https://i.scdn.co/image/ab67616d00001e024a5c5f9cd7ead4d884eae9ae',
      src:'https://mp3fix.in/files/download/id/15470'
    },

    {
      id: 3,
      title: '3:15',
      artist: 'Russ',
      image: '	https://i.scdn.co/image/ab67616d0000b27347912996054fec2a1ef78035',
      src:'https://flexyokayfile.xyz/mp32023/11/Russ_-_3_15_Breathe__FlexyOkay.com.mp3'
    },

   {
      id: 4,
      title: 'Without Me',
      artist: 'Halsey',
      image: 'https://i.scdn.co/image/ab67616d0000b273046527a9c176f7c2916f3530',
      src:'https://www.nobadsong.com/wp-content/uploads/2023/06/Halsey-Without-Me.mp3'
    },

    {
      id: 5,
      title: 'Sarkaare',
      artist: 'King',
      image: 'https://i.scdn.co/image/ab67616d00001e020d30a406e01a56cd7b217d59',
      src:'https://mp3fix.in/files/download/id/23840'
    },

    
  ]

  const singer =[
    {
      id: 1,
      position: 'Album',
      name: 'Arijit Singh',
      image: 'https://i.scdn.co/image/ab67616d0000b2737569cbe3695608074d9fd389'
    },
    {
      id: 2,
      position: 'Album',
      name: 'Halsey',
      image: 'https://i.scdn.co/image/ab67616d00001e027636e1c9e67eaafc9f49aefd'
    },
    {
      id: 3,
      position: 'Album',
      name: 'Weekend',
      image: 'https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36'
    },
    {
      id: 4,
      position: 'Album',
      name: 'Dua Lipa',
      image: 'https://i.scdn.co/image/ab67616d00001e02001d5706fddc72561f6488af'
    },
    {
      id: 5,
      position: 'Album',
      name: 'Pappon',
      image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1xiWn7-default.jpg'
    }
  ]

  const mixer =[
    {
      id: 1,
      position: 'Lady Gaga, Joji, Rachel Platten and more',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc8d3d98a1bccbe71393dbfbf/3/en/default'
    },
    {
      id: 2,
      position: 'Kaka, Maninder Buttar, Shubh and more',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd98340df62199a49a839ffce/4/en/default'
    },
    {
      id: 3,
      position: 'A.R. Rahman, Atif Aslam, Vishal-Shekhar and more',
      name: 'Daily Mix 5',
      image: '	https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb19af0ea736c6228d6eb539c/5/en/default'
    },
    {
      id: 4,
      position: 'Catch all the latest music from artists you follow',
      name: 'Relese Radar',
      image: 'https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb0261696c5df3be99da6ed3f3/en-GB'
    },
    {
      id: 5,
      position: 'Your weekly mixtape of fresh music.',
      name: 'Discover',
      image: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ=='
    }

  ]



  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Hello..</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all' id='fgrid'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
          <h4 className='text-[16px] bt:text-[14px] bt:font-semibold font-bold p-4'>Popular Songs</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center 
          shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f0000000240bb7b304baca600935f2f23" />
          <h4 className='text-[16px] bt:text-[14px] font-bold p-4'>Old is Gold</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center 
          shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b" />
          <h4 className='text-[16px] font-bold p-4'>Hot Hits</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center
           shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706c0000da845c08130b1f748ef43437ef5d" />
          <h4 className='text-[16px] font-bold p-4'>Punjabi Hits</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center 
          shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="	https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 1</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center 
          shadow-2xl justify-center
           opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf0c20db5ef6c6fbe5135d2e4/2/en/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 2</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center 
          shadow-2xl justify-center
           opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>

      </div>
      </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'Favourite Collection'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6' id='sgrid'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Radio Mix'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8' id='fgrid'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex 
                          items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link' id='span_artist'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Top Artist'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8' id='tgrid'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex
                           items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}