import { Quill } from 'react-quill';

export default function Iletisim() {
  let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='container max-w-7xl my-10 mx-auto'>
      <div className='w-full h-full rounded-md bg-white shadow-md p-5'>
        <h1 className='font-bold text-3xl w-10 tracking-wide mb-5'>İletişim</h1>
        <p>
          İletişim Bilgileri Akyazı mah. 795 sk. Yavuz plaza kat: 2 no:2
          Altınordu/Ordu
        </p>
        <p>0452 250 40 44 </p>
        <p>0545 307 43 30</p>
      </div>
    </div>
  );
}
