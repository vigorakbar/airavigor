import arrange1 from '../../../assets/images/countdown-arrangement1.png';
import arrange2 from '../../../assets/images/countdown-arrangement2.png';
import { DEFAULT_AOS } from '../../../constants';
import { postGift } from '../../../utils/api';
import { getInvitationName } from '../../../utils/common';
import { copyTextToClipboard } from '../../../utils/copyClipboard';
import { Button } from '../../Button/Button';
import { InputField } from '../../InputField/InputField';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
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
  } = useForm<GiftInput>({ defaultValues: { name: getInvitationName() } });

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
    const p = postGift({
      name: data.name,
      bankAccountName: data.accountName,
      notes: data.notes,
      invitationName: getInvitationName(),
    });
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
      <Title className={s.title} data-aos="fade-right" {...DEFAULT_AOS}>
        Wedding Gifts
      </Title>
      <div className={s.desc} data-aos="fade-right" {...DEFAULT_AOS}>
        For beloved ones who may want to show your love by sending gift, we
        provide a Digital Envelope to make it easier for you, thank you
      </div>
      {accounts.map(({ title, account, name }, i) => (
        <div
          className={s.giftsContainer}
          key={i}
          data-aos="fade-down"
          {...DEFAULT_AOS}
        >
          <div className={s.accountContainer}>
            <div className={s.accountTitle}>{title}</div>
            <div>Account Number: {account}</div>
            <div>Account Name: {name}</div>
          </div>
          <Button
            size="sm"
            className={s.giftButton}
            onClick={() => onCopy(account)}
          >
            Copy Account Number
          </Button>
        </div>
      ))}
      <div className={s.wrapper} data-aos="zoom-in-up" {...DEFAULT_AOS}>
        <div className={s.descForm}>
          We are truly grateful for your love. Please make your confirmation in
          the form below to make it easier for us to do tracking
        </div>
        <form className={s.giftForm} onSubmit={handleSubmit(onSubmitGift)}>
          <InputField
            {...register('name', {
              required: 'Mohon isi nama anda',
            })}
            placeholder="Nama Anda"
            className={s.giftInput}
            containerClassName={s.inputContainer}
            inputId="gift-name"
            inputLabel="Nama:"
            errorMsg={errors.name?.message}
          />
          <InputField
            {...register('accountName', {
              required: 'Mohon isi nama rekening pengirim',
            })}
            placeholder="Nama di Rekening Bank"
            className={s.giftInput}
            containerClassName={s.inputContainer}
            inputId="gift-account-name"
            inputLabel="Nama Rekening Pengirim:"
            errorMsg={errors.accountName?.message}
          />
          {/* <TextAreaField
            {...register('notes')}
            className={s.giftInput}
            placeholder="Tinggalkan pesan / catatan"
            containerClassName={s.inputContainer}
            inputId="gift-notes"
            inputLabel="Pesan / Beri Catatan:"
          /> */}
          <div className={s.buttonContainer}>
            <Button
              size="sm"
              className={s.giftButtonSubmit}
              type="submit"
              disabled={submitting}
            >
              Kirim Konfirmasi
            </Button>
          </div>
        </form>
        <div className={s.ornContainer}>
          <div className={s.ornTop}>
            <img src={arrange1} className={s.arrange1} />
            <img src={arrange2} className={s.arrange2} />
          </div>
          <div className={s.ornBottom}>
            <img src={arrange2} className={s.arrange2} />
            <img src={arrange1} className={s.arrange1} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
