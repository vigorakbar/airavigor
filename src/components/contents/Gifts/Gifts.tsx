import { copyTextToClipboard } from '../../../utils/copyClipboard';
import { Button } from '../../Button/Button';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './Gifts.module.scss';

const accounts = [
  {
    title: 'Bank BCA',
    account: '4391560395',
    name: 'Vigor Akbar',
  },
  {
    title: 'Bank BNI',
    account: 'XXXXXXXXX',
    name: 'Airadiba Hadad',
  },
];

export const Gifts = () => {
  const onCopy = (account: string) => {
    copyTextToClipboard(account);
  };

  return (
    <SectionContainer className={s.container}>
      <div className={s.wrapper}>
        <Title className={s.title}>Wedding Gifts</Title>
        <div className={s.desc}>
          For beloved ones who may want to show your love by sending gift, we
          provide a Digital Envelope to make it easier for you, thank you
        </div>
        {accounts.map(({ title, account, name }) => (
          <div className={s.giftsContainer}>
            <div className={s.accountContainer}>
              <div className={s.accountTitle}>{title}</div>
              <div className={s.accountInfo}>Account Number: {account}</div>
              <div className={s.accountInfo}>Account Name: {name}</div>
            </div>
            <Button onClick={() => onCopy(account)}>Copy Account Number</Button>
          </div>
        ))}
        <div className={s.desc}>
          We are truly grateful for your love. Please make your confirmation in
          the form below to make it easier for us to do tracking
        </div>
        TODO: form & toast feedback
      </div>
    </SectionContainer>
  );
};
