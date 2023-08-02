import { Quill } from 'react-quill';

export default function Iletisim() {
  let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='container max-w-7xl my-10 mx-auto'>
      <div className='w-full h-full rounded-md bg-white shadow-md p-5'>
        <h1 className='font-bold text-3xl w-10 tracking-wide mb-5'>İletişim</h1>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <div className='flex flex-col gap-5'>
              <form className='flex flex-col gap-2'>
                <label htmlFor='ad' className='font-semibold'>
                  Adınız ve Soyadınız
                </label>
                <input
                  type='text'
                  name='ad'
                  id='ad'
                  className='border border-gray-300 rounded-md p-2'
                  disabled
                />

                <label htmlFor='email' className='font-semibold'>
                  E-Posta Adresiniz
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='border border-gray-300 rounded-md p-2'
                  disabled
                />

                <label htmlFor='telefon' className='font-semibold'>
                  Telefon Numaranız
                </label>
                <input
                  type='tel'
                  name='telefon'
                  id='telefon'
                  className='border border-gray-300 rounded-md p-2'
                  disabled
                />

                <label htmlFor='mesaj' className='font-semibold'>
                  Mesajınız
                </label>
                <textarea
                  name='mesaj'
                  id='mesaj'
                  className='border border-gray-300 rounded-md p-2'
                  disabled
                />

                <button
                  type='submit'
                  className='bg-[#333] text-white rounded-md p-2 font-semibold cursor-not-allowed'
                  disabled
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            {/* Address area start */}
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Telefon Numarası</h1>
                <p>
                  <a href='tel:+904522504044'>0 (452) 250 40 44</a>
                </p>
                <p>
                  <a href='tel:+905453074330'>0 (545) 307 43 30</a>
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>E-Posta Adresi</h1>
                <p>fatih@drmehmetfatihkinik.com</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Adres</h1>
                <p>Akyazı Mah. 795 Sk. Yavuz Plaza Kat:2 No:2 Altınordu/Ordu</p>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1506.051956091772!2d37.9045043!3d40.9792054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d02970aeec31abf%3A0x8c87c992945f5ff9!2sUzm.%20Dr.%20Mehmet%20Fatih%20K%C4%B1n%C4%B1k!5e0!3m2!1str!2str!4v1691008945969!5m2!1str!2str'
                  width='600'
                  height='450'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='w-full h-96'
                ></iframe>
              </div>
            </div>

            {/* Address area end */}
          </div>
        </div>
      </div>
    </div>
  );
}
