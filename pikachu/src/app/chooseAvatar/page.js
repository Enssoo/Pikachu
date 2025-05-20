'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './chooseAvatar.module.css';
import Link from 'next/link';

export default function ChooseAvatar() {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState('/assets/profile.png');
  const router = useRouter();

  useEffect(() => {
    const generated = [
      `https://api.dicebear.com/9.x/bottts/svg?seed=Ryker`,
      `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Emery`,
      `https://api.dicebear.com/9.x/bottts/svg?seed=panda`,
      `https://api.dicebear.com/9.x/fun-emoji/svg?seed=Liliana`,
      `https://api.dicebear.com/9.x/bottts/svg?seed=ninja`,
      `https://api.dicebear.com/9.x/thumbs/svg?seed=Ryker`,
      `https://api.dicebear.com/9.x/bottts/svg?seed=alien`
    ];
    setAvatars(generated);
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
    }
  }, []);

  const handleSelect = (avatarUrl) => {
    localStorage.setItem('selectedAvatar', avatarUrl);
    setSelectedAvatar(avatarUrl);
    router.push('/profile');
  };

  const resetAvatar = () => {
    localStorage.removeItem('selectedAvatar');
    setSelectedAvatar('/assets/profile.png');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.h1}>Escolha seu Avatar</h1>
      <section className={styles.grid}>
        {avatars.map((avatar, index) => (
          <article key={index} className={styles.avatarWrapper}>
            <img src={avatar} alt={`Avatar ${index + 1}`} width={100} height={100} onClick={() => handleSelect(avatar)} className={styles.avatar}/>
          </article>
        ))}
      </section>

      <Link href="/profile">
        <button className={styles.button} onClick={resetAvatar}>Resetar Avatar</button>
      </Link> 
    </main>
  );
}
