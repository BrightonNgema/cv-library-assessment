import { Button, Footer, LocationInput } from '@/components';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { Input } from '@/components/Input';
import {useTranslations} from 'next-intl';

const distances = [
  '5 miles',
  '10 miles',
  '15 miles',
  '25 miles',
  '50 miles',
  '100 miles',
  'Any distance'
];

export default function Home() {
 const t = useTranslations('HomePage');

  return (
    <div className="container">
      <LanguageSwitcher />
      <section className="inner-container">
        <Image className="logo" src="/cv-logo.svg" width={0} height={0} alt="" />
        <div>
          <Input
            label={t('input.keywords')}
            placeholder={t('input.placeholder.keywords')}
          />
          <div className="location-distance-row">
            <div className="location-column">
              <LocationInput />
            </div>
            <div className="distance-column">
              <label className="input-label">{t('input.distance')}</label>
              <select className="select-input">
                {distances.map((distance) => (
                  <option key={distance} value={distance}>
                    {distance}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="submit-button-wrapper">
            <Button title={t('submitButton')} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}