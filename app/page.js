import Image from 'next/image';
import logo from '../public/SB Logo.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
      <div className="flex flex-col items-center text-center px-4">
        <div className="mb-8">
          <Image src={logo} alt="Sea Breeze Ship Management Logo" width={200} height={200} />
        </div>
        <h1 className="text-5xl font-bold mb-4 animate-bounce" style={{ color: '#105387' }}>Coming Soon</h1>
        <p className="text-xl mb-8" style={{ color: '#105387' }}>We are working hard to bring you our new website.</p>
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 transform -skew-y-6 origin-bottom-right" style={{ background: '#105387' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-16 transform -skew-y-6 origin-bottom-right" style={{ background: '#548aae' }}></div>
      <p></p>
    </div>
  );
}