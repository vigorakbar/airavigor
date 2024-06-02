import { copyTextToClipboard } from '../../../utils/copyClipboard';
import { Button } from '../../Button/Button';
import { InputField } from '../../InputField/InputField';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { TextAreaField } from '../../TextAreaField/TextAreaField';
import { Title } from '../../Title/Title';
import s from './Gifts.module.scss';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { useToasterStore } from 'react-hot-toast';

type GiftInput = {
  name: string;
  accountName: string;
  notes: string;
};

const accounts = [
  {
    title: 'Bank BCA',
    account: '4391560395',
    name: 'Vigor Akbar',
  },
  {
    title: 'Bank BNI',
    account: '0394849158',
    name: 'Airadiba Hadad',
  },
];

export const Gifts: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GiftInput>();

  const { toasts } = useToasterStore();
  useEffect(() => {
    toasts
      .filter(t => t.visible)
      .filter((_, i) => i > 0)
      .forEach(t => toast.dismiss(t.id));
  }, [toasts]);

  const [submitting, setSubmitting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCopy = useCallback(
    debounce(
      (account: string) => {
        toast.success('Nomor rekening berhasil disalin');
        copyTextToClipboard(account);
      },
      350,
      { leading: true, maxWait: 350 },
    ),
    [],
  );

  const onSubmitGift: SubmitHandler<GiftInput> = async data => {
    setSubmitting(true);
    // TODO: handle submit form
    console.log(data);
    const p = new Promise(res => setTimeout(() => res(1), 1000));
    await toast.promise(p, {
      loading: 'Mengirim...',
      success: 'Konfirmasi berhasil dikirim',
      error: 'Gagal mengirim konfirmasi',
    });
    reset();
    setSubmitting(false);
  };

  return (
    <SectionContainer className={s.container}>
      <div className={s.wrapper}>
        <Title className={s.title}>Wedding Gifts</Title>
        <div className={s.desc}>
          For beloved ones who may want to show your love by sending gift, we
          provide a Digital Envelope to make it easier for you, thank you
        </div>
        {accounts.map(({ title, account, name }, i) => (
          <div className={s.giftsContainer} key={i}>
            <div className={s.accountContainer}>
              <div className={s.accountTitle}>{title}</div>
              <div className={s.accountInfo}>Account Number: {account}</div>
              <div className={s.accountInfo}>Account Name: {name}</div>
            </div>
            <Button className={s.giftButton} onClick={() => onCopy(account)}>
              Copy Account Number
            </Button>
          </div>
        ))}
        <div className={s.desc}>
          We are truly grateful for your love. Please make your confirmation in
          the form below to make it easier for us to do tracking
        </div>
        <form className={s.giftForm} onSubmit={handleSubmit(onSubmitGift)}>
          <InputField
            {...register('name', { required: true })}
            placeholder="Your Name"
            className={s.giftInput}
            containerClassName={s.inputContainer}
            inputId="gift-name"
            inputLabel="Name:"
            errorMsg={errors.name && 'This field is required'}
          />
          <InputField
            {...register('accountName', { required: true })}
            placeholder="Your Account Name"
            className={s.giftInput}
            containerClassName={s.inputContainer}
            inputId="gift-account-name"
            inputLabel="Account Owner Name:"
            errorMsg={errors.accountName && 'This field is required'}
          />
          <TextAreaField
            {...register('notes')}
            className={s.giftInput}
            placeholder="Leave a message / notes"
            containerClassName={s.inputContainer}
            inputId="gift-notes"
            inputLabel="Message / Add Notes:"
          />
          <div className={s.buttonContainer}>
            <Button
              className={s.giftButton}
              type="submit"
              disabled={submitting}
            >
              Send Confirmation
            </Button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};
