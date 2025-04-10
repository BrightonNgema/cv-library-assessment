'use client';

import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className='language-select-container'>
      <select
        className="language-select"
        onChange={handleChange}
        value={currentLocale}
      >
        {locales.map(({ code, label, flag }) => (
          <option key={code} value={code}>
            {flag} {label}
          </option>
        ))}
      </select>
    </div>
  );
}
