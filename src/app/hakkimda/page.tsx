import Header from '@/components/Header';
import Quill from '@/components/Quill';
import prisma from '@/lib/db';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='container max-w-7xl my-10 mx-auto'>
      <div className='w-full h-full rounded-md bg-white shadow-md p-5 space-y-4'>
        <h1 className='font-bold text-3xl tracking-wide'>Hakkımda</h1>
        <p>
          1985 yılındaa Konya’ da doğdum. İlkokul, ortaokul ve lise eğitimimi
          Konya’ da tamamladım.
        </p>
        <p>
          2003 yılında Meram Tıp Fakültesi’ nden hekimlik diplomamı aldıktan
          sonra 2010 yılında Kocaeli Üniversitesi Çocuk ve Ergen Ruh Sağlığı ve
          Hastalıkları Anabilim Dalında uzmanlık eğitimimi tamamladım. 2015
          yılında 2 yıl Denizli Devlet hastanesinde mecburi hizmetimi
          tamamladım. 2017 – 2023 yılları arasında Ordu Devlet Hastanesi’nde 6
          yıl çalıştım.
        </p>
        <p>
          2016 yılında yılında yetişkin bilişsel davranışçı terapi teorik ve
          süpervizyon eğitimlerini tamamlayarak kognitif ve davranış terapisti
          ünvanını aldım. Bununla birlikte Maria Ceu Salvador’ dan yaklaşık 2
          yıl süren teorik ve süpervizyon içeren Çocuk ve Ergenlerde Kognitif ve
          Davranış Terapi eğitimi aldım.
        </p>
        <p>
          2022 yılında Roy Kiessling tarafından verilen EMDR I. ve II. düzey
          teorik eğitimini aldım. Bununla birlikte 2023 yılında Ann Becley
          Forest ve Annie Monaco’ dan EMDR’nin çocuklarda kullanımı ile ilgili
          workshopa katıldım.
        </p>
        2023 yılı Ağustos ayından itibaren Ordu ilinde kendi kliniğimde
        çalışmaktayım.
        <p>Evliyim ve bir kız, bir oğlan olmak üzere iki çocuk babasıyım.</p>
        <p>İyi derece İngilizce biliyorum.</p>
      </div>
    </div>
  );
}
